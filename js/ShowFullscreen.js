
document.addEventListener('keydown', logKey);
var modal = document.getElementById("ShowFullscreen");
var img = document.getElementById("SF-Img");

function ShowFullscreen(imgURL){
	modal.style.display = "block";
	img.src = imgURL;
}

function HideFullScreen() {
	modal.style.display = "none";
	img.src = "";
}

// when pressing escape key:
function logKey(event) { 
	if (event.keyCode == 27) HideFullScreen();
}