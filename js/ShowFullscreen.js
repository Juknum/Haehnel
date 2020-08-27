function ShowFullscreen(imgURL){
	var modal = document.getElementById("ShowFullscreen")

	modal.style.display = "block";

	// close modal: 
	var span = document.getElementById("SF-Span");
	span.onclick = function() {
		modal.style.display = "none";
	}
	// when pressing escape key:
	$(document).keydown(function(event) { 
		if (event.keyCode == 27) { 
			modal.style.display = "none";
		}
	});

	// set img in modal:
	var img = document.getElementById("SF-Img");
	img.src = imgURL;
}