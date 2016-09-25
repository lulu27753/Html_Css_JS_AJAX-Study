window.onload = initPage;
var welcomePaneShowing = true;

function initPage () {
 	var buttons = document.getElementsByTagName('a');
 	for (var i = 0; i < buttons.length; i++) {
 		buttons[i].onmouseover = showHint;
 		buttons[i].onmouseout = hideHint;
 		buttons[i].onclick = showTab;
 		buttons[i].onmouseover = buttonOver;
 		buttons[i].onmouseout = buttonOut;
 	};
}
function showHint () {
	if (!welcomePaneShowing) {
		return;
	} 
	switch (this.title){
		case "beginners":
			var hintText = "Just getting started? Come join us!";
			break;
		case "intermediate":
			var hintText = "Take your flexibility to the next level!";
			break;
		case "advanced":
			var hintText = "Perfectly join your body and mind with these intensive workouts.";
			break;
		default:
			var hintText = "Click a tab to display the course schedule for the class";
	}
	document.getElementById('content').innerHTML = "<h3>" + hintText + "</h3>";

	
}
function hideHint () {
	if (welcomePaneShowing) {
	document.getElementById('content').innerHTML = "<h3>Click a tab to display the course schedule for the class</h3>";
	}
}
function showTab () {
	var selectedBtn = this.title;
	
	var buttons = document.getElementsByTagName('a');
	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].title == selectedBtn) {
			buttons[i].className = "active";
		} else{
			buttons[i].className = "inactive";
		}
	}
	request = createRequest();
	if (request == null) {
		alert("Unable to create Request");
		return;
	} else{
		if (selectedBtn == "welcome") {
		welcomePaneShowing = true;
		document.getElementById('content').innerHTML = "<h3>Click a tab to display the course schedule for the class</h3>";
		} else{
			welcomePaneShowing = false;
			request.onreadystatechange = showSchedule;
			request.open('GET', selectedBtn + ".html", true);
			request.send(null);
		}
	}

}
function showSchedule () {
	document.getElementById('content').innerHTML = request.responseText;
}
function buttonOver () {
	this.className = "active";
}
function buttonOut () {
	this.className = "inactive";
}