const axios = require('axios');
const { MODELS_URL } = require('../config');

async function allModels() {
  process.emitWarning(
    '`allModels()` is deprecated. Please use `models` instead.',
    {
      code: 'DeprecationWarning',
      detail: 'Some models may not be available.',
    }
  );

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
