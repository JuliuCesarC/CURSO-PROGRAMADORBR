const Text = [
	`If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the arrays.

	The sort() method preserves empty slots. If the source array is sparse, the empty slots are moved to the end of the array, and always come after all the undefined. as include.`,
	"Dia de hoje 53/88/50123",
	"Cálculos matemáticos 4x12=48 64+31*2/7=18 1/3+5/8=23/24",
	"jhon.doe@docTipes.url.com",
	"chaplin.hill_1900@fooBar.com.us",
	"Jão-Macedo@cárcara.com.br",
];

// Text.forEach((text) => {
// 	console.log(exe2(text));
// });

// Encontrar todas as palavras que terminam com a letra S.
function exe1(tx) {
	let regex = /s(\W)/gi;
	return tx.replace(regex, "(s) ");
}

// Encontrar todas as palavras que comecem ou terminem com uma vogal.
function exe2(tx) {
	let regex = /\b[aeiou]|[aeiou]\b/gi;
	return tx.replace(regex, '*');
}

// Validação simples para email
function exe3(tx) {
	if (tx.length > 150) {
		return "Email invalido ou muito extenso.";
	}
	let regex = /^(\w|\.)+\.?@(\w|\.)+\.com(\.br|\.us)?$/gi;
	return tx.match(regex) ? "Email Valido" : "Email invalido";
}

let url = '/aulas/1/'

console.log(url.match(/\//g).length);
console.log(url.match(/.$/g));