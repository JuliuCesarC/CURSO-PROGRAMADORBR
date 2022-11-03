const MORSE = [
	{ l: "A", m: ".-" },
	{ l: "B", m: "-..." },
	{ l: "C", m: "-.-." },
	{ l: "D", m: "-.." },
	{ l: "E", m: "." },
	{ l: "F", m: "..-." },
	{ l: "G", m: "--." },
	{ l: "H", m: "...." },
	{ l: "I", m: ".." },
	{ l: "J", m: ".---" },
	{ l: "K", m: "-.-" },
	{ l: "L", m: ".-.." },
	{ l: "M", m: "--" },
	{ l: "N", m: "-." },
	{ l: "O", m: "---" },
	{ l: "P", m: ".--." },
	{ l: "Q", m: "--.-" },
	{ l: "R", m: ".-." },
	{ l: "S", m: "..." },
	{ l: "T", m: "-" },
	{ l: "U", m: "..-" },
	{ l: "V", m: "...-" },
	{ l: "W", m: ".--" },
	{ l: "X", m: "-..-" },
	{ l: "Y", m: "-.--" },
	{ l: "Z", m: "--.." },
	{ l: "SOS", m: "...---..." },
	{ l: "!", m: "-.-.--" },
	{ l: ".", m: ".-.-.-" },
];

function decodeMorse(morseCode) {
	let morseC = morseCode.split("");
	morseC.push(" ");
	let letterMorse = "";
	let space = 0;
	let sentence = "";

	for (let mc of morseC) {
		if (mc != " ") {
			letterMorse += mc;
			space = 0;
		} else {
			let word = MORSE.filter((eM) => eM.m == letterMorse)[0];
			if (word) {
				sentence += word.l;
			}
			letterMorse = "";
			space++;
			if (space == 3) {
				sentence += " ";
			}
		}
	}
	console.log(sentence);
}


decodeMorse(
	"...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-"
);
