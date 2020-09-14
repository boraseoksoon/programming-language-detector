## WARNING: IT DOES NOT WORK NOW. IT IS IN THE PROGRESS OF BEING BUILT NOW.

## programming-language-detector

programming-language-detector, written in Clojure and ClojureScript, and a little Javascript,is to detect which programming langauge given a source code string is written in.
(not a file or project unit but for when given a string.)

It is going to rely heavily on [guesslang](https://github.com/yoeo/guesslang), which is the nice enough software that does the job really well.

While it is born and built to help [autocomplete-me](http://autocomplete-me.com), it is also aiming to support [node](http://nodejs.org), and modern web browsers and CLI via [home brew](https://brew.sh) as independently as it can.

[![NPM Version][npm-image]][npm-url]

```javascript
const languageDetector = require("./dist/index")
const code = `'
abstract class Tree
	case class Sum(l: Tree, r: Tree) extends Tree
	case class Var(n: String) extends Tree
	case class Const(v: Int) extends Tree
'`

const main = async () => {
	const lang = await languageDetector.detect(code)
	console.log(lang);
}

main()
// => 'Scala'
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