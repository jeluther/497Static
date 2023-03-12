// Questions
// Event Listener for Volume change
// Styled and Original - How to style the video?

var video;


// Page load
window.addEventListener("load", function() {

	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	// video.autoPlay = false;
	video.loop = false;

});

// Play Button
document.querySelector("#play").addEventListener("click", function() {

	console.log("Play Video");
	video = document.querySelector("#player1");
	if (video.paused == true){
		video.play();
		video.volume = document.querySelector("#slider").value / 100;
		document.querySelector("#volume").innerHTML= (document.querySelector("#slider").value + "%");
		document.querySelector("#play").innerHTML="Pause";
	}

	else{

		console.log("Video paused");
		video.pause();
		document.querySelector("#play").innerHTML="Play";

	}

});

// Skip Ahead
document.querySelector("#skip_forward").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if(video.currentTime + 2 > video.duration){

		video.currentTime = 0;

	}
	
	else{

		video.currentTime = video.currentTime + 2;

	}

	console.log("The current location of the video: " + video.currentTime);
	
});

// Skip Back
document.querySelector("#skip_backward").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if(video.currentTime - 2 < 0){

		video.currentTime = 0;

	}
	
	else{

		video.currentTime = video.currentTime - 2;

	}

	console.log("The current location of the video: " + video.currentTime);

});

// Restart
document.querySelector("#restart").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.currentTime = 0;

	console.log("The current location of the video: " + video.currentTime);
	
});

// Mute	
document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if (!video.muted){

		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute";
		console.log("Video is muted");

	}

	else{

		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute";
		console.log("Video is unmuted");

	}
	
});

// Volume Slider	-	Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("click", function() {
	video = document.querySelector("#player1");
console.log("In the video query");
console.log("Video volume is now " + document.querySelector("#slider").value + "%");

video.volume = document.querySelector("#slider").value / 100;
document.querySelector("#volume").innerHTML= (document.querySelector("#slider").value + "%");
	
});

// Styled			-	Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video = document.querySelector("#player1");
console.log("Video is now styled");
video.classList.add("oldSchool");
	
});

// Original			-	Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video = document.querySelector("#player1");
console.log("Video is now unstyled");
video.classList.remove("oldSchool");
	
});