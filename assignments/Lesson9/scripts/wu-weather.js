//Javascript Document

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/5d9809b7dda42a6c/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
	
	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo);
	
	document.getElementById("place").innerHTML = weatherInfo.current_observation.display_location.full;
	document.getElementById("currentTemp").innerHTML = weatherInfo.current_observation.temp_f;
	document.getElementById("current").innerHTML = weatherInfo.current_observation.weather;
	document.getElementById("windSpeed").innerHTML = weatherInfo.current_observation.wind_mph;
	document.getElementById("weatherIcon").src = weatherInfo.current_observation.icon_url;
	document.getElementById("precip").innerHTML = weatherInfo.current_observation.precip_today_in;
	document.getElementById("winddir").innerHTML = weatherInfo.current_observation.wind_dir;
}