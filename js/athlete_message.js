document.querySelector("#message1").addEventListener("click", function() {
	
	answer = prompt("Please enter a message");
    document.querySelector("#message1").innerHTML = answer;
    document.querySelector("#class_message1").classList.add("sent");
    document.querySelector("#class_message1").classList.remove("received");
    document.querySelector("#time1").innerHTML = "Just sent";


});