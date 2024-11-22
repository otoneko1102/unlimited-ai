const axios = require('axios');
const { API_URL } = require('../lib/config');

const allModels = require('../src/allModels');

async function generate(model, messages, raw = false) {
  if (typeof model !== 'string') throw new Error('TypeError: model must be string.');
  if (typeof messages !== 'object') throw new Error('TypeError: messages must be object.');
  
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
