import async from 'async';
import Trello from 'node-trello';

import secrets from '../../../config/secrets';

const HOMEWORK_BOARD_ID = '160nUEdk';
const client = new Trello(secrets.trelloAPIKey, secrets.trelloAPIToken);

/**
 * Get productivity statistics.
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
const getProductivityStats = (req, res) => {
  // First, get all the ID of the backlog, in progress, and done lists
  return client.get(`/1/boards/${HOMEWORK_BOARD_ID}/lists`, (boardErr, lists) => {
    if (boardErr) {
      return res.send(JSON.stringify({}));
    }

    // Determine the list IDs associated with each stage
    const backlogID = lists.find((list) => list.name.toLowerCase() === 'backlog').id;
    const inProgressID = lists.find((list) => list.name.toLowerCase() === 'in progress').id;
    const inReviewID = lists.find((list) => list.name.toLowerCase() === 'in review').id;
    const doneID = lists.find((list) => list.name.toLowerCase() === 'done').id;

    // Fetch the cards associated with each of the lists
    return async.parallel({
      backlog: (finished) => client.get(`/1/lists/${backlogID}/cards`, finished),
      inProgress: (finished) => client.get(`/1/lists/${inProgressID}/cards`, finished),
      inReview: (finished) => client.get(`/1/lists/${inReviewID}/cards`, finished),
      done: (finished) => client.get(`/1/lists/${doneID}/cards`, finished)
    }, (cardsErr, cards) => {
      if (cardsErr) {
        return res.send(JSON.stringify({}));
      }

      return res.end(JSON.stringify({
        numBacklog: cards.backlog.length,
        // For public display, combine "In Progress" and "In Review" into a single category
        numInProgress: cards.inProgress.length + cards.inReview.length,
        numDone: cards.done.length
      }));
    });
  });
};

export default getProductivityStats;
