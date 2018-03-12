//SPRINGFIELD	
var townInfo2 = new XMLHttpRequest();
townInfo2.open("GET","https://byui-cit230.github.io/weather/data/towndata.json", true);
townInfo2.send();
townInfo2.onload = function() {
	
	var cityInfo2 = JSON.parse(townInfo2.responseText);
	console.log(cityInfo2);
	
	document.getElementById("townName2").innerHTML = cityInfo2.towns[3].name;
	document.getElementById("founded2").innerHTML = cityInfo2.towns[3].yearFounded;
	document.getElementById("moto2").innerHTML = cityInfo2.towns[3].motto;
	document.getElementById("population2").innerHTML = cityInfo2.towns[3].currentPopulation;
	document.getElementById("rain2").innerHTML = cityInfo2.towns[3].averageRainfall;
	document.getElementById("events2").innerHTML = cityInfo2.towns[3].events;
}