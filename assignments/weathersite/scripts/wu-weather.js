//Javascript Document
//FRANKLIN, MN

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','https://api.wunderground.com/api/5d9809b7dda42a6c/conditions/q/MN/Franklin.json', true);

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
	document.getElementById("winddir").innerHTML = weatherInfo.current_observation.wind_string;
}

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


