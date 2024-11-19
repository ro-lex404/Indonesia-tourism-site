// JavaScript function to handle redirection
function redirect(page) {
    window.location.href = page;
}

const carouselImages = document.querySelector('.carousel-images');
const items = document.querySelectorAll('.carousel-item'); // Select all items

let index = 0; // Start at the first item
const intervalTime = 3000; // 3 seconds

function autoScroll() {
    
    index++;
    if (index >= items.length) {
        index = 0; // Reset to the first item if we reach the end
    }
    carouselImages.style.transform = `translateX(${-index * 70}vw)`;
}

// Set the auto-scroll interval
setInterval(autoScroll, intervalTime);
