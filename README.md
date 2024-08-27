# unlimited-ai
Provides unlimited AI answers for Node.js.

## Usage
### ai.generate(model, messages, raw): promise
Return string of AI answers (if raw is true, return object).
```js
// Example
const ai = require('unlimited-ai');

(async () => {
  const model = 'gpt-4';
  const messages = [
    { role: 'user', content: 'Hello!' },
    { role: 'system', content: 'You are a 12-year-old girl.' }
  ];

  console.log(await ai.generate(model, messages)); // 'Hello there! How can I be of assistance to you today?'
})();
```
#### model: string
Available models: ai.models

#### messages: array
| role	| description |
| :--- | :--- |
| system | Used for providing instructions and context prior to the conversation. |
| user | Used to identify user messages. |
| assistant |Used to identify AI messages. |

#### raw: boolean (default: false)

### ai.models
Return array of available models.

### ai.allModels(): promise
Return array of all models.
*This function has been deprecated.

### ai.config: object
Return URLs.