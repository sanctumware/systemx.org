import async from 'async';
import dottie from 'dottie';
import request from 'request';

import secrets from '../../../config/secrets';

const DEFAULT_HEADERS = {
  Accept: 'application/vnd.github.v3+json',
  'User-Agent': 'kevinlin.info'
};

/**
 * Get public (Github) contribution statistics.
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
const getPublicContributions = (req, res) => {
  async.parallel({
    profile: (finished) => {
      request.get({
        url: `https://LINKIWI:${secrets.githubAccessToken}@api.github.com/users/LINKIWI`,
        headers: DEFAULT_HEADERS
      }, (err, resp, body) => finished(err, body));
    },
    events: (finished) => {
      request.get({
        url: `https://LINKIWI:${secrets.githubAccessToken}@api.github.com/users/LINKIWI/events`,
        headers: DEFAULT_HEADERS
      }, (err, resp, body) => finished(err, body));
    },
    starred: (finished) => {
      request.get({
        url: `https://LINKIWI:${secrets.githubAccessToken}@api.github.com/users/LINKIWI/starred`,
        headers: DEFAULT_HEADERS
      }, (err, resp, body) => finished(err, body));
    }
  }, (err, results) => {
    if (err) {
      return res.end(JSON.stringify({}));
    }

    const profileData = JSON.parse(results.profile);
    const eventsData = JSON.parse(results.events);
    const starredData = JSON.parse(results.starred);

    return res.end(JSON.stringify({
      numRepos: dottie.get(profileData, 'public_repos', 0),
      lastActivity: new Date(dottie.get(eventsData[0], 'created_at')).getTime() / 1000,
      lastActivityRepo: dottie.get(eventsData[0], 'repo.name', ''),
      numFollowers: dottie.get(profileData, 'followers', 0),
      numFollowing: dottie.get(profileData, 'following', 0),
      numStarred: starredData.length,
      mostRecentStarred: dottie.get(starredData[0], 'full_name', '')
    }));
  });
};

export default getPublicContributions;
