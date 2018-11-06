let slides = document.getElementsByClassName('myslides'),
	dots = document.getElementsByClassName('dots'),
    slideIndex = 1;
showSlide(slideIndex);

// Next & Previous controls
function plusSlides(n){
showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlide(slideIndex = n);
}

function showSlide(n){
		if (n > slides.length) { slideIndex = 1}; // if you reach to the end start from img1 again
		if (n < 1) { slideIndex = slides.length}; // move back to the last img if you on img1
		for (let i=0;i<slides.length;i++) {
		slides[i].style.display = "none"; // remove the img
		};

		for (let i=0;i<dots.length;i++) {
		dots[i].className = dots[i].className.replace(" active","");
		};

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";

}


