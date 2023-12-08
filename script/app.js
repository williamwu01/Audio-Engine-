const toggleEl = document.querySelector('.toggle');
const navMenu = document.getElementById('nav_menu');
let slideIndex = 1;
showSlides(slideIndex);

toggleEl.addEventListener('click', () => {
	console.log('click');
    const isExpanded = toggleEl.getAttribute('aria-expanded') === 'true';
    // Toggle the aria-expanded attribute
    toggleEl.setAttribute('aria-expanded', String(!isExpanded));
		// Toggle the class on the #nav_menu element
		navMenu.classList.toggle('expanded', !isExpanded);
});

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
  let slides = document.getElementsByClassName("mySlides");
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