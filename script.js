//PROBLEM 3
function myFunction(){
	const vehicle = document.getElementById("mySelect");
	var x = document.getElementById("mySelect").value;
	var y = vehicle.options.length;
	document.getElementById("place").innerHTML = 'There are ' + y + ' options. You chose ' + x;
}