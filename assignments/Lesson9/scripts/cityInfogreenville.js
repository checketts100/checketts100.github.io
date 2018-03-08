//GREENVILLE, MN	
var townInfo1 = new XMLHttpRequest();
townInfo1.open("GET","https://byui-cit230.github.io/weather/data/towndata.json", true);
townInfo1.send();
townInfo1.onload = function() {
	
	var cityInfo1 = JSON.parse(townInfo1.responseText);
	console.log(cityInfo1);
	
	document.getElementById("townName1").innerHTML = cityInfo1.towns[1].name;
	document.getElementById("founded1").innerHTML = cityInfo1.towns[1].yearFounded;
	document.getElementById("moto1").innerHTML = cityInfo1.towns["1"].motto;
	document.getElementById("population1").innerHTML = cityInfo1.towns["1"].currentPopulation;
	document.getElementById("rain1").innerHTML = cityInfo1.towns[1].averageRainfall;
	document.getElementById("events1").innerHTML = cityInfo1.towns["1"].events;
}