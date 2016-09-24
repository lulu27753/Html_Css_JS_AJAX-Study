// JavaScript Document
/*function  countBodyChildren(){
	var body_element=document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
	for(var i=0;i<body_element.childNodes.length;i++){
		alert(i+":"+body_element.childNodes[i].nodeType);
		}
	
	}	
	window.onload=countBodyChildren();
	*/
	
function showPic(whichpic){
	if (!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return false;//为了检查有src属性吗？
	placeholder.setAttribute("src",source);
	//pleceholder.src=source;//不是所有的元素都可以用这种应用元素属性的方法，所以推荐使用setAttritute
	if(document.getElementById("description")){
		if(whichpic.getAttribute("title")){
			var text=whichpic.getAttribute("title");
		}else{
			var text="";
			}
		//var text=whichpic.getAttribute("title") ? whichpic.getAttribute("title"):"";//同上个if/else
		var description=document.getElementById("description");
		if(description.firstChild.nodeType==3){
			description.firstChild.nodeValue=text;
			}
		}
	return true;
	}
function prepareGallery(){
	if(!document.getElementsByTagName||!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++)	{
		links[i].onclick=function(){
		return !showPic(this);//这里的this是links[i],而不是links.
		}
		links[i].onkeypress = links[i].onclick;
		}
	}
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
		}else{
			window.onload = function(){
				oldonload();
				func();
				}
			}
	}
addLoadEvent(prepareGallery);