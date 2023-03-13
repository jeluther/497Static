// Questions
// Event Listener for Volume change
// Styled and Original - How to style the video?

var video;


// Page load
window.addEventListener("load", function() {

	console.log("Good job opening the window");
	video_turkish = document.querySelector("#player_turkish");
	video_turkish.loop = false;

	video_combo_twist = document.querySelector("#player_turkish");
	video_combo_twist.loop = false;

	video_pullup = document.querySelector("#player_turkish");
	video_pullup.loop = false;

});

// Play Button
document.querySelector("#play_turkish").addEventListener("click", function() {

	console.log("Play Video");
	video_turkish = document.querySelector("#player_turkish");
	if (video_turkish.paused == true){
		video_turkish.play();
		video_turkish.volume = 0;
		document.querySelector("#play_turkish").innerHTML="Pause";
	}

	else{

		console.log("Video paused");
		video_turkish.pause();
		document.querySelector("#play_turkish").innerHTML="Play";

	}

});

// Skip Ahead
document.querySelector("#skip_forward_turkish").addEventListener("click", function() {
	video_turkish = document.querySelector("#player_turkish");
	if(video_turkish.currentTime + 2 > video_turkish.duration){

		video_turkish.currentTime = 0;

	}
	
	else{

		video_turkish.currentTime = video_turkish.currentTime + 2;

	}

	console.log("The current location of the video: " + video_turkish.currentTime);
	
});

// Skip Back
document.querySelector("#skip_backward_turkish").addEventListener("click", function() {
	video_turkish = document.querySelector("#player_turkish");
	if(video_turkish.currentTime - 2 < 0){

		video_turkish.currentTime = 0;

	}
	
	else{

		video_turkish.currentTime = video.currentTime - 2;

	}

	console.log("The current location of the video: " + video_turkish.currentTime);

});

// Restart
document.querySelector("#restart_turkish").addEventListener("click", function() {
	video_turkish = document.querySelector("#player_turkish");
	video_turkish.currentTime = 0;

	console.log("The current location of the video: " + video_turkish.currentTime);
	
});

// ////////////////////////////////////////////////////////

// Play Button
document.querySelector("#play_combo_twist").addEventListener("click", function() {

	console.log("Play Video");
	video_combo_twist = document.querySelector("#player_combo_twist");
	if (video_combo_twist.paused == true){
		video_combo_twist.play();
		video_combo_twist.volume = 0;
		document.querySelector("#play_combo_twist").innerHTML="Pause";
	}

	else{

		console.log("Video paused");
		video_combo_twist.pause();
		document.querySelector("#play_combo_twist").innerHTML="Play";

	}

});

// Skip Ahead
document.querySelector("#skip_forward_combo_twist").addEventListener("click", function() {
	video_combo_twist = document.querySelector("#player_combo_twist");
	if(video_combo_twist.currentTime + 2 > video_combo_twist.duration){

		video_combo_twist.currentTime = 0;

	}
	
	else{

		video_combo_twist.currentTime = video_combo_twist.currentTime + 2;

	}

	console.log("The current location of the video: " + video_combo_twist.currentTime);
	
});

// Skip Back
document.querySelector("#skip_backward_combo_twist").addEventListener("click", function() {
	video_combo_twist = document.querySelector("#player_combo_twist");
	if(video_combo_twist.currentTime - 2 < 0){

		video_combo_twist.currentTime = 0;

	}
	
	else{

		video_combo_twist.currentTime = video_combo_twist.currentTime - 2;

	}

	console.log("The current location of the video: " + video_combo_twist.currentTime);

});

// Restart
document.querySelector("#restart_combo_twist").addEventListener("click", function() {
	video_combo_twist = document.querySelector("#player_combo_twist");
	video_combo_twist.currentTime = 0;

	console.log("The current location of the video: " + video_combo_twist.currentTime);
	
});
