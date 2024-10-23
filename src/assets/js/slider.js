const slides = document.querySelector('.c-slides');
const slide = document.querySelectorAll('.c-slide_item');
const prev = document.getElementById('c-slider_prev');
const next = document.getElementById('c-slider_next');
const dotsContainer = document.querySelector('.c-slider_dots');
let index = 0;
let autoplay;
const autoplayInterval = 5000;

// Create dots for navigation
slide.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('c-slider_dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        index = i;
        updateSlide();
        resetAutoplay();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.c-slider_dot');

// Function to update slides and dots
function updateSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Previous button functionality
prev.addEventListener('click', () => {
    index = (index === 0) ? slide.length - 1 : index - 1;
    updateSlide();
    resetAutoplay();
});

// Next button functionality
next.addEventListener('click', () => {
    index = (index === slide.length - 1) ? 0 : index + 1;
    updateSlide();
    resetAutoplay();
});

// Touch event handling for swiping
let startX = 0;

slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slides.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 30) {
        index = (index === slide.length - 1) ? 0 : index + 1;
        updateSlide();
    } else if (startX < endX - 30) { // Swipe right
        index = (index === 0) ? slide.length - 1 : index - 1;
        updateSlide();
    }
    resetAutoplay();
});

// Function to start autoplay
function startAutoplay() {
    autoplay = setInterval(() => {
        index = (index === slide.length - 1) ? 0 : index + 1;
        updateSlide();
    }, autoplayInterval);
}

// Function to reset autoplay
function resetAutoplay() {
    clearInterval(autoplay);
    startAutoplay();
}

// Start autoplay on page load
startAutoplay();
