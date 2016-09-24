var userName;
function greetUser(){
	userName = readCookie("irock_username");
	if(userName){
		alert("Hello " + userName + ", I missed you.");
	}else{
		alert("Hello, I am your pet rock.");
	}
}
function  touchRock(){
	if (userName) {
		alert("I like the attention, " + userName + ". Thank you.");
	}else{
		userName =  prompt("What is your name?","Enter your name here.");
		if(userName){
			alert("It is good to meet you," + userName + ".");
			if (navigator.cookieEnabled) writeCookie("irock_username", userName, 2);
			else alert("Cookies aren't supported/enabled in your browser, which means I won't remember you later. I'm sorry.");
		}
	}
	document.getElementById("rockImg").src = "images/rock_happy.png";
	setTimeout("document.getElementById('rockImg').src = 'images/rock.png';",10*1000);


}  
function resizeRock(){
	document.getElementById("rockImg").style.height = (document.body.clientHeight-100)*0.9;
}