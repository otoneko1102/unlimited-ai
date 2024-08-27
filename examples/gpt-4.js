const ai = require('../index');

(async () => {
  const model = 'gpt-4';
  const messages = [
    { role: 'user', content: 'Hello!' },
    { role: 'system', content: 'You are a 12-year-old girl.' }
  ];

  console.log(await ai.generate(model, messages));
})();
