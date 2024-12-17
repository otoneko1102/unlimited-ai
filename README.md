# unlimited-ai
Provides unlimited AI answers for Node.js.<br>
Powered by [Voids API](https://voids.top/).

> Note: The Voids API is not owned or operated by the developer of this package, so please do not contact us through GitHub Issues or other such inquiries about the API being down.

###### Teams
<a href="https://oto.pet/"><img src="https://www.otoneko.cat/img/logo.png" alt="OTONEKO.CAT" style="display: block; width: auto; height: 100px;"/></a>
<a href="https://www.otoho.me/"><img src="https://www.otoho.me/img/logo.png" alt="Oto Home" style="display: block; width: auto; height: 100px;"/></a>

## Usage
### .generate(model, messages, raw): promise (string | object)
Return string of AI answers (if raw is true, return object).
```js
// Example
// The model name in this example may be out of date.
// Please check with .models() or .allModels() for the latest information.

const ai = require('unlimited-ai');

(async () => {
  const model = 'gpt-4-turbo-2024-04-09';
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

#### raw?: boolean (default: false)

### .models(): promise (array)
Return array of available models.

### .allModels(): promise (array)
Return array of all models.

### .config: object
Return URLs.

## Change Log
### 3.x --> 4.0.0
`.models` is no longer supported and has been replaced by `.models()`.
### 2.x --> 3.0.0
Developers and development groups have been listed. Features have been optimized.
### 1.x --> 2.0.0
TypeScript supported!
### 0.x --> 1.0.0
Package released!

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>
