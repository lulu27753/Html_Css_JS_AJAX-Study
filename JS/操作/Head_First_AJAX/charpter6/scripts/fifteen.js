window.onload = initPage;
function initPage () {
	var table =  document.getElementById('puzzleGrid');
	var cells = table.getElementsByTagName('td');
	for (var i = 0; i < cells.length; i++) {
		cells[i].onclick = tileClick;
	};
}
function isCellEmpty (cell) {
	var image = cell.firstChild;   
	while (image.nodeName == "#text") {
		image = image.nextSibling;
	}

	if (image.alt == "empty") {
		return true;
	} else{
		return false;
	}
}
function tileClick () {
	// 空单元格是点击的单元格
	if (isCellEmpty(this)) {
		alert("Please click on a numbered tile.");
		return;
	}
	// 下面开始判断空单元格(目标单元格)相对于点击单元格的位置,并采用假设法
	var currentRow = this.id.charAt(4);
	var currentCol = this.id.charAt(5);
	// 空单元格在点击单元格的上方
	if (currentRow > 1) {
		var testRow = Number(currentRow) - 1;
		var testCellId = "cell" + testRow + currentCol;
		var testCell = document.getElementById(testCellId);
		if (isCellEmpty(testCell)) {
			swapTiles(this, testCell);
			return;
		}
	}
	// 空单元格在点击单元格的下方
	if (currentRow < 4) {
		var testRow = Number(currentRow) + 1;
		var testCellId = "cell" + testRow +currentCol;
		var testCell = document.getElementById(testCellId);
		if (isCellEmpty(testCell)) {
			swapTiles(this, testCell);
			return;
		}	
	}
	// 空单元格在点击单元格的左方
	if (currentCol > 1) {
		var testCol = Number(currentCol) - 1;
		var testCellId = "cell" + currentRow + testCol;
		var testCell = document.getElementById(testCellId);
		if (isCellEmpty(testCell)) {
			swapTiles(this, testCell);
			return;
		}
	}
	// 空单元格在点击单元格的右方
	if (currentCol < 4) {
		var testCol = Number(currentCol) + 1;
		var testCellId = "cell" + currentRow + testCol;
		var testCell = document.getElementById(testCellId);
		if (isCellEmpty(testCell)) {
			swapTiles(this, testCell);
			return;
		}
	}
// 	空单元格不与点击单元格相邻
	alert("Please click a tile next to an empty cell.");
}
function swapTiles (selectedCell, destinationCell) {
	selectedImage = selectedCell.firstChild;
	while(selectedImage.nodeName == "#text") {
		selectedImage = selectedImage.nextSibling;
	};
	destinationImage = destinationCell.firstChild;
	while(destinationImage.nodeName == "#text"){
		destinationImage = destinationImage.nextSibling;
	}
	selectedCell.appendChild(destinationImage);
	destinationCell.appendChild(selectedImage)
	if (isPuzzleComplete()) {
		document.getElementById('puzzleGrid').className = "win";
	};
}
function isPuzzleComplete () {
	var tiles = document.getElementById('puzzleGrid').getElementsByTagName('img');
	var tileOrder = "";
	for (var i = 0; i < tiles.length; i++) {
		var num = tiles[i].src.substr(-6, 2);
		if (num != "ty") {
			tileOrder = +num;
		}
		if (tileOrder == "010203040506070809101112131415") {
			return true;
		}
	};
}