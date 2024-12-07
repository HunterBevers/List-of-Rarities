// Select all links on the page
const links = document.querySelectorAll('a');

// Add the target="_blank" attribute to each link
links.forEach(link => {
    link.setAttribute('target', '_blank');
});