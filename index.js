const languageDetector = require("./dist/index")
const code = `'
abstract class Tree
	case class Sum(l: Tree, r: Tree) extends Tree
	case class Var(n: String) extends Tree
	case class Const(v: Int) extends Tree
'`

// languageDetector.detect(code, (language) => {
// 	console.log(language);
// })

const main = async () => {
	const lang = await languageDetector.detect(code)
	console.log(lang);
}

main()

// languageDetector.detect(code).then(lang => console.log(lang))



// => 'Clojure'