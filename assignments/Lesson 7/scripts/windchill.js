/* Javascript code to calculate the WINDCHILL Franklin Forecast webpage*/

/* formula for wind chill

f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 
*/
/*
function computeNum() {
	// Input - get input and validate if correct length and if a number
	var textInput = get("aNum").value;
	if (textInput.length < 3 || isNaN(textInput)) return; // Validation return nothing
	
	// Processing - multiply by the a random number taken to the 3rd power
	var theNumber = parseInt(textInput); // OK - parse string to number
	var theValue = theNumber * Math.pow(Math.random(), 3);
	
	// Output - output to the div and round the number value to two decimal places
	get("output").innerHTML = "The value is <strong>" + theValue.toFixed(2) + "</strong>!";
}

function get(e) { return document.getElementById(e); } */

/*	Input: user inputs tempture and wind speed
 *	Processing: convert numbers to integers
 *				run functions to show wind chill
 *				run funciton to calculate chill factor in Fahrenheit
 *	Output: out put answer of wind chill and how it factors in Fahrenheit
*/ 



/*	Input: user inputs tempture and wind speed
 *	Processing: convert numbers to integers
 *				run functions to show wind chill
 *				run funciton to calculate chill factor in Fahrenheit
 *	Output: out put answer of wind chill and how it factors in Fahrenheit
*/ 

function doInputOutput()  {
	//captures input data from user and coverts to number
	var tempF = parseFloat(document.getElementById('userTemperature').value);
	var speed = parseFloat(document.getElementById('userWindSpeed').value);

	
	if (tempF > 50 || speed < 3){
	document.write('Error, the temperature must be below 50 degrees and' +
	' the wind speeds above 3 mph').value;
		}
	
	// capture information from other function
	var message = windChill(tempF, speed);
	message = Math.round(message * 100) / 100
	
	//output message to user
	document.getElementById('outputDiv').innerHTML = "<strong>Wind chill factor: " + message + 
	" degrees Fahrenheit.";

function windChill (tempF, speed){
	//formula calculating wind chill factor
	//f = 35.74 + 0.6215 t - 35.75 s^(0.16) + 0.4275 t s^(0.16)
	var speed = (Math.pow(speed,0.16));
	var f = (35.74 + (0.6215 * tempF) - (35.75* speed) + (0.4275 * (tempF * speed)));
	return f;
}
}
