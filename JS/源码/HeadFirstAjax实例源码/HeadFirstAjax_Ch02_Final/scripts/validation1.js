window.onload = initPage;function initPage() {  document.getElementById("username").onblur = checkUsername;  document.getElementById("register").disabled = true;}function checkUsername() {  document.getElementById("username").className = "thinking";  request = createRequest();  if (request == null)    alert("Unable to create request");  else {    alert(0);    var theName = document.getElementById("username").value;    var username = escape(theName);    alert(1);    var url= "checkName.php?username=" + username;    alert(2);    request.onreadystatechange = showUsernameStatus;    alert(4);    request.open("GET", url, true);    alert(3);    request.send(null);    alert(5);  }}function showUsernameStatus() {  if (request.readyState == 4) {    alert(request.readyState + 4);    if (request.status == 200) {    alert(request.status);    alert(request.responseText);      if (request.responseText == "okay") {      alert(6);        // document.getElementById("username").className = "approved";        // document.getElementById("register").disabled = false;      } else {      alert("Sorry, that username is taken.");        // document.getElementById("username").className = "denied";        // document.getElementById("username").focus();        // document.getElementById("username").select();        // document.getElementById("register").disabled = true;      }    }  }}