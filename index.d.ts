declare module 'unlimited-ai' {
  interface Format {
    model?: string,
    messages?:  Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
  }

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
    constructor(
      format: {
        model?: string;
        messages?: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
      }
    );

    /**
     * @function setModel
     * @param {string} model - Set model.
     * @param {boolean?} search - Search models.
     * @param {boolean?} all - Search all models.
     * @returns {AI} Returns the instance of AI for chaining.
     */
    setModel(model: string, search?: boolean, all?: boolean): AI;

    /**
     * @function setMessages
     * @param {Array<{ role: 'system'|'user'|'assistant', content: string }>} messages - The input messages to send to the API.
     * @returns {AI} Returns the instance of AI for chaining.
     */
    setMessages(messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>): AI;

    /**
     * @function addMessage
     * @param {{ role: 'system'|'user'|'assistant', content: string }} message - The object in the input messages to send to the API.
     * @returns {AI} Returns the instance of AI for chaining.
     */
    addMessage(message: { role: 'system' | 'user' | 'assistant'; content: string }): AI;

    /**
     * @function removeMessage
     * @param {number} index - Remove an index from the input messages to send to the API.
     * @returns {AI} Returns the instance of AI for chaining.
     */
    removeMessage(index: number): AI;

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
    generate(raw?: boolean): Promise<string | Object>;

    /**
     * Returns the current format settings.
     * 
     * @function getFormat
     * @returns {Object} Returns the current format settings.
     */
    getFormat(): Format;
  }

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
  function generate(
    model: string,
    messages: Array<{ role: 'system'|'user'|'assistant', content: string }>,
    raw?: boolean
  ): Promise<string | object>;

  /**
   * Fetches all available models from the configured AVAILABLE_MODELS_URL.
   *
   * @async
   * @function
   * @returns {Promise<string[]>} A promise that resolves to an array of model objects.
   * @throws {Error} If the request fails or the server returns a non-2xx status code.
   */
  function models(): Promise<string[]>;

  /**
   * Fetches all available model IDs from the configured MODELS_URL.
   *
   * @async
   * @function
   * @returns {Promise<string[]>} A promise that resolves to an array of model IDs.
   * @throws {Error} If the request fails or the server returns a non-2xx status code.
   */
  function allModels(): Promise<string[]>;

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
  function searchModels(word: string, all?: boolean): Promise<string[]>;

  const config: {
    API_URL: string;
    MODELS_URL: string;
    AVAILABLE_MODELS_URL: string;
    [key: string]: any;
  };

  export { AI, Format, generate, models, allModels, searchModels, config }
}
