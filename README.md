## WARNING: IT DOES NOT WORK NOW. IT IS IN THE PROGRESS OF BEING BUILT NOW.

## programming-language-detector

programming-language-detector, written in ClojureScript, and a little Javascript, is to detect which programming langauge given a source code string is written in.
(not a file or project unit but for when given a string.)

While it is born and built to help [autocomplete-me](http://autocomplete-me.com), it is also aiming to support [node](http://nodejs.org), and modern web browsers and CLI via [home brew](https://brew.sh) as independently as it can.

[![NPM Version][npm-image]][npm-url]

```clojure
const languageDetector = require("programming-language-detector")

const code = "
(loop [x 10]
  (when (< x 10)
    (prn x)
    (recur (dec x))))
"
const res = languageDetector.detect(code)

console.log(res)
// => 'Clojure'

```

## Installation for Node.js

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install programming-language-detector
```

## Installation for Web Browser 

CDN

```
TO BE INTRODUCED
```

## Features

It should do one thing well
It should get as simple to use as possible

## Contributing

[Contributing Guide](Contributing.md)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express