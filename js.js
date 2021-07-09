var filas = 9
var columnas = 9
var mat = new Array(filas);
var element = 1;
for (var f = 0; f < filas; f++) {
	mat[f] = new Array(columnas);
	for (var c = 0; c < columnas; c++) {
		mat[f][c] = element++;
	}
}

var app = document.getElementById("app");

var matrix1 = getElement("div", "", "left")
matrix1.appendChild(getElement("h2", "Recorrida natural", "title"));
for (var f = 0; f < filas; f++) {
	var row = getElement("div", "", "row");
	for (var c = 0; c < columnas; c++) {
		row.appendChild(getElement("div", mat[f][c], "cell"));
	}
	matrix1.appendChild(row);
}
app.appendChild(matrix1);

var matrix2 = getElement("div", "", "right")
matrix2.appendChild(getElement("h2","Recorrida solicitada", "title"));
for (var c = columnas-1; c >= 0; c--) {
	var row = getElement("div", "", "row");
	for (var f = filas-1; f >= 0; f--) {
		row.appendChild(getElement("div", mat[f][c], "cell"));
	}
	matrix2.appendChild(row);
}
app.appendChild(matrix2);

function getElement(type, text, classes){
	var element = document.createElement(type);
	if (String.toString(text) != ""){
		var textNode = document.createTextNode(text);
		element.appendChild(textNode);
	}
	if (Array.isArray(classes)){
		classes.forEach(c => {
			element.classList.add(c);
		});
	}else{
		if (classes != "" && classes != undefined){
			element.classList.add(classes);
		}
	}
	return element;
}