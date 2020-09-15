const nodeLanguageDetector = require("./dist/index")
const webLanguageDetector = require("./dist/web_index")

if (
  typeof module !== 'undefined' &&
  typeof module.exports !== 'undefined'
) {
	exports.languageDetector = nodeLanguageDetector
} else {
	window = { webLanguageDetector }
}