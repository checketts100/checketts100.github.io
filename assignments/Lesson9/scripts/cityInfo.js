s//Javascript Document

var cityInfo = new XMLHttpRequest();

cityInfo.open('GET','https://byui-cit230.github.io/weather/data/towndata.json', true);

cityInfo.send();

cityInfo.onload = function() {
	
	var townInfo = JSON.parse(cityInfo.responseText);
	console.log(townInfo);
	
	document.getElementById("townName").inner.HTML = townInfo.name[0];

	
}	