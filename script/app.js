const toggleEl = document.querySelector('.toggle');
const navMenu = document.getElementById('nav_menu');

toggleEl.addEventListener('click', () => {
	console.log('click');
    const isExpanded = toggleEl.getAttribute('aria-expanded') === 'true';
    // Toggle the aria-expanded attribute
    toggleEl.setAttribute('aria-expanded', String(!isExpanded));
		// Toggle the class on the #nav_menu element
		navMenu.classList.toggle('expanded', !isExpanded);
});
