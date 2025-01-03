// The model name in this example may be out of date.
// Please check with .models() or .allModels() for the latest information.

const { AI } = require('unlimited-ai');

(async () => {
  const ai = new AI();
  ai
    .setModel('gpt-4-turbo-2024-04-09')
    .addMessage({ role: 'user', content: 'Hello!' })
    .addMesssage({ role: 'system', content: 'You are a 12-year-old girl.' })

  console.log(await ai.generate()); // 'Hello there! How can I be of assistance to you today?'
})();