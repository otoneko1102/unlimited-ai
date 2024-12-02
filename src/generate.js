const axios = require('axios');
const { API_URL } = require('../lib/config');

const allModels = require('../src/allModels');

/**
 * Generates a response based on the given model and messages.
 *
 * @async
 * @function
 * @param {string} model - The model to use for generation.
 * @param {object} messages - The input messages to send to the API.
 * @param {boolean} [raw=false] - If true, returns the raw response from the API.
 * @returns {Promise<string|object>} A promise that resolves to the generated response or raw data.
 * @throws {TypeError} If the arguments are not of the expected types.
 * @throws {Error} If the model is invalid or the API request fails.
 */
async function generate(model, messages, raw = false) {
  if (typeof model !== 'string') throw new Error('TypeError: model must be string.');
  if (typeof messages !== 'object') throw new Error('TypeError: messages must be object.');
  if (typeof raw !== 'boolean') throw new Error('TypeError: raw must be boolean.');

  try {
    const models = await allModels();
    if (!models.includes(model)) throw new Error('ModelError: model is invalid.');

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
