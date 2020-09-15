const languageDetector = require("./dist/index")
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

// var exec = require('child_process').exec;
// exec('pip3 install guesslang', function(err, stdout, stderr) {
//   if (err) {
// 		console.error("python3 is required to be preinstalled. : ", err);
// 		return;
// 	}
// });

// const { exec } = require('child_process')
// exec(`brew install python`, (err, stdout, stderr) => {
// 	if (err) {
// 		console.error("node couldn't execute the command : ", err);
// 		return;
// 	}
// 	console.log(`${stdout}`);

// 	exec(`pip3 install guesslang`, (err, stdout, stderr) => {
// 		if (err) {
// 			console.error("node couldn't execute the command : ", err);
// 			return;
// 		}
// 		console.log(`${stdout}`);
// 	})
// })

// languageDetector.detect(code, (language) => {
// 	console.log(language);
// })