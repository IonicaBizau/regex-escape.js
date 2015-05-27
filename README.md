# Regex Escape
Escapes input characters to be used in regular expressions.

## Installation

```sh
$ npm install regex-escape
```

## Example

```js
var RegexEscape = require("regex-escape");
console.log(RegexEscape("{#/}"));
// => "\{#\/\}"
```

## Documentation
### `RegexEscape(input)`
Encodes a string for using in a regular expression.

#### Params
- **String** `input`: The string that must be encoded.

#### Return
- **String** The encoded string.

### `proto()`
Adds the `RegexEscape` function to `RegExp` class.

#### Return
- **Function** The `RegexEscape` function.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## Thanks
Big thanks to [CoolAj86](http://stackoverflow.com/users/151312/coolaj86) for
posting [this answer](http://stackoverflow.com/a/6969486/1420197). This library
is uses the regex black magic from that answer. :sparkles:

## License
See the [LICENSE](./LICENSE) file.
