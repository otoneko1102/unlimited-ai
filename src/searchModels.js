const { closeWords } = require('closewords');
const allModels = require('../src/allModels');
const models = require('../src/models');

/**
 * Generates a response based on the given model and messages.
 *
 * @async
 * @function
 * @param {string} word - Models search keywords.
 * @param {boolean} [all=true] - If true, search among all models.
 * @returns {Promise<string[]>} A promise that resolves to models.
 * @throws {TypeError} If the arguments are not of the expected types.
 */
async function searchModels(word, all = true) {
  if (typeof word !== 'string') throw new TypeError('word must be a string.');
  if (typeof all !== 'boolean') throw new TypeError('all must be a boolean.');

  const data = all ? await allModels() : await models();
  const result = await closeWords(word, data);

  return result;
}

module.exports = searchModels;
