document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".article-container");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const articleWidth = document.querySelector(".article").offsetWidth; // Get the width of each article
    const gap = 20; // Adjust this value based on the gap between articles

    // Calculate the scroll distance based on article width and gap
    const scrollDistance = articleWidth + gap;

    prevButton.addEventListener("click", function () {
        container.scrollLeft -= scrollDistance;
    });

    nextButton.addEventListener("click", function () {
        container.scrollLeft += scrollDistance;
    });

    container.addEventListener("scroll", function () {
        // Check if the scroll position is at the beginning or end of the container
        prevButton.disabled = container.scrollLeft === 0;
        nextButton.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
    });
});
