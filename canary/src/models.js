const axios = require('axios');
const { AVAILABLE_MODELS_URL } = require('../lib/config');

/**
 * Fetches all available models from the configured AVAILABLE_MODELS_URL.
 *
 * @async
 * @function
 * @returns {Promise<string[]>} A promise that resolves to an array of model objects.
 * @throws {Error} If the request fails or the server returns a non-2xx status code.
 */
async function models() {
  try {
    const response = await axios.get(AVAILABLE_MODELS_URL);
    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching models:', error.message);
    throw error;
  }
}

module.exports = models;
