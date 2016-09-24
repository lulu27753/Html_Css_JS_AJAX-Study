// JavaScript Document
function getNewContent(){
	var request = getHTTPObject();
	if (request){
		request.open("GET","example.txt",true);//发起get请求，请求“example.txt”异步传输
		request.onreadystatechange = function(){//onreadystatechange是一个事件处理函数，它会在服务器给XMLHttpRequest对象送回响应的时候被触发执行。
			//处理响应，这个函数根据服务器的具体响应做相应的处理。
			if(request.readyState == 4){
				alert("Response Received");
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
				}
			};
			
		//request.onreadystatechange = doSomething;
		alert("Function Right");
		request.send(null);
		alert("Function Wrong");
		}else{
			alert("Sorry,your browser doesn\'t support XMLHttpRequest");
			}
		alert("Function Done");
	}
addLoadEvent(getNewContent);