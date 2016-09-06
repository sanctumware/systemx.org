import asana from 'asana';
import async from 'async';
import dottie from 'dottie';
import omit from 'just-omit';

import secrets from '../../../config/secrets';

const client = asana.Client.create().useAccessToken(secrets.asanaAccessToken);

/**
 * Get productivity statistics.
 *
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 */
const getProductivityStats = (req, res) => {
  async.parallel({
    asana: (finished) => {
      client.projects.tasks(16792280658010)
        .then((resp) => {
          const taskQueryTasks = resp.data
            .map((task) => task.id)
            .filter(Boolean)
            .slice(0, 20)
            .map((taskID) => (taskFinished) => {
              client.tasks.findById(taskID)
                .then((details) => taskFinished(null, details));
            });
          return async.parallel(taskQueryTasks, finished);
        });
    }
  }, (err, results) => {
    if (err) {
      return res.end(JSON.stringify({}));
    }

    const recentTasks = results.asana.map((taskDetails) => ({
      timestamp: new Date(dottie.get(taskDetails, 'created_at', '')).getTime() / 1000,
      name: dottie.get(taskDetails, 'name', ''),
      isCompleted: dottie.get(taskDetails, 'completed', true)
    })).sort((a, b) => b.timestamp - a.timestamp);

    const createdTasksLastWeek = recentTasks
        .filter((task) => task.timestamp >= new Date().getTime() / 1000 - 7 * 24 * 60 * 60);
    const completedTasksLastWeek = createdTasksLastWeek.filter((task) => task.isCompleted);

    return res.end(JSON.stringify({
      numCreatedTasksLastWeek: createdTasksLastWeek.length,
      numCompletedTasksLastWeek: completedTasksLastWeek.length,
      mostRecentTask: omit(recentTasks[0], 'name')
    }));
  });
};

export default getProductivityStats;
