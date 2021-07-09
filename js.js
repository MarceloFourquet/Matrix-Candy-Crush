const filas = 9
const columnas = 9
const mat = new Array(filas);
var element = 1;
for (let f = 0; f < filas; f++) {
	mat[f] = new Array(columnas);
	for (let c = 0; c < columnas; c++) {
		mat[f][c] = element++;
	}
}

const app = document.getElementById("app");

const matrix1 = getElement("div", "", "left");
matrix1.appendChild(getElement("h2", "Recorrida natural", "title"));
for (let f = 0; f < filas; f++) {
	let row = getElement("div", "", "row");
	for (let c = 0; c < columnas; c++) {
		row.appendChild(getElement("div", mat[f][c], ["cell", "column" + c]));
	}
	matrix1.appendChild(row);
}
app.appendChild(matrix1);

// Esto permite iterar una columna de la matrix1
// de abajo a arriba y de derecha a izquierda
// y presentarla en la matrix2
// de derecha a izquierda y de arriba a abajo
// los datos de la matrix2 provienen de lo que
// se muestra en la matrix1 y no del array.
const matrix2 = getElement("div", "", "right");
matrix2.appendChild(getElement("h2", "Recorrida solicitada", "title"));
for (let c = columnas - 1; c >= 0; c--) {
	let row = getElement("div", "", "row");
	let cellsOfColumn = document.getElementsByClassName("column" + c);
	let elements = Array.from(cellsOfColumn);
	elements.reverse();
	elements.forEach(element => {
		let value = parseInt(element.textContent);
		row.appendChild(getElement("div", value, "cell"));
	});
	matrix2.appendChild(row);
}
app.appendChild(matrix2);

function getElement(type, text, classes) {
	var element = document.createElement(type);
	if (String.toString(text) != "") {
		let textNode = document.createTextNode(text);
		element.appendChild(textNode);
	}
	if (Array.isArray(classes)) {
		classes.forEach(c => {
			element.classList.add(c);
		});
	} else {
		if (classes != "" && classes != undefined) {
			element.classList.add(classes);
		}
	}
	return element;
}