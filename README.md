# Sort Values

![Last version](https://img.shields.io/github/tag/Kikobeats/sort-values.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/sort-values/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/sort-values)
[![Dependency status](http://img.shields.io/david/Kikobeats/sort-values.svg?style=flat-square)](https://david-dm.org/Kikobeats/sort-values)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/sort-values.svg?style=flat-square)](https://david-dm.org/Kikobeats/sort-values#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/sort-values.svg?style=flat-square)](https://www.npmjs.org/package/sort-values)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Sort the keys of an object based in the value.

## Install

```bash
npm install sort-values --save
```
If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install sort-values --save
```

and later link in your HTML:

```html
<script src="bower_components/sort-values/dist/sort-values.js"></script>
```

## Usage

```js
var sortValues = require('sort-values');

sortValues({en: 10, es: 100, it: 50}, 'desc');
//=> {es: 100, it: 50, en: 10}

sortValues({en: 10, es: 100, it: 50}, 'asc');
//=> {en: 10, it: 50, es: 100}

sortValues({en: 10, es: 100, it: 50});
//=> {en: 10, it: 50, es: 100}
```

## API

### sortValues(input, mode)

#### input

*Required*
Type: `Object`

#### mode

Type: `String`
Default: `asc`

How to sort the object. Could be `asc` or `desc`.

## Related

* [sort-keys](https://github.com/sindresorhus/sort-keys) – Sort the keys of an object.
* [sort-keys-recursive](https://github.com/Kikobeats/sort-keys-recursive) – Sort the keys of an object recursively.

## License

MIT © [Kiko Beats](http://kikobeats.com)
