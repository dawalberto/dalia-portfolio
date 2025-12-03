document.addEventListener("DOMContentLoaded", () => {
  console.log("Home script loaded");
  // Custom Cursor
  const cursor = document.querySelector(".cursor-follower");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Hover effects for cursor
  const hoverables = document.querySelectorAll("a, .job-item, .lang-btn");

  hoverables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
      cursor.style.mixBlendMode = "difference";
    });

    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });

  // Reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const jobItems = document.querySelectorAll(".job-item");
  jobItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  // Hero Text Reveal
  const heroText = document.querySelector(".reveal-text");
  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(100px)";
  heroText.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";

  setTimeout(() => {
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 100);
});
