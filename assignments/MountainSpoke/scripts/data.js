//JavaScript Document
//Services provided for Mountain Spoke

var services = new XMLHttpRequest();
services .open("GET", "https://checketts100.github.io/assignments/MountainSpoke/JSON/data.json" , true);
services .send();
services .onload = function () {
	
	var serviceData = JSON.parse(services.responseText);
	console.log(serviceData);
	
	
	
}