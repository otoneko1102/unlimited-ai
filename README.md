![npm version](https://badge.fury.io/js/unlimited-ai.svg) ![npm downloads](https://img.shields.io/npm/d18m/unlimited-ai.svg?maxAge=3600) ![last commit](https://img.shields.io/github/last-commit/otoneko1102/unlimited-ai) ![commit actvity](https://img.shields.io/github/commit-activity/w/otoneko1102/unlimited-ai) ![code size](https://img.shields.io/github/languages/code-size/otoneko1102/unlimited-ai)
<br>
[![NPM](https://nodei.co/npm/unlimited-ai.png)](https://nodei.co/npm/unlimited-ai/)
# unlimited-ai
Provides unlimited AI answers for Node.js.<br>
Powered by [Voids API](https://voids.top/).

> ⚠ At the request of the Voids API owner, the specifications of some functions have been changed. ⚠

> ⚠ The Voids API owner has stated that an API key will be required in the future. ⚠

> Note: The Voids API is not owned or operated by the developer of this package, so please do not contact us through GitHub Issues or other such inquiries about the API being down.

###### Teams
<a href="https://oto.pet/"><img src="https://www.otoneko.cat/img/logo.png" alt="OTONEKO.CAT" style="display: block; width: auto; height: 100px;"/></a>
<a href="https://www.otoho.me/"><img src="https://www.otoho.me/img/logo.png" alt="Oto Home" style="display: block; width: auto; height: 100px;"/></a>

## Usage
- Example with class: [class.js](https://github.com/otoneko1102/unlimited-ai/tree/main/examples/class.js)
- Example (gemini): [gemini.js](https://github.com/otoneko1102/unlimited-ai/tree/main/examples/gemini.js)
- Example (gpt): [gpt-4.js](https://github.com/otoneko1102/unlimited-ai/tree/main/examples/gpt-4.js)
- Example with search: [with-search.js](https://github.com/otoneko1102/unlimited-ai/tree/main/examples/with-search.js)

### AI(format?: { model?: string, messages?: Array\<{ role: string, content: string }\> })
  #### setModel(model: string, search?: boolean, all?: boolean): AI
  #### setMessages(messages: Array\<{ role: string, content: string }\>): AI
  #### addMessage(message: { role: string, content: string }): AI
  #### removeMessage(index: Integer): AI
  #### generate(raw?: boolean): Promise\<string | object\>
  #### getFormat(): { model?: string, messages?: Array\<{ role: string, content: string }\> }

```js
// Example
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
```

### .generate(model, messages, raw): Promise\<string | object\>
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
Available models: ai.models()

#### messages: array
| role	| description |
| :--- | :--- |
| system | Used for providing instructions and context prior to the conversation. |
| user | Used to identify user messages. |
| assistant |Used to identify AI messages. |

#### raw?: boolean (default: false)

### .models(): Promise\<string[]\>
Return array of available models.

### .allModels(): Promise\<string[]\>
Return array of all models.

### .searchModels(word, all): Promise\<string[]\>
Search models.

#### word: string
Search keywords.

#### all?: boolean (default: false)
Search from all or available.

### .config: object
Return URLs.

## Change Log
### 5.x --> 6.0.0
Class has been added.
### 4.x --> 5.0.0
Model search function added.
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
