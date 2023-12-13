$(document).ready(function() {
	// Check if the viewport width is greater than or equal to 515 pixels
	if ($(window).width() >= 515) {
			// Initialize Slick slider
			$('.shop-sliders').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					responsive: [
							{
									breakpoint: 826,
									settings: {
											slidesToShow: 3,
											slidesToScroll: 1,
									}
							}
					]
			});
	}
});


const toggleEl = document.querySelector('.toggle');
const navMenu = document.getElementById('nav_menu');

toggleEl.addEventListener('click', () => {
	console.log('click');
	const isExpanded = toggleEl.getAttribute('aria-expanded') === 'true';
	// Toggle the aria-expanded attribute
	toggleEl.setAttribute('aria-expanded', String(!isExpanded));
	// Toggle the class on the #nav_menu element
	navMenu.classList.toggle('expanded', !isExpanded);
	toggleEl.classList.toggle('active');

	console.log('Is active:', toggleEl.classList.contains('active'));
});

let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//video controler 
 const btn = document.querySelector('.play-btn');
 const videoContainer = document.querySelector('.video-container');


 const close = document.querySelector('.close')

 btn.addEventListener('click', ()=>
 {
	event.preventDefault();
	console.log('Adding show class');
	videoContainer.classList.add('show');
	// videoContainer.style.pointerEvents = 'auto';
 });

 close.addEventListener('click', ()=>{
	console.log('removed show class');
	videoContainer.classList.remove('show');
  // videoContainer.style.pointerEvents = 'none';
 });


