const toggleEl = document.querySelector('.toggle');


toggleEl.addEventListener('click', () => {
	console.log('click');
    const isExpanded = toggleEl.getAttribute('aria-expanded') === 'true';
    // Toggle the aria-expanded attribute
    toggleEl.setAttribute('aria-expanded', String(!isExpanded));
});
