// Reset Button
document.querySelector("#reset").addEventListener("click", function() {

    document.querySelector("#Mike_Wesley_speed").style.display = "none";
    document.querySelector("#Denton_Green_speed").style.display = "none";
    document.querySelector("#Ryan_Smith_speed").style.display = "none";
    document.querySelector("#Brent_Gioletti_speed").style.display = "none";
    document.querySelector("#Mike_Wesley_strength").style.display = "none";
    document.querySelector("#Denton_Green_strength").style.display = "none";
    document.querySelector("#Ryan_Smith_strength").style.display = "none";
    document.querySelector("#Brent_Gioletti_strength").style.display = "none";

});

// Mike Wesley Speed and Agility
document.querySelector("#Mike_Wesley_SA").addEventListener("click", function() {

	if (document.querySelector("#Mike_Wesley_speed").style.display == "none"){

        document.querySelector("#Mike_Wesley_speed").style.display = "inline";

	}

	else{

        document.querySelector("#Mike_Wesley_speed").style.display = "none";

	}

});

// Mike Wesley Strength and Power
document.querySelector("#Mike_Wesley_SP").addEventListener("click", function() {

	if (document.querySelector("#Mike_Wesley_strength").style.display == "none"){

        document.querySelector("#Mike_Wesley_strength").style.display = "inline";

	}

	else{

        document.querySelector("#Mike_Wesley_strength").style.display = "none";

	}

});

// Denton Green Speed and Agility
document.querySelector("#Denton_Green_SA").addEventListener("click", function() {

	if (document.querySelector("#Denton_Green_speed").style.display == "none"){

        document.querySelector("#Denton_Green_speed").style.display = "inline";

	}

	else{

        document.querySelector("#Denton_Green_speed").style.display = "none";

	}

});

// Denton Green Strength and Power
document.querySelector("#Denton_Green_SP").addEventListener("click", function() {

	if (document.querySelector("#Denton_Green_strength").style.display == "none"){

        document.querySelector("#Denton_Green_strength").style.display = "inline";

	}

	else{

        document.querySelector("#Denton_Green_strength").style.display = "none";

	}

});

// Ryan Smith Speed and Agility
document.querySelector("#Ryan_Smith_SA").addEventListener("click", function() {

	if (document.querySelector("#Ryan_Smith_speed").style.display == "none"){

        document.querySelector("#Ryan_Smith_speed").style.display = "inline";

	}

	else{

        document.querySelector("#Ryan_Smith_speed").style.display = "none";

	}

});

// Ryan Smith Strength and Power
document.querySelector("#Ryan_Smith_SP").addEventListener("click", function() {

	if (document.querySelector("#Ryan_Smith_strength").style.display == "none"){

        document.querySelector("#Ryan_Smith_strength").style.display = "inline";

	}

	else{

        document.querySelector("#Ryan_Smith_strength").style.display = "none";

	}

});

// Brent Gioletti
document.querySelector("#Brent_Gioletti").addEventListener("click", function() {

	if (document.querySelector("#Brent_Gioletti_speed").style.display == "none" ||
        document.querySelector("#Brent_Gioletti_strength").style.display == "none"){

        document.querySelector("#Brent_Gioletti_speed").style.display = "inline";
        document.querySelector("#Brent_Gioletti_strength").style.display = "inline";

	}

	else{

        document.querySelector("#Brent_Gioletti_speed").style.display = "none";
        document.querySelector("#Brent_Gioletti_strength").style.display = "none";

	}

});

// Brent Gioletti Speed and Agility
document.querySelector("#Brent_Gioletti_SA").addEventListener("click", function() {

	if (document.querySelector("#Brent_Gioletti_speed").style.display == "none"){

        document.querySelector("#Brent_Gioletti_speed").style.display = "inline";

	}

	else{

        document.querySelector("#Brent_Gioletti_speed").style.display = "none";

	}

});

// Brent Gioletti Strength and Power
document.querySelector("#Brent_Gioletti_SP").addEventListener("click", function() {

	if (document.querySelector("#Brent_Gioletti_strength").style.display == "none"){

        document.querySelector("#Brent_Gioletti_strength").style.display = "inline";

	}

	else{

        document.querySelector("#Brent_Gioletti_strength").style.display = "none";

	}

});


document.querySelector("#corner").addEventListener("click", function() {
	
	document.querySelector("#results").style.display = "Block";
	document.querySelector("#position").innerHTML = "Results: CB";


});