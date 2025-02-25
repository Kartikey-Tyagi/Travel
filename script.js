document.addEventListener("DOMContentLoaded", function () {
    AOS.init(); // Initialize AOS animations

    // Automatic sliding for the package section
    const packageSlider = document.querySelector(".package-slider");
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust scrolling speed

    function autoScroll() {
        if (scrollAmount >= packageSlider.scrollWidth - packageSlider.clientWidth) {
            scrollAmount = 0; // Reset scroll
        } else {
            scrollAmount += scrollSpeed;
        }
        packageSlider.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }

    let sliderInterval = setInterval(autoScroll, 50); // Start auto-scroll

    // Pause scrolling on hover
    packageSlider.addEventListener("mouseenter", () => clearInterval(sliderInterval));
    packageSlider.addEventListener("mouseleave", () => sliderInterval = setInterval(autoScroll, 50));
});
