var seats = [[false, true, false, true, true, true, false, true, false ],
[false, true, false, false, true, false, true, true, true ],
[true, true, true, true, true, true, false, true, false ],
[true, true, true, false, true, false, false, true, false ]];
var selSeat = -1;
function initSeats(){
	for(var i = 0; i < seats.length; i++){
		for(var j = 0; j < seats[i].length; j++){
			if (seats[i][j]){
				document.getElementById("seat"+(i*seats[i].length +j)).src = "images/seat_avail.png";
				document.getElementById("seat"+(i*seats[i].length +j)).alt = "Available seat";
			}else{
				document.getElementById("seat"+(i*seats[i].length +j)).src = "images/seat_unavail.png";
				document.getElementById("seat"+(i*seats[i].length +j)).alt = "Unavailable seat";
			}
		}
	}
}

function findSeats(){
	if (selSeat >= 0){
		selSeat = -1;
		initSeats();
	}
	var i = 0, finished = false;
	while (i<seats.length && !finished){
		for(var j = 0; j<seats[i].length; j++){
			if (seats[i][j] && seats[i][j+1] && seats[i][j+2]){
				selSeat = i * seats[i].length +j;
				document.getElementById("seat" + (i * seats[i].length +j)).src = "images/seat_select.png";
				document.getElementById("seat" + (i * seats[i].length +j)).alt = "Your seat";
				document.getElementById("seat" + (i * seats[i].length +j +1)).src = "images/seat_select.png";
				document.getElementById("seat" + (i * seats[i].length +j +1)).alt = "Your seat";
				document.getElementById("seat" + (i * seats[i].length +j +2)).src = "images/seat_select.png";
				document.getElementById("seat" + (i * seats[i].length +j +2)).alt = "Your seat";
				var accept = confirm("Seats " + (j+1) + " through " + (j+3) + " in Row " + (i+1) + " are available. Accept?");
				if (accept){
					finished = true;
					break;
				}else{
					selSeat = -1;
					document.getElementById("seat" + (i * seats[i].length +j)).src = "images/seat_avail.png";
					document.getElementById("seat" + (i * seats[i].length +j)).alt = "Available seat"
					document.getElementById("seat" + (i * seats[i].length +j +1)).src = "images/seat_avail.png";
					document.getElementById("seat" + (i * seats[i].length +j +1)).alt = "Available seat"
					document.getElementById("seat" + (i * seats[i].length +j +2)).src = "images/seat_avail.png";
					document.getElementById("seat" + (i * seats[i].length +j +2)).alt = "Available seat"
				}
			}
		}
	i++;
	}
}