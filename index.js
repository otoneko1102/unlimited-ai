const funcGenerate = require('./src/generate');
const models = require('./src/models');
const allModels = require('./src/allModels');
const searchModels = require('./src/searchModels');
const config = require('./lib/config');

/**
 * Generates a response based on the given model and messages.
 * 
 * @class AI
 * @param {Format} [format={}] - The initial format object to customize properties.
 * @description The AI class is designed to generate AI responses.
 */
class AI {
  /**
   * @constructor
   * @param {{model?: string; messages?: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>}} [format={}] 
   */
  constructor (format = {}) {
    const defaultFormat = {
      model: '',
      messages: [],
    };

    this.format = { ...defaultFormat };
    this.options = {
      search: false,
      all: true
    }

    for (const key in format) {
      if (defaultFormat.hasOwnProperty(key)) {
        const value = format[key];

        switch (key) {
          case 'model':
            if (typeof value === 'string') {
              this.format[key] = value;
            } else {
              throw new TypeError(`${key} must be a string.`);
            }
            break;
          case 'messages':
            if (
              Array.isArray(value) &&
              value.every(
                (msg) =>
                  typeof msg === 'object' &&
                  msg !== null &&
                  ['system', 'user', 'assistant'].includes(msg.role) &&
                  typeof msg.content === 'string'
              )
            ) {
              this.format[key] = value;
            } else {
              throw new TypeError(`${key} must be an array of objects with { role: 'system'|'user'|'assistant', content: string }.`);
            }
            break;
          case 'raw':
            if (typeof value === 'boolean') {
              this.format[key] = value;
            } else {
              throw new TypeError(`${key} must be a boolean.`);
            }
            break;
          
          default:
            break;
        }
      }
    }
  }

  /**
   * @function setModel
   * @param {string} model - Set model.
   * @param {boolean?} search - Search models.
   * @param {boolean?} all - Search all models.
   * @returns {AI} Returns the instance of AI for chaining.
   */
  setModel(model, search, all) {
    if (typeof model !== 'string') throw new TypeError('model must be a string.');

    this.format.model = model;
    if (typeof search === 'boolean') this.options.search = search;
    if (typeof all === 'boolean') this.options.all = all;
    return this;
  }

  /**
   * @function setMessages
   * @param {Array<{ role: 'system'|'user'|'assistant', content: string }>} messages - The input messages to send to the API.
   * @returns {AI} Returns the instance of AI for chaining.
   */
  setMessages(messages) {
    if (
      Array.isArray(messages) &&
      messages.every(
        (msg) =>
          typeof msg === 'object' &&
          msg !== null &&
          ['system', 'user', 'assistant'].includes(msg.role) &&
          typeof msg.content === 'string'
      )
    ) {
      this.format.messages = messages;
      return this;
    } else {
      throw new TypeError(
        `messages must be an array of objects with { role: 'system'|'user'|'assistant', content: string }.`
      );
    }
  }

  /**
   * @function addMessage
   * @param {{ role: 'system'|'user'|'assistant', content: string }} message - The object in the input messages to send to the API.
   * @returns {AI} Returns the instance of AI for chaining.
   */
  addMessage(message) {
    if (
      typeof message === 'object' &&
      message !== null &&
      ['system', 'user', 'assistant'].includes(message.role) &&
      typeof message.content === 'string'
    ) {
      this.format.messages.push(message);
      return this;
    } else {
      throw new TypeError(
        `message must be an object with { role: 'system'|'user'|'assistant', content: string }.`
      );
    }
  }

  /**
   * @function removeMessage
   * @param {number} index - Remove an index from the input messages to send to the API.
   * @returns {AI} Returns the instance of AI for chaining.
   */
  removeMessage(index) {
    if (!Number.isInteger(index)) throw new TypeError('index must be an integer.');
    if (index < 0 || index >= this.format.messages.length) throw new RangeError(`index out of bounds. Valid range: 0 to ${this.format.messages.length - 1}`);

    this.format.messages = this.format.messages.filter((_, i) => i !== index);
    return this;
  }

  /**
   * Generates a response based on the given model and messages.
   *
   * @async
   * @function generate
   * @param {boolean?} [raw=false] - If true, returns the raw response from the API.
   * @returns {Promise<string|object>} A promise that resolves to the generated response or raw data.
   * @throws {TypeError} If the arguments are not of the expected types.
   * @throws {Error} If the model is invalid or the API request fails.
   */
  async generate(raw = false) {
    if (typeof raw !== 'boolean') throw new TypeError('raw must be a boolean.');

    const model = this.options.search ? (await searchModels(this.format.model, this.options.all))[0] : this.format.model;
    return await funcGenerate(model, this.format.messages, raw)
  }

  /**
   * Returns the current format settings.
   * 
   * @function getFormat
   * @returns {Object} Returns the current format settings.
   */
  getFormat() {
    return this.format;
  }
}

module.exports = {
  AI: AI,
  generate: funcGenerate,
  models: models,
  allModels: allModels,
  searchModels: searchModels,
  config: config
}
