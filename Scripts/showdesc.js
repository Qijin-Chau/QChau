function showDescription(descID) {
	var myVar = document.getElementById(descID);
	
	if (myVar.style.display === "none") {
		myVar.style.display = "block";
		myVar.style.margin = "5px 0 25px 10px";
		myVar.style.width = "90%";
		myVar.style.float = "none";
	} else {
		myVar.style.display = "none";
	}
}

function showAllFreshman() {
	myIDS = ["Math32", "Math34", "Phy11", "Chem01", "Chn01", "Chn02", "Comp11", "EN01", "ED119"];
	
	for (i = 0; i < myIDS.length; i++) {
		myVar = document.getElementById(myIDS[i]);
		if (myVar.style.display === "none") {
			myVar.style.display = "block";
			myVar.style.margin = "5px 0 25px 10px";
			myVar.style.width = "90%";
			myVar.style.float = "none";
		} else {
			myVar.style.display = "none";
		}
	}
}

function showAllSophomore() {
	myIDS = ["Comp61", "Math70", "ES11", "ES03", "ES04", "Comp20", "Comp15", "Comp160", "Chn03", "EXP53"];
	
	for (i = 0; i < myIDS.length; i++) {
		myVar = document.getElementById(myIDS[i]);
		if (myVar.style.display === "none") {
			myVar.style.display = "block";
			myVar.style.margin = "5px 0 25px 10px";
			myVar.style.width = "90%";
			myVar.style.float = "none";
		} else {
			myVar.style.display = "none";
		}
	}
}

function showAllJunior() {
	myIDS = ["Comp131", "Comp40", "Math145", "EM54", "Comp170", "Comp115", "Math42", "SPN02"];
	
	for (i = 0; i < myIDS.length; i++) {
		myVar = document.getElementById(myIDS[i]);
		if (myVar.style.display === "none") {
			myVar.style.display = "block";
			myVar.style.margin = "5px 0 25px 10px";
			myVar.style.width = "90%";
			myVar.style.float = "none";
		} else {
			myVar.style.display = "none";
		}
	}
}
