//JavaScript Document
//Services provided for Mountain Spoke

var services = new XMLHttpRequest();
services .open("GET", "https://checketts100.github.io/assignments/MountainSpoke/JSON/data.json" , true);
services .send();
services .onload = function () {
	
	var serviceData = JSON.parse(services.responseText);
	console.log(serviceData);
	
	document.getElementById("repairService").innerHTML = ServiceData.services["0"].service;
	document.getElementById("repairCost").innerHTML = ServiceData.services["0"].cost;
	document.getElementById("repairDuration").innerHTML = ServiceData.services["0"].duration;
	document.getElementById("repairList").innerHTML = ServiceData.services["0"].listofrepairs;
	
	
}