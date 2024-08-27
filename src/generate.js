const axios = require('axios');
const { API_URL } = require('../config');

async function generate(model, messages, raw = false) {
  if (typeof model !== 'string') throw new Error('TypeError: model must be string.');
  if (typeof messages !== 'object') throw new Error('TypeError: messages must be object.');
  
  try {
    const response = await axios.post(API_URL, { model, messages });
    if (response.status >= 200 && response.status < 300) {
      if (raw) {
        return response.data;
      } else {
        return response.data.choices[0].message.content;
      }
    } else {
      throw new Error(`Request failed with status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error generating response:', error.message);
    throw error;
  }
}

module.exports = generate;
