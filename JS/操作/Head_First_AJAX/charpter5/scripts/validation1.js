window.onload = initPage;
var usernameValid = false;
var passwordValid = false;

function initPage () {
	document.getElementById("username").onblur = checkUsername;
	document.getElementById('register').disabled = true;
	document.getElementById('password2').onblur = checkPassword;
	document.getElementById('register').onclick = registerUser;

}
function checkUsername () {
	document.getElementById("username").className = "thinking";
	usernameRequest = createRequest();
	if (!usernameRequest) {
		alert("Unable to create request");
	} else{
		var username = document.getElementById("username").value;
		url = "checkName.php?username=" + escape(username);
		usernameRequest.onreadystatechange = showUsernameStatus;
		usernameRequest.open("GET", url, true);
		usernameRequest.send(null);
	};
} 
function showUsernameStatus () {
	if (usernameRequest.readyState == 4 && usernameRequest.status == 200) {
		if (usernameRequest.responseText == "okay") {
			document.getElementById('username').className = "approved";
			usernameValid = true;
		} else{
			document.getElementById('username').className ="denied";
			document.getElementById('username').focus();
			document.getElementById('username').select();
			usernameValid = false;
		}
		checkFormStatus();
	}
}
function checkPassword () {
	var password1 = document.getElementById('password1');
	var password2 = document.getElementById('password2');
	password1.className = "thinking";
	if ((password1.value=="") || (password1.value != password2.value)) {
		password1.className = "denied";
		passwordValid = false;
		// checkPassword();
		return;
	};
	passwordRequest = createRequest();
	if (passwordRequest == null) {
		alert("Unable to create Request");
	}else{
		url = "checkPass.php?password=" + escape(password1.value);
		passwordRequest.onreadystatechange = showPasswordStatus;
		passwordRequest.open("GET", url, true);
		passwordRequest.send(null);
	}

}
function showPasswordStatus () {
	if (passwordRequest.readyState == 4 & passwordRequest.status ==200) {
		// var password1 = document.getElementById('password1');
		if (passwordRequest.responseText == "okay") {
				password1.className = "approved";
				passwordValid = true;
			} else{
				password1.className ="denied";
				password1.focus();
				password1.select();
				passwordValid = false;
		}
		checkFormStatus();
	} 	
}
function checkFormStatus () {
	t = setInterval("scrollImages()", 50);
	if (usernameValid & passwordValid) {
		document.getElementById('register').disabled = false;
	} else{
		document.getElementById('register').disabled = true;
	};
}
function registerUser () {
	document.getElementById('register').value = "Processing";
	registerRequest = createRequest();
	if (registerRequest == null) {
		alert("Unable to create Request");
	} else{
		var url = "register.php?username=" + 
		escape(document.getElementById('username').value) + "&password=" + 
		escape(document.getElementById('password1').value) + "&firstname=" + 
		escape(document.getElementById('firstname').value) + "&lastname=" + 
		escape(document.getElementById('lastname').value) + "&email=" + 
		escape(document.getElementById('email').value) + "&genre=" + 
		escape(document.getElementById('genre').value)  + "&favorite=" + 
		escape(document.getElementById('favorite').value) + "&tastes=" + 
		escape(document.getElementById('tastes').value);
		registerRequest.onreadystatechange = registrationProcessed;
		registerRequest.open("GET", url, true);
		registerRequest.send(null);

	}
}
function registrationProcessed () {
	if (registerRequest.readyState == 4 & registerRequest.status == 200) {
		document.getElementById('wrapper').innerHTML = registerRequest.responseText;
	} 
}
function scrollImages () {
	var coverBarDiv = document.getElementById('coverBar');
	var images = coverBarDiv.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++) {
		var left = images[i].style.left.substr(0,images[i].style.left.length-2);
		if (left <= -86) {
			left = 532
		}
		images[i].style.left = (left - 1) + "px";
	};
}
