// Scroll to Top Functionality
function scrollToTop() {
    const scrollToTopBtn = document.querySelector(".scroll-button");
    scrollToTopBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
};

scrollToTop();