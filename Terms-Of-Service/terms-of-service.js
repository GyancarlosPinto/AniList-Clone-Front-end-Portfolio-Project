// Read More Functionality
function toggleReadMore() {
    var introParagraph = document.querySelector('.intro');
    var readMoreButton = document.getElementById('readMoreButton');

    if (introParagraph.classList.contains('collapsed')) {
        introParagraph.classList.remove('collapsed');
        readMoreButton.innerText = 'Read Less';
    } else {
        introParagraph.classList.add('collapsed');
        readMoreButton.innerText = 'Read More';
    }
}

// Scroll to Top Functionality
function scrollToTop() {
    const scrollToTopBtn = document.querySelector("croll-button");
    scrollToTopBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}