//SPRINGFIELD, OR
var weatherObject2 = new XMLHttpRequest();

weatherObject2.open('GET','https://api.wunderground.com/api/5d9809b7dda42a6c/conditions/q/OR/Springfield.json', true);

weatherObject2.send();

weatherObject2.onload = function() {
	
	var weatherInfo2 = JSON.parse(weatherObject2.responseText);
	console.log(weatherInfo2);
	
	document.getElementById("place2").innerHTML = weatherInfo2.current_observation.display_location.full;
	document.getElementById("currentTemp2").innerHTML = weatherInfo2.current_observation.temp_f;
	document.getElementById("current2").innerHTML = weatherInfo2.current_observation.weather;
	document.getElementById("windSpeed2").innerHTML = weatherInfo2.current_observation.wind_mph;
	document.getElementById("weatherIcon2").src = weatherInfo2.current_observation.icon_url;
	document.getElementById("precip2").innerHTML = weatherInfo2.current_observation.precip_today_in;
	document.getElementById("winddir2").innerHTML = weatherInfo2.current_observation.wind_string;
}