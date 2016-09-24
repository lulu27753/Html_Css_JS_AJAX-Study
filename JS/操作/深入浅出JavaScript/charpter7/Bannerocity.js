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
function validateNonEmpty(inputField, helpText){
	return validateRegEx(/.+/, inputField.value, helpText,"Please enter a value.");
}
function validateLength(minLength, maxLength, inputField, helpText){
	return validateRegEx(/^.{minLength,maxLength}$/, inputField.value, helpText, "Please enter a value " + minLength + " to " + maxLength +
          " characters in length.");
}
function validateZipCode(inputField, helpText){
	if(!validateNonEmpty(inputField, helpText)) return false;
	return validateRegEx(/^\d{5}$/, inputField.value, helpText, "Please enter a 5-digit ZIP code.");
}
function validateDate(inputField, helpText){
	return validateRegEx(/^\d{2}\/\d{2}\/(\d{2}|\d{4})$/, inputField.value, helpText, "Please enter a date (for example, 01/14/1975).");
}
function validatePhone(inputField, helpText){
	return validateRegEx(/^\d{3}-\d{3}-\d{4}$/, inputField.value, helpText, "Please enter a phone number (for example, 123-456-7890).");
}
function validateEmail(inputField, helpText){
	return validateRegEx(/^[\w\.-_\+]@[\w-]+(\.\w{2,3})$/, inputField.value, helpText,  "Please enter an email address (for example, johndoe@acme.com).");
}
function placeOrder(form){
	if(validateLength(1, 32, form["massage"], form["massage_help"])&&validateZipCode(form["zipcode"], form["zipcode_help"])&&validateDate(form["date"], form["date_help"])&&validateNonEmpty(form["name"], form["name_help"])&&validatePhone(form["phone"], form["phone_help"])&&validateEmail(form["email"], form["email_help"])){
		form.submit();
	}else{
		alert("I'm sorry but there is something wrong with the order information.");
	}

}
// function element(eleId){
// 	return document.getElementById(eleId);
// }
// window.onload = function{
// 	element("message").onblur = function validateLength(1,32,this,element("message_help"));
// }
window.onload = function(){
	document.getElementById("zipcode").onblur = function(evt){
		validateZipCode(this, document.getElementById('zipcode_help'));
	}
}
