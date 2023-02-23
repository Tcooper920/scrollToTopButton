// Add "back-to-top" button to page...
const emptyDiv = document.createElement("div");

emptyDiv.innerHTML = `
    <button class="back-to-top-btn show-back-to-top-btn" title="Scroll back to top of web page.">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
        </svg>
    </button>`

document.body.append(emptyDiv);

// Go back to top of page on button click...
const backToTopButton = document.getElementsByClassName("back-to-top-btn")[0];
let lastScrollTop = 0;

backToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, and IE
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