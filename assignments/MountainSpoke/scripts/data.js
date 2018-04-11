//JavaScript Document
//Services provided for Mountain Spoke

var services = new XMLHttpRequest();
services .open('GET', "https://checketts100.github.io/assignments/MountainSpoke/JSON/data.json" , true);
services .send();
services .onload = function () {
	
	var serviceData = JSON.parse(services.responseText);
	console.log(serviceData);
	
		
	document.getElementById("repairCost0").innerHTML = serviceData.services["0"].cost;
	document.getElementById("repairCost1").innerHTML = serviceData.services["1"].cost;
	document.getElementById("repairCost2").innerHTML = serviceData.services["2"].cost;
	document.getElementById("repairCost3").innerHTML = serviceData.services["3"].cost;
	document.getElementById("repairCost4").innerHTML = serviceData.services["4"].cost;
	document.getElementById("repairCost5").innerHTML = serviceData.services["5"].cost;
		
	
	document.getElementById("repairDuration0").innerHTML = serviceData.services["0"].duration;
	document.getElementById("repairDuration1").innerHTML = serviceData.services["1"].duration;
	document.getElementById("repairDuration2").innerHTML = serviceData.services["2"].duration;
	document.getElementById("repairDuration3").innerHTML = serviceData.services["3"].duration;
	document.getElementById("repairDuration4").innerHTML = serviceData.services["4"].duration;
	document.getElementById("repairDuration5").innerHTML = serviceData.services["5"].duration;
	
			
	document.getElementById("repairList0").innerHTML = serviceData.services["0"].listofrepairs;
	document.getElementById("repairList1").innerHTML = serviceData.services["1"].listofrepairs;
	document.getElementById("repairList2").innerHTML = serviceData.services["2"].listofrepairs;
	document.getElementById("repairList3").innerHTML = serviceData.services["3"].listofrepairs;
	document.getElementById("repairList4").innerHTML = serviceData.services["4"].listofrepairs;
	document.getElementById("repairList5").innerHTML = serviceData.services["5"].listofrepairs;
	}