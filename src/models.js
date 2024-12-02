const axios = require('axios');
const { AVAILABLE_MODELS_URL } = require('../lib/config');

async function models(raw = false) {
  if (typeof raw !== 'boolean') throw new Error('TypeError: raw must be boolean.');

  try {
    const response = await axios.get(AVAILABLE_MODELS_URL);
    if (response.status >= 200 && response.status < 300) {
      if (raw) {
        return response.data;
      } else {
        return response.data.data;
      }
    } else {
      throw new Error(`Request failed with status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching models:', error.message);
    throw error;
  }
}

module.exports = models;
