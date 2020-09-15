const { languageDetector } = require("./index")

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

// describe("Check if detecting a language works well", async () => {
//   it("** white space trimming test **", async (done) => {
// 		try {
// 			const lang = await languageDetector.detect(code)
// 			const cond = (lang.length > 0 && typeof lang === 'string')
// 			expect(cond).toEqual(true);
// 		} catch (err) {
// 			expect(false).toEqual(true);
// 			console.log(err);
// 		}

//     done();
// 	});
// });