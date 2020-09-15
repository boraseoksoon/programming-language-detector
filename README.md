## programming-language-detector

programming-language-detector is a thin wrapper around [guesslang](https://github.com/yoeo/guesslang), as built to be able to detect which programming langauge it is written in when given a chunk of source code string on javascript platform such as Node.js.
(not a file or project unit but for when given a string.)

While it is built to be used for [autocomplete-me](http://autocomplete-me.com), it is also aiming to support [node](http://nodejs.org), and modern web browsers CDN supports and CLI via [home brew](https://brew.sh) as independently as possible alon with Javascript.

[![NPM Version][npm-image]][npm-url]

```javascript
const { languageDetector } = require("programming-language-detector")

const code = `'
abstract class Tree
	case class Sum(l: Tree, r: Tree) extends Tree
	case class Var(n: String) extends Tree
	case class Const(v: Int) extends Tree
'`

const main = async () => {
	try {
		const lang = await languageDetector.detect(code)
		console.log(lang);
	} catch (err) {
		console.log(err);
	}
}

main()
// => 'Scala'
```

## Warning
It only works now for node.js.
If there is problem regarding guesslang, try 
```
pip3 install guesslang
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

## Credits
It is a thin wrapper around [guesslang](https://github.com/yoeo/guesslang) for me to be able to use on Node.js platform, MIT license software, which is the nice enough software and does the job really well.

## Contributing

[Contributing Guide](Contributing.md)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
