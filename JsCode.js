/// make the horizontal scroll and the guiding line
window.addEventListener("wheel", function(event) {
    // Only scroll horizontally
    if (event.deltaY !== 0) {
      event.preventDefault(); // prevent the vertical scroll
      window.scrollBy({
        left: event.deltaY,
      });
    }
  }, { passive: false });