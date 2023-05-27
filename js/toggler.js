
const DARK_MODE = 0; const WHITE_MODE = 1;

function switchMode(toggle, interval) {
	// Set the body toggle
	const body = document.querySelector("body");
	body.style.background = toggle ? "#ffffff" : "#0d1117";
	body.style.color = toggle ? "#0d1117" : "#ffffff";
	body.style.transition = interval;

	// Set the link toggle
    var links = document.getElementsByTagName("a");
    for(var i=0; i < links.length; i++) {
        if(links[i].href) {
            links[i].style.color = toggle ? "#0d1117" : "#ffffff";  
            links[i].style.transition = interval;
        }
    }
}

const toggler = document.getElementById("toggler");
toggler.addEventListener('click', function() {
	this.classList.toggle('bi-brightness-high-fill');

	if (this.classList.toggle("bi-moon-stars-fill")) {
		switchMode(DARK_MODE, "2s");
	}
	else {
		switchMode(WHITE_MODE, "2s");
	}
});
