import { DateTime } from 'luxon';

/**
 * Perform a health check and log the current time.
 * @returns {void}
 */
export default () => {
    const currentTime = DateTime.now().toFormat('dd/MMMM/yyyy hh:mm:ss a');
    console.log(`QUERY RUNNING, Last Checked On : ${currentTime}`);
};

