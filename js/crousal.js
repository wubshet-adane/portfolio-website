const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel .card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let visibleCards = 3;  // Default visible cards at a time
const totalCards = cards.length;

// Function to update visibleCards based on screen size
function updateVisibleCards() {
  if (window.innerWidth <= 480) {
    visibleCards = 1;
  } else if (window.innerWidth <= 768) {
    visibleCards = 2;
  } else {
    visibleCards = 3;
  }

  // Calculate and set the width of each card dynamically
  const cardWidth = (100 / visibleCards) - 4;  // Subtracting 4% for margin (2% on each side)
  cards.forEach(card => {
    card.style.width = `${cardWidth}%`;
  });
}

// Function to show cards with appropriate offset
function showCards(index) {
  const cardWidth = cards[0].offsetWidth + 20; // Width of each card + margin
  const offset = -(index * cardWidth);  // Calculate the offset for sliding
  carousel.style.transform = `translateX(${offset}px)`;
}

// Function to move to the next slide
function nextSlide() {
  if (currentIndex < Math.ceil(totalCards / visibleCards) - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;  // Wrap around to first
  }
  showCards(currentIndex);
}

// Function to move to the previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = Math.ceil(totalCards / visibleCards) - 1;  // Wrap around to last
  }
  showCards(currentIndex);
}

// Event listeners for buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto-scroll the carousel every 3 seconds
setInterval(nextSlide, 3000);

// Initialize carousel and update for screen size changes
updateVisibleCards();
showCards(currentIndex);

// Update visible cards when window is resized
window.addEventListener('resize', () => {
  updateVisibleCards();
  showCards(currentIndex);  // Reposition based on new visible cards
});
