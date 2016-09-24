window.onload = initPage;
function initPage () {
	document.getElementById("username").onblur = checkUsername;

}
function checkUsername () {
	usernameRequest = createRequest();
	if (!usernameRequest) {
		alert("Unable to create request");
	} else{
		alert(0);
		var username = document.getElementById("username").value;
		alert(1);
		url = "checkName.php?username=" + escape(username);
		alert(2);
		usernameRequest.onreadystatechange = showUsernameStatus;
		alert(4);
		usernameRequest.open("GET", url, true);
		alert(3);
		
		usernameRequest.send(null);
		alert(5);
	};
} 
function showUsernameStatus () {
	if (usernameRequest.readyState == 4 && usernameRequest.status == 200) {
		alert(usernameRequest.responseText);
		if (usernameRequest.responseText == "okay") {
			alert(6);
		} else{
			alert("Sorry, that username is taken.");
		};
	};
}