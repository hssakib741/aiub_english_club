document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector('.gallery-grid');  // Use class instead of ID
    let scrollInterval;
    let scrollAmount = 0;

    if (gallery) {
        function autoScroll() {
            scrollInterval = setInterval(() => {
                // Scroll by 2px at a time
                if (scrollAmount < gallery.scrollWidth - gallery.clientWidth) {
                    scrollAmount += 2; // Adjust this value for speed
                    gallery.scrollTo({
                        left: scrollAmount, // Scroll horizontally
                        behavior: 'smooth'  // Smooth scrolling
                    });
                } else {
                    scrollAmount = 0; // Reset to the start after scrolling to the end
                    gallery.scrollTo({
                        left: 0, // Reset scroll position
                        behavior: 'smooth'  // Smooth scrolling
                    });
                }
            }, 20); // Adjust interval for smoothness
        }

        // Start the auto-scrolling
        autoScroll();
    } else {
        console.warn("Gallery element not found.");
    }
});