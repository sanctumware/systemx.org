/* global window */

import browserHistory from 'react-router/lib/browserHistory';
import urlParse from 'url-parse';

/**
 * Load the specified URL after a delay.
 *
 * @param {String} location The URL to load.
 * @param {Number=} delay Milliseconds to delay the page load.
 * @returns {Number} Timeout ID of the setTimeout delay, if applicable.
 */
function go(location, delay) {
  if (!delay || delay <= 0) {
    window.location.href = location;
    return -1;
  }

  return window.setTimeout(() => go(location, 0), delay);
}

/**
 * Push the specified path to browser history, handled via react-router.
 *
 * @param {String} path The path to push.
 * @param {Number=} delay Milliseconds to delay the push.
 * @returns {Number} Timeout ID of the setTimeout delay, if applicable.
 */
function push(path, delay) {
  if (!delay || delay <= 0) {
    browserHistory.push(path);
    return -1;
  }

  return window.setTimeout(() => push(path, 0), delay);
}

/**
 * Parse the current window URL.
 *
 * @returns {Object} Parsed URL object.
 */
function parseURL() {
  return urlParse(window.location.href, true);
}

export default {
  go,
  push,
  parseURL
};
