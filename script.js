//PROBLEM 3
function myFunction(){
	const vehicle = document.getElementById("mySelect");
//creates a variable to be used with the length variable

	const choice = vehicle.value;
//identifies the value of the selected item in the mySelect drop down menu

	const totalNumber = vehicle.options.length;
//returns the number of options used in the drop down menu

	document.getElementById("place").innerHTML = 'There are ' + totalNumber + ' options. You chose ' + choice;
//creats the string to be shown in the p tag when an option is selected
}