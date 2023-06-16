//PROBLEM 3
function myFunction(){
	const vehicle = document.getElementById("mySelect");
//creates a variable to be used with the length variable

	var x = document.getElementById("mySelect").value;
//identifies the value of the selected item in the mySelect drop down menu

	var y = vehicle.options.length;
//returns the number of options used in the drop down menu

	document.getElementById("place").innerHTML = 'There are ' + y + ' options. You chose ' + x;
//creats the string to be shown in the p tag when an option is selected
}