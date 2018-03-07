//Javascript Document
//FRANKLIN, MN
var townInfo = new XMLHttpRequest();

townInfo.open('GET','https://byui-cit230.github.io/weather/data/towndata.json', true);

townInfo.send();

townInfo.onload = function() {
	
	var cityInfo = JSON.parse(townInfo.responseText);
	console.log(cityInfo);
	
	document.getElementById("townName").innerHTML = cityInfo.towns["0"].name;
	document.getElementById("founded").innerHTML = cityInfo.towns["0"].yearFounded;
	document.getElementById("moto").innerHTML = cityInfo.towns["0"].motto;
	document.getElementById("population").innerHTML = cityInfo.towns["0"].currentPopulation;
	document.getElementById("rain").innerHTML = cityInfo.towns["0"].averageRainfall;
	document.getElementById("events").innerHTML = cityInfo.towns["0"].events;



	document.getElementById("townName1").innerHTML = cityInfo.towns[1].name;
	document.getElementById("founded1").innerHTML = cityInfo.towns[1].yearFounded;
	document.getElementById("moto1").innerHTML = cityInfo.towns[1].motto;
	document.getElementById("population1").innerHTML = cityInfo.towns[1].currentPopulation;
	document.getElementById("rain1").innerHTML = cityInfo.towns[1].averageRainfall;
	document.getElementById("events1").innerHTML = cityInfo.towns[1].events;
	
	
	
	
	
}