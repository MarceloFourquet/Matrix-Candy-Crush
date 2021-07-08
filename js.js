var filas = 8
var columnas = 4
var mat = new Array(filas);
for (var f = 0; f < mat.length; f++) {
	mat[f] = new Array(columnas);
	for (var c = 0; c < mat[0].length; c++) {
		mat[f][c] = (f + 1).toString().padStart(2,'0') + " - " + (c + 1).toString().padStart(2,'0');
	}
}
var matrix = document.getElementById("matrix");

matrix.appendChild(getTitle("Recorrida natural"));
for (var f = 0; f < mat.length; f++) {
	var para = document.createElement("p");
	for (var c = 0; c < mat[0].length; c++) {
		para.appendChild(document.createTextNode(mat[f][c] + " | "))
	}
	matrix.appendChild(para);
}

matrix.appendChild(getTitle("Recorrida solicitada"));
for (var c = mat[0].length-1; c >= 0; c--) {
	var para = document.createElement("p");
	for (var f = mat.length-1; f >= 0; f--) {
		para.appendChild(document.createTextNode(mat[f][c] + " | "))
	}
	matrix.appendChild(para);
}

function getTitle(title){
	var h = document.createElement("h2");
	var text = document.createTextNode(title);
	h.appendChild(text);
	return h;
}