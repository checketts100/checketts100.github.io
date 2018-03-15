

//GREENVILLE, TX
var weatherObject1 = new XMLHttpRequest();

weatherObject1.open('GET','https://api.wunderground.com/api/5d9809b7dda42a6c/conditions/q/TX/Greenville.json', true);

weatherObject1.send();

weatherObject1.onload = function() {
	
	var weatherInfo1 = JSON.parse(weatherObject1.responseText);
	console.log(weatherInfo1);
	
	document.getElementById("place1").innerHTML = weatherInfo1.current_observation.display_location.full;
	document.getElementById("currentTemp1").innerHTML = weatherInfo1.current_observation.temp_f;
	document.getElementById("current1").innerHTML = weatherInfo1.current_observation.weather;
	document.getElementById("windSpeed1").innerHTML = weatherInfo1.current_observation.wind_mph;
	document.getElementById("weatherIcon1").src = weatherInfo1.current_observation.icon_url;
	document.getElementById("precip1").innerHTML = weatherInfo1.current_observation.precip_today_in;
	document.getElementById("winddir1").innerHTML = weatherInfo1.current_observation.wind_string;
}
