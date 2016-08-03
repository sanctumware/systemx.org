import async from 'async';
import feed from 'feed-read';
import dottie from 'dottie';
import request from 'request';

import secrets from '../../../config/secrets';

/**
 * Get private contribution statistics from Gitlab and Jenkins.
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
const getPrivateContributions = (req, res) => {
  async.parallel({
    projects: (finished) => {
      request.get({
        url: 'https://git.kevinlin.info/api/v3/projects/all',
        qs: {
          private_token: secrets.gitlabPrivateToken,
          order_by: 'last_activity_at',
          per_page: 10000
        }
      }, (err, resp, body) => finished(err, body));
    },
    jenkins: (finished) => {
      request.get({
        url: `https://${secrets.jenkinsAPIUser}:${secrets.jenkinsAPIToken}@ci.kevinlin.info/rssLatest`
      }, (err, resp, body) => {
        if (err) {
          return finished(err);
        }
        return feed.atom(body, finished);
      });
    }
  }, (err, results) => {
    if (err) {
      console.error(err);
      return res.end(JSON.stringify({}));
    }
    const projectsData = JSON.parse(results.projects);

    return res.end(JSON.stringify({
      numRepos: projectsData.length,
      lastActivity: new Date(projectsData[0].last_activity_at).getTime() / 1000,
      lastActivityRepo: dottie.get(projectsData[0], 'path_with_namespace', ''),
      lastBuild: dottie.get(results.jenkins[0], 'title', ''),
      lastBuildTime: new Date(dottie.get(results.jenkins[0], 'published')).getTime() / 1000
    }));
  });
};

export default getPrivateContributions;
