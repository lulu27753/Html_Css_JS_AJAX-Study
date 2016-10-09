window.onload = initPage;
var frequencyTable = new Array(
  "a", "a", "a", "a", "a", "a", "a", "a", "b", "c", "c", "c", "d", "d", "d",
  "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g",
  "g", "h", "h", "h", "h", "h", "h", "i", "i", "i", "i", "i", "i", "i", "j",
  "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", "o", "o",
  "o", "o", "o", "o", "o", "o", "p", "p", "q", "q", "q", "q", "q", "q", "r",
  "r", "r", "r", "r", "r", "s", "s", "s", "s", "s", "s", "s", "s", "t", "t",
  "t", "u", "u", "v", "v", "w", "x", "y", "z");
function initPage () {
	randomizeTiles();
}
// 这个函数有BUG吗，因为运行时会产生空的贴块
function randomizeTiles () {
	var tiles = document.getElementById('letterbox').getElementsByTagName('a');
	for (var i = 0; i < tiles.length; i++) {
		var index = Math.floor(Math.random()*100);
		var letter = frequencyTable[index];
		tiles[i].className = tiles[i].className + " l" + letter;
		tiles[i].onclick = addLetter;
		
	};
}
function addLetter () {
	// 得出点击了哪个字母
	tileClasses = this.className.split(" ");
	var letterClass = tileClasses[2];
	var letter = letterClass.substring(1,2);
	// 向当前词框增加一个字母
	var currentWordDiv = document.getElementById('currentWord');
	if (currentWordDiv.childNodes.length == 0) {
	var p = document.createElement("p");
	currentWordDiv.appendChild(p);
	var textNode = document.createTextNode(letter);
	p.appendChild(textNode);
	var submitDiv = document.getElementById('submit');
	var a = submitDiv.firstChild;
	while(a.nodeName == "#text"){a = a.nextSibling;};
		a.onclick = submitWord;
	} else{
		var p = currentWordDiv.firstChild;
		var textNode = p.firstChild;
		textNode.nodeValue +=  letter;
	}
	// 禁用所点击的字母
	this.className += " disabled";
	this.onclick = "";
	
}
function submitWord () {
	var currentWordDiv = document.getElementById('currentWord');
	var testWord = escape(currentWordDiv.getElementsByTagName('p')[0].firstChild.nodeValue);
	alert(testWord);
	var url = "lookup-word.php?word=" + testWord;
	request = createRequest();
	if (request == null) {
		alert("Unable to create request object");
	}
	request.open('GET', url, false);
	request.send(null); 

	// 如果服务器拒绝所提交的词，要告诉玩家。
	if (request.responseText == -1) {
		alert("You have entered an invalid word. Try again");
	}else{
		// 将接收到的词增加到接收词框中
		var listDiv = document.getElementById('wordList');
		var p = document.createElement("p");
		listDiv.appendChild(p);
		var wordList = document.createTextNode(testWord);
		p.appendChild(wordList);

		// 更新屏幕上的“Score: 0”文本
		var scoreText = document.getElementById('score').firstChild.nodeValue;
		var currentScore = parseInt(scoreText.split(" ")[1]); 
		currentScore += parseInt(request.responseText);
		alert(currentScore);
		scoreText = "Score: " + currentScore; 
	}
	// 不论服务器接受还是拒绝这个单词，都将当前词从当前词框中删除
	currentWordP = currentWordDiv.firstChild;
	currentWordDiv.removeChild(currentWordP);
	// 通过建立一个工具函数来启用所有贴块
	enableAllTiles();
	// 重置“Submit Word”按钮的事件处理程序为一个alert()函数
	var submitDiv = document.getElementById('submit');
	var a =  submitDiv.firstChild;
	while (a.nodeName == "#text"){a = a.nextSibling;}
	a.onclick = function(){
		alert("Please click tiles to add letters and create a word.");
	};
}
function enableAllTiles () {
	tiles = document.getElementById('letterbox').getElementsByTagName('a');
	for (var i = 0; i < tiles.length; i++) {
		var tileClasses = tiles[i].className.split(" ");
		// 对于有4个类的贴块，最后一个类是disable,使用前3个类，去掉第4个类；
		if (tileClasses.length == 4) {
			var newClass = tileClasses[0] + " " + tileClasses[1] + " " + tileClasses[2];
			tiles[i].className = newClass;
			// 记住，将事件处理程序重置为addLetter
			tiles[i].onclick = addLetter;

		};
	};

}