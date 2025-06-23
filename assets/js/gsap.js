document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".reveal").forEach((container) => {
    const image = container.querySelector("img");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset",
        start: "top 80%"
      }
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, {
      xPercent: -100,
      duration: 1.5,
      ease: "power2.out"
    });
    tl.from(image, {
      xPercent: 100,
      scale: 1.3,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1.5");
  });
});


function toggleContent(button) {
    const items = document.querySelectorAll('.more-content');
    const isHidden = items[0].style.display === 'none';

    items.forEach(item => {
      item.style.display = isHidden ? 'block' : 'none';
    });

    // Optional: Change button text
    button.textContent = isHidden ? 'Show less' : 'Load more work';
  }