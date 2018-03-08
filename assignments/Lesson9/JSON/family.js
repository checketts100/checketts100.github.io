//Javascript Document
//CHECKETTS FAMILY
var family = new XMLHttpRequest();

family.open('GET','checkettsfamily.json', true);

family.send();

family.onload = function() {
	
	var familyData = JSON.parse(family.responseText);
	console.log(familyData);
	
	document.getElementById("familyName").innerHTML = cityInfo.towns["0"].name;