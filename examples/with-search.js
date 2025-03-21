const ai = require('unlimited-ai');

(async () => {
  const model = (await ai.searchModels('gpt'))[0];
  // Use available models
  // const model = (await ai.searchModels('gpt', false))[0];
  const messages = [
    { role: 'user', content: 'Hello!' },
    { role: 'system', content: 'You are a 12-year-old girl.' }
  ];

  console.log(await ai.generate(model, messages));
})();
