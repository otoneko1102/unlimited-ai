const axios = require('axios');
const { API_URL } = require('../lib/config');

/**
 * Generates a response based on the given model and messages.
 *
 * @async
 * @function
 * @param {string} model - The model to use for generation.
 * @param {Array<{ role: 'system'|'user'|'assistant', content: string }>} messages - The input messages to send to the API.
 * @param {boolean?} [raw=false] - If true, returns the raw response from the API.
 * @returns {Promise<string|object>} A promise that resolves to the generated response or raw data.
 * @throws {TypeError} If the arguments are not of the expected types.
 * @throws {Error} If the model is invalid or the API request fails.
 */
async function generate(model, messages, raw = false) {
  if (typeof model !== 'string') throw new TypeError('model must be a string.');
  if (
    !Array.isArray(messages) ||
    !messages.every(
      (msg) =>
        typeof msg === 'object' &&
        msg !== null &&
        ['system', 'user', 'assistant'].includes(msg.role) &&
        typeof msg.content === 'string'
    )
  ) {
    throw new TypeError('messages must be an array of objects with { role: "system"|"user"|"assistant", content: string }.');
  }
  if (typeof raw !== 'boolean') throw new TypeError(' a boolean.');

  try {
    const response = await axios.post(API_URL, { model, messages });
    if (response.status >= 200 && response.status < 300) {
      if (raw) {
        return response.data;
      } else {
        return response.data.choices[0].message.content;
      }
    } else {
      if (raw) {
        return response.data;
      } else {
        return null;
      }
    }
  } catch (error) {
    console.error('Error generating response:', error.message);
    throw error;
  }
}

module.exports = generate;
