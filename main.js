
// Read more functino
function readMore(name) {
	more = "more" + name;
	dot = "dots" + name;
	myBtn = "myBtn" + name;
	var dots = document.getElementById(dot);
	var btnText = document.getElementById(myBtn);
	var moreText = document.getElementById(more);

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}

function readMoreSecurity() {
    var dots = document.getElementById("sec");
    var btnText = document.getElementById("security");

    if (dots.style.display === "none") {
        dots.style.display = "block";
        btnText.innerHTML = "Read less";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read more"; 
    }
}


// Menu bar setting
function rollDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropButton')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

document.getElementById('push').addEventListener("click", function(){
    console.log('clicked');
    var x = document.getElementById("navigation");
    if (x.className === "inactive") {
        x.className = "active";
    } else {
        x.className = "inactive";
    }
});


	
// Scroll to top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBack").style.display = "block";
    } else {
        document.getElementById("scrollBack").style.display = "none";
    }
}
document.getElementById('scrollBack').addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
