var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume*100 +"%";
	video.muted = false;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing CSS back");
	video.classList.remove("oldSchool")
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= .95
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= .95
	console.log(video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing the speed");
    video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = this.value +"%";
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		document.querySelector("#volume").innerHTML = video.volume*100 +"%";
	}else{
		document.querySelector("#mute").innerHTML = "Unmute";
		document.querySelector("#volume").innerHTML = 0 +"%";
		video.muted = true;
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 15){
		console.log("Skipping ahead");
		video.currentTime += 15;
	}else{
		console.log("Going back to the start");
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});
