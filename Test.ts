import { StringValidator } from "./lib/Validation";
import { ZipCodeValidator } from "./lib/ZipCodeValidator";
import { LettersOnlyValidator } from "./lib/LettersOnlyValidator";

export default function Test()
{
	// Несколько тестовых примеров
	let strings = ["Hello", "98052", "101"];

	// Валидаторы
	let validators: { [s: string]: StringValidator; } = {};
	validators["ZIP code"] = new ZipCodeValidator();
	validators["Letters only"] = new LettersOnlyValidator();

	// Для каждой строки показывает, прошла ли она каждый валидатор
	strings.forEach(s => {
		for (let name in validators)
		{
			console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
		}
	});
}
