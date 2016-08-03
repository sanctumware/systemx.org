import async from 'async';
import fs from 'fs';
import last from 'just-last';
import dottie from 'dottie';

import secrets from '../../../config/secrets';

/**
 * Read the contents of a file safely; will not throw if the file does not exist.
 *
 * @param {String} filePath Fully qualified path to the file to read
 * @returns {Object} JSON-parsed contents of the file, or an empty object on error.
 */
const readFile = (filePath) => {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch (err) {
    console.error(err);
    return {};
  }
};

/**
 * Get miscellaneous statistics.
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
const getMiscStats = (req, res) => {
  async.parallel({
    fbMessages: (finished) => {
      const messageData = dottie.get(readFile(secrets.fbMessageStorePath), secrets.fbUserID, []);
      return finished(null, messageData);
    }
  }, (err, results) => {
    if (err) {
      console.error(err);
      return res.end(JSON.stringify({}));
    }

    const messagesLastDay = results.fbMessages.filter((message) => message.timestamp >= Date.now() - 24 * 60 * 60 * 1000);

    return res.end(JSON.stringify({
      numMessagesLastDay: messagesLastDay.length,
      mostRecentMessageTimestamp: last(results.fbMessages).timestamp / 1000,
      mostRecentMessageTag: last(results.fbMessages.filter((message) => message.tag)).tag
    }));
  });
};

export default getMiscStats;
