window.addEventListener("wheel", function(event) {
    if (event.deltaY !== 0) {
      event.preventDefault(); 
      window.scrollBy({
        left: event.deltaY,
      });
    }
  }, { passive: false });

document.addEventListener('keydown', function(e) {
      const container = document.querySelector('.scrollable'); // or body
    if (e.key === 'ArrowRight') {
      container.scrollLeft += 30;
    } else if (e.key === 'ArrowLeft') {
      container.scrollLeft -= 30;
    }
  });