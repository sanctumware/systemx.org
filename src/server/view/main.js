import fs from 'fs';

/**
 * Main handler for serving client views.
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
function handler(req, res) {
  const index = fs.readFileSync('src/client/static/dist/index.html');
  res.setHeader('content-type', 'text/html');
  return res.send(index);
}

export default handler;
