# regex-escape [![Support this project][donate-now]][paypal-donations]

Escapes input characters to be used in regular expressions.

## Installation

```sh
$ npm i regex-escape
```

## Example

```js
// Dependencies
var RegexEscape = require("regex-escape");

console.log(RegexEscape("{#/}"));
// => \{#\/\}
```

## Documentation

### `RegexEscape(input)`
Escapes a string for using it in a regular expression.

#### Params
- **String** `input`: The string that must be escaped.

#### Return
- **String** The escaped string.

### `proto()`
Adds the `RegexEscape` function to `RegExp` class.

#### Return
- **Function** The `RegexEscape` function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Thanks
Big thanks to [CoolAj86](http://stackoverflow.com/users/151312/coolaj86) for posting [this answer](http://stackoverflow.com/a/6969486/1420197). This library uses the black magic regex from that answer. :sparkles:

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`barbe`](https://github.com/IonicaBizau/node-barbe)

 - [`doodle-data`](https://github.com/regular/doodle-data#readme) by Jan Bölsche

 - [`luhnify`](https://github.com/koopero/luhnify#readme) by Samm Cooper

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md