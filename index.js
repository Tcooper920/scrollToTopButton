
const backToTopButton = document.getElementsByClassName("back-to-top-btn")[0];
let lastScrollTop = 0;

// Go back to top...
backToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and
});

// Show/Hide button based on scroll direction...
window.onscroll = () => {
    let currentDistanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentDistanceFromTop > lastScrollTop) {
        backToTopButton.classList.remove("show-back-to-top-btn");
    } else if (currentDistanceFromTop < lastScrollTop) {
        backToTopButton.classList.add("show-back-to-top-btn");
    } 
    lastScrollTop = currentDistanceFromTop <= 0 ? 0 : currentDistanceFromTop; // For mobile or negative scrolling
}