//Javascript Document
//CHECKETTS FAMILY
var family = new XMLHttpRequest();
family .open("GET","https://checketts100.github.io/assignments/Lesson9/JSON/checkettsfamily.json", true);
family .send();
family .onload = function() {
	
	var familyData = JSON.parse(family.responseText);
	console.log(familyData);
	
	document.getElementById("wholename").innerHTML = familyData.members["0"].name;
	document.getElementById("title").innerHTML = familyData.members["0"].familyTitle;
	document.getElementById("age").innerHTML = familyData.members["0"].age;
	document.getElementById("duties").innerHTML = familyData.members["0"].duties;
	
	
	
}