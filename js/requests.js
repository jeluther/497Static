// Play Button
document.querySelector("#yes_height").addEventListener("click", function() {

    if(confirm("Confirm Verification Request Approval")){

        document.querySelector("#height").style.display = "None";

    }

});

document.querySelector("#no_height").addEventListener("click", function() {

    if(confirm("Confirm Verification Request Rejectection")){

        document.querySelector("#height").style.display = "None";

    }

});