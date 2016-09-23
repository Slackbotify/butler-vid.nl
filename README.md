
# butler-vid.nl
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![npm](https://img.shields.io/npm/v/butler-vid.svg?maxAge=3600)](https://www.npmjs.com/package/butler-vid)

> Vid.nl handlers for Butler.

## Butler
_More about the butler project here._

## Enable / Install
Enabling this handler for your Butler bot is as easy as requiring the package.
```javascript
bot.requireRegister(require('butler-vid'));
```

## Handlers
### Traffic
**Available in:** Direct message. <br>
Trigger: `!traffic`

To get the latest traffic information of the dutch roads.

### Traffic filter
**Available in:** Direct message. <br>
Trigger: `!traffic <roadnumber>` _(e.g. !traffic a1)_

Same functionality as `!traffic` but lets you add a filter to it.

### License
MIT
