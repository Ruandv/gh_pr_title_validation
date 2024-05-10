import * as core from '@actions/core';
import * as github from '@actions/github';

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run(): Promise<void> {
  try {
    // The `who-to-greet` input is defined in action metadata file
    const whoToGreet: string = core.getInput('who-to-greet', { required: true });
    core.info(`Hello, ${whoToGreet}!`);

    // Get the current time and set as an output
    const time: string = new Date().toTimeString();
    core.setOutput('time', time);

    // Output the payload for debugging
    core.info(
      `The event payload: ${JSON.stringify(github.context.payload, null, 2)}`
    );
  } catch (error: any) {
    // Fail the workflow step if an error occurs
    core.setFailed(error.message);
  }
}

export {
  run
};