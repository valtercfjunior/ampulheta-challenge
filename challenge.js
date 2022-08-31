function gerarAmpulheta(n) {
	var matriz = JSON.parse(
		JSON.stringify(new Array(n).fill(new Array(n).fill(" ")))
	);

	for (let lin = 0; lin < n; lin++) {
		if (lin === 0) {
			matriz[0] = new Array(n).fill("#");
			matriz[n - 1] = new Array(n).fill("#");
		}

		matriz[lin][0] = "#";
		matriz[lin][n - 1] = "#";

		matriz[lin][lin] = "#";
		matriz[lin][n - 1 - lin] = "#";

		for (let c = lin; c < n - lin; c++) {
			matriz[lin][c] = "#";
		}
	}
	return matriz;
}

const desenharAmpulhetaConsole = function (matriz) {
	if (matriz.length < 20) {
		return console.log(
			"O tamanho da coluna deve ser superior ou igual a 20!"
		);
	} else {
		matriz.forEach((row) => {
			console.log(row.join(""));
		});
		console.log(`n = ${matriz.length}`);
		const separador = new Array(matriz.length).fill("-").join("");
		console.log(separador);
	}
};

function desenharAnimacao(matriz) {
	let c = 1;
	let controleInterval = Math.ceil(matriz.length / 2);
	var interval = setInterval(() => {
		let linhaBackup = matriz[c];
		matriz[c] = matriz[matriz.length - 1 - c];
		matriz[matriz.length - 1 - c] = linhaBackup;
		desenharAmpulhetaConsole(matriz);
		c++;

		if (c == controleInterval) {
			clearInterval(interval);
		}
	}, 1500);
}

const alturaAmpulheta = 25;

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
