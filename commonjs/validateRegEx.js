function validateRegEx(regex,inputStr,helpText,helpMessage){
	if(!regex.test(inputStr)){
		if(helpText != null)
			helpText.innerHTML = helpMessage;
		return false;
	}else{
		if(helpText != null)
			helpText.innerHTML = "";
		return true;
	}
}