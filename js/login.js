// Reset Button
document.querySelector(".menu_button").addEventListener("click", function() {

    if(document.getElementById('athlete').checked){

        window.location.assign("/athlete.html");

    }

    else if((document.getElementById('coach').checked)){

        window.location.assign("/coach.html");

    }

    else if((document.getElementById('gym').checked)){

        window.location.assign("/gym.html");

    }

    else{

        prompt("Please select a profile type");

    }


});