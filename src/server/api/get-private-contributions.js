import async from 'async';
import dottie from 'dottie';
import feed from 'feed-read';
import request from 'request';
import safeParse from 'safe-json-parse/tuple';

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
      function projectsForPage(page, cb) {
        request.get({
          url: 'https://git.kevinlin.info/api/v3/projects/all',
          qs: {
            /* eslint-disable camelcase */
            private_token: secrets.gitlabPrivateToken,
            order_by: 'last_activity_at',
            per_page: 100,
            page: page
            /* eslint-enable camelcase */
          }
        }, (err, resp, body) => cb(err, body));
      }

      let currentPage = 1;
      let projects = [];

      function onPagination(paginateErr, paginateProjects) {
        const parsed = safeParse(paginateProjects);

        if (!parsed[1].length || paginateErr || parsed[0]) {
          return finished(paginateErr, projects);
        }

        projects = projects.concat(parsed[1]);
        currentPage++;
        return projectsForPage(currentPage, onPagination);
      }

      return projectsForPage(currentPage, onPagination);
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
      return res.end(JSON.stringify({}));
    }

    const projectsData = results.projects;
    const jenkinsData = results.jenkins.sort((a, b) => {
      return new Date(b.published).getTime() - new Date(a.published).getTime();
    });

    return res.end(JSON.stringify({
      numRepos: projectsData.length,
      lastActivity: new Date(projectsData[0].last_activity_at).getTime() / 1000,
      lastActivityRepo: dottie.get(projectsData[0], 'path_with_namespace', ''),
      lastBuild: dottie.get(jenkinsData[0], 'title', ''),
      lastBuildTime: new Date(dottie.get(jenkinsData[0], 'published')).getTime() / 1000
    }));
  });
};

export default getPrivateContributions;
