// Auto-scroll carousel (if needed)
const carousel = document.getElementById("carousel");
let scrollAmount = 0;

function scrollCarousel() {
  if (carousel) {
    scrollAmount += 1;
    carousel.scrollLeft = scrollAmount;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }
  }
}

setInterval(scrollCarousel, 30);
