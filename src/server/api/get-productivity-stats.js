import async from 'async';
import request from 'request';

import secrets from '../../../config/secrets';

/**
 * Query the Wekan API at a specified endpoint.
 *
 * @param {String} endpoint Endpoint URI, with leading forward slash.
 * @param {Function} cb Callback function called with (err, response JSON)
 */
function wekanAPI(endpoint, cb) {
  request.get({
    url: `https://api.tasks.kevinlin.info${endpoint}`,
    headers: {
      'X-Kiwi-Auth': secrets.kiwiAuth
    },
    json: {}
  }, (err, resp, body) => cb(err, body));
}

/**
 * Get productivity statistics.
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
const getProductivityStats = (req, res) => {
  return async.parallel({
    boards: (finished) => wekanAPI('/boards', finished),
    backlog: (finished) => wekanAPI('/list/zEddsbbHC6JJ8RXd9/cards', finished),
    inProgress: (finished) => wekanAPI('/list/Ze2bp4gHsne4xndJ8/cards', finished),
    done: (finished) => wekanAPI('/list/Tsy4B2gWYPenxHu6Z/cards', finished)
  }, (err, results) => {
    if (err) {
      return res.send({});
    }

    return res.send({
      numBoards: results.boards.boards.length,
      numBacklog: results.backlog.cards.length,
      numInProgress: results.inProgress.cards.length,
      numDone: results.done.cards.length
    });
  });
};

export default getProductivityStats;
