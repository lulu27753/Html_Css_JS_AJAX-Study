window.onload = initPage;
function initPage () {
	thumbs = document.getElementById('thumbnailPane').getElementsByTagName('img');
	for (var i = 0; i < thumbs.length; i++) {
		image = thumbs[i];
		image.onclick = function(){
			detailURL = 'images/' + this.title + '-detail.jpg';
			document.getElementById('itemDetail').src = detailURL;
			getDetails(this.title);
		};
	}
}
function createRequest () {
	try{
		request = new XMLHttpRequest();
	}catch (tryMS){
		try{
			request = new ActiveObject("MSxml2.XMLHTTP");
		}catch (otherMS){
			try{
				request = new ActiveObject("Microsoft.XMLHTTP");
			}catch(failed){
				request = null;
			}
			
		}
			
	}
	return request;
}
function getDetails (itemName) {
	request = createRequest();
	if (request == null) {
		alert("Unable to create request")
		return;
	}
	var url  = "getDetails.php?ImageID=" + escape(itemName);
	// escape负责处理字符串中可能有问题的字符
	request.open("GET", url, true);
	request.onreadystatechange = displayDetails;
	request.send(null);
}
function displayDetails () {
	if (request.readyState == 4) {
		if (request.status == 200) {
			detailDiv = document.getElementById('description');
			detailDiv.innerHTML = request.responseText;
		};
	};
}