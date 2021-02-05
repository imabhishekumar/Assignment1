var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {slideIndex = 1}

	if (n < 1) {slideIndex = slides.length}
	
	for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}	
	slides[slideIndex-1].style.display = "block";

	// element.classList.add('show');
		
}

showSlides2(slideIndex);

function plusSlides2(n){
	showSlides2(slideIndex += n);
}

function currentSlide2(n) {
	showSlides2(slideIndex = n);
}

function showSlides2(n) {
	var i;
	var slides2 = document.getElementsByClassName("slides2");
	if (n > slides2.length) {slideIndex = 1}

	if (n < 1) {slideIndex = slides2.length}
	
	for (var i = 0; i < slides2.length; i++) {
			slides2[i].style.display = "none";
		}	
	slides2[slideIndex-1].style.display = "block";
		
}
