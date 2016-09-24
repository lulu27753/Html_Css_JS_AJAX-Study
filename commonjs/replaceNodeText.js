function replaceNodeText(id, newText){
	var node = document.getElementById(id);
	while(node.firstChild)
		node.removeChild(node.firstChild);
	node.appendChild(document.createTextNode(newText));
}