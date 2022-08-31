//gera a matriz
function gerarAmpulheta(n) {
	var matriz = JSON.parse(
		JSON.stringify(new Array(n).fill(new Array(n).fill(" ")))
	);
	//preenche base e topo com '#'
	for (let lin = 0; lin < n; lin++) {
		if (lin === 0) {
			matriz[0] = new Array(n).fill("#");
			matriz[n - 1] = new Array(n).fill("#");
		}
		//preenche as laterais com '#'
		matriz[lin][0] = "#";
		matriz[lin][n - 1] = "#";

		//preenche limites da ampulheta
		matriz[lin][lin] = "#";
		matriz[lin][n - 1 - lin] = "#";

		//preenche conteudo
		for (let c = lin; c < n - lin; c++) {
			matriz[lin][c] = "#";
		}
	}
	return matriz;
}

//imprime no console
const desenharAmpulhetaConsole = function (matriz) {
	matriz.forEach((row) => {
		console.log(row.join(""));
	});
	console.log(`n = ${matriz.length}`);
	const separador = new Array(matriz.length).fill("-").join("");
	console.log(separador);
};

//animacao areia caindo
function desenharAnimacao(matriz) {
	let c = 1;
	let controleInterval = Math.ceil(matriz.length / 2 - 1);
	var interval = setInterval(() => {
		let linhaBackup = matriz[c];
		matriz[c] = matriz[matriz.length - 1 - c];
		matriz[matriz.length - 1 - c] = linhaBackup;
		desenharAmpulhetaConsole(matriz);
		c++;

		if (c == controleInterval) {
			console.log("FIM!");
			clearInterval(interval);
		}
	}, 1500);
}

//altura
const alturaAmpulheta = 25;

//verificador altura >= 20
function validaAltura(alturaAmpulheta) {
	const alturaMinima = 20;
	return alturaAmpulheta > alturaMinima;
}

function renderizaAmpulheta(alturaAmpulheta) {
	if (!validaAltura(alturaAmpulheta))
		return console.log("A altura da ampulheta deve ser maior que 20!");

	const ampulhetaUp = gerarAmpulheta(alturaAmpulheta);
	console.log("Desafio");
	desenharAmpulhetaConsole(ampulhetaUp);
	console.log("Extra - Inverso");
	desenharAmpulhetaConsole(ampulhetaUp.reverse());

	console.log("Extra - Animação");
	const ampulheta = gerarAmpulheta(alturaAmpulheta);
	desenharAnimacao(ampulheta);
}

renderizaAmpulheta(alturaAmpulheta);
