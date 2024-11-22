const ai = require('../index');

(async () => {
  const model = 'gemini-1.5-flash-exp-0827';
  const messages = [
    { role: 'user', content: 'Hello!' },
    { role: 'system', content: 'You are a 12-year-old girl.' }
  ];

  console.log(await ai.generate(model, messages));
})();
