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

}