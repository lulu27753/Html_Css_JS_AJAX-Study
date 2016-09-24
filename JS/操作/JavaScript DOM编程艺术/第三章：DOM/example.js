// JavaScript Document

/*
var num = 0;
outermost:
for (var i=0; i<10; i++){
for (var j=0; j<; j++){
	if(i==5 && j==5){
		break out10ermost;}
	num++;}
	
		}
alter(num);
alert(typeof document.getElementById(purchases));
alert(document.getElementsByTagName("li").length);
for (var i=0; i<document.getElementsByTagName("li").length; i++){
	alert(("我是第"+(i+1)+"个"+typeof document.getElementsByTagName("li")[i]));
}
var items=document.getElementsByTagName("li");
for (var i=0; i<items.length; i++){
	alert(("我是第"+(i+1)+"个"+typeof items[i]));
}
var shopping=document.getElementById("purchases");
var items=shopping.getElementsByTagName("*");
alert (items.length);
for (var i=0;i<items.length;i++){
	alert("我是第"+(i+1)+"个"+typeof items[i]);}
alert(document.getElementsByClassName("important sale").length);
var shopping=document.getElementById("purchases");
var sales=shopping.getElementsByClassName("sale");
alert(sales.length);
function getElementsByClassName(node,classname){
	if (node.getElementsByClassName){
		return node.getElementsByClassName(classname);}
		else{
			var results= new Array();
			var elems=node.getElementsByTagName("*");
			for(var i=0;i<elems.length;i++){
				if(elems[i].className.indexOf(classname)!=-1){
					results[results.length]=elems[i];}
					return results;}
			}
	}
var shopping = document.getElementById("purchases");
var sales = getElementsByClassName(shopping,"sale");
alert(sales.length);
var paras=document.getElementsByTagName("p");
for (var i=0;i<paras.length;i++){
	alert(paras[i].getAttribute("title"));
	}
	var paras=document.getElementsByTagName("p");
for (var i=0;i<paras.length;i++){
	var title_text=paras[i].getAttribute("title");
	//if(title_text!=null){
		alert(title_text);
		//}
	}
	var paras=document.getElementsByTagName("p");
	for (var i=0;i<paras.length;i++){
		var title_text=paras[i].getAttribute("title");
		if (title_text) alert(title_text);
		}
var shopping=document.getElementById("purchases");
	alert(shopping.getAttribute("title"));
	shopping.setAttribute("title","a list of goods");
	alert(shopping.getAttribute("title"));
	*/
	var paras=document.getElementsByTagName("p");
	for(var i=0;i<paras.length;i++){
		var title_text=paras[i].getAttribute("title");
		if(title_text){
			paras[i].setAttribute("title","brand new title text");
			alert(paras[i].getAttribute("title"));
			}
		}