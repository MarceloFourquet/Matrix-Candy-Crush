var filas = 9
var columnas = 9
var mat = new Array(filas);
for (var f = 0; f < filas; f++) {
	mat[f] = new Array(columnas);
	for (var c = 0; c < columnas; c++) {
		mat[f][c] = (c + 1).toString().padStart(2,'0') + "-" + (f + 1).toString().padStart(2,'0');
	}
}

var matrix = document.getElementById("matrix");

matrix.appendChild(getTitle("Recorrida natural"));
for (var f = 0; f < filas; f++) {
	var divElement = getRow();
	for (var c = 0; c < columnas; c++) {
		divElement.appendChild(getCell(mat[f][c]))
	}
	matrix.appendChild(divElement);
}

matrix.appendChild(getTitle("Recorrida solicitada"));
for (var c = columnas-1; c >= 0; c--) {
	var divElement = getRow();
	for (var f = filas-1; f >= 0; f--) {
		divElement.appendChild(getCell(mat[f][c]))
	}
	matrix.appendChild(divElement);
}

function getTitle(title){
	var h = document.createElement("h2");
	var text = document.createTextNode(title);
	h.appendChild(text);
	return h;
}

function getCell(value){
	var d = document.createElement("div");
	var text = document.createTextNode(value);
	d.classList.add("cell");
	d.appendChild(text);
	return d;
}

function getRow(){
	var d = document.createElement("div");
	d.classList.add("line");
	return d;
}