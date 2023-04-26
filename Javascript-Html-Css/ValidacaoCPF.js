const textCpf = [
	"772.843.809-34",
	"883 706 800/03",
	"5001 331 764-88",
	"325.778.230-61",
	"239.588 990/30",
	"568.456.36",
	"55632.5 48/621",
	48512.435612
];

textCpf.forEach((text) => {
	console.log(exe3(text));
});

// Digitar CPF com ponto e retornar sem ponto e barra
function exe1(text) {
	let regexCpf = /^(\d{3}).(\d{3}).(\d{3}).(\d{2})/;

	return text.replace(regexCpf, "$1$2$3$4");
}

// Digitar CPF com e sem ponto, com / ou - no ultimo grupo de digito.

function exe2(text) {
	let regexCPF = /\D/g;

	return text.replace(regexCPF, "");
}

function exe3(text) {
	let textRegex = String(text).replace(/\D/g, "");
	return textRegex.length == 11
		? textRegex.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
		: "CPF invalido";
}
