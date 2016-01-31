# ensure-oxford-commas

[![npm](https://img.shields.io/npm/v/ensure-oxford-commas.svg)](https://www.npmjs.com/package/ensure-oxford-commas)
[![travis-status](https://img.shields.io/travis/kendaleiv/ensure-oxford-commas.svg)](https://travis-ci.org/kendaleiv/ensure-oxford-commas)

Ensure or discover if Oxford commas are being used in English language text.

## Install

```
> npm install ensure-oxford-commas
```

## Usage

```javascript
import { ensureOxfordCommas, isMissingOxfordCommas } from 'ensure-oxford-commas';

ensureOxfordCommas('Please choose between red, green and blue.');  // throws
ensureOxfordCommas('Please choose between red, green, and blue.'); // does not throw

isMissingOxfordCommas('Please choose between red, green and blue.');  // true
isMissingOxfordCommas('Please choose between red, green, and blue.'); // false
```

## Author

Ken Dale

## License

**MIT**

## Contributions

They're welcome! Open an issue or send a pull request!
