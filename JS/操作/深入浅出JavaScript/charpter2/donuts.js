function parseDonuts(donutString){
	var numDonuts = parseInt(donutString);
	if(donutString.indexOf("dozen") != -1){
		numDonuts *= 12;
	}
	return numDonuts;
}
function updateOrder(){
	const TAXRATE = 0.0925;
	const DONUTPRICE = 0.50;
	var numCakeDonuts = parseDonuts(document.getElementById("cakedonuts").value);
	var numGlazeddonuts = parseDonuts(document.getElementById("glazeddonuts").value);
	if(isNaN(numCakeDonuts)) numCakeDonuts = 0;
	if(isNaN(numGlazeddonuts)) numGlazeddonuts = 0;
	var subTotal = (numCakeDonuts + numGlazeddonuts) * DONUTPRICE;
	var tax = subTotal * TAXRATE;
	var Total = subTotal + tax;
	document.getElementById("subTotal").value = "$" + subTotal.toFixed(2);
	document.getElementById("tax").value = "$" + tax.toFixed(2);
	document.getElementById("Total").value = "$" +Total.toFixed(2);

}
function placeOrder(form){
	if (document.getElementById("name").value == ""){
		alert("I'm sorry but you must provide your name before submitting an order.");
	}
	else if(document.getElementById("minutes").value == "" || isNaN(document.getElementById("minutes").value) == "true"){
		alert("I'm sorry but you must provide the number of minutes until pick-up before submitting an order.");
	}else{
		form.submit();
	}
	
}