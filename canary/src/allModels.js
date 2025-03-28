const axios = require('axios');
const { MODELS_URL } = require('../lib/config');

/**
 * Fetches all available model IDs from the configured MODELS_URL.
 *
 * @async
 * @function
 * @returns {Promise<string[]>} A promise that resolves to an array of model IDs.
 * @throws {Error} If the request fails or the server returns a non-2xx status code.
 */
async function allModels() {
  try {
    const response = await axios.get(MODELS_URL);
    if (response.status >= 200 && response.status < 300) {
      return response.data.data.map(d => d.id);
    } else {
      throw new Error(`Request failed with status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching models:', error.message);
    throw error;
  }
}

module.exports = allModels;
