document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  const animatedElements = document.querySelectorAll(
    ".hidden-left, .hidden-right, .fade-in",
  );
  animatedElements.forEach((el) => observer.observe(el));
});
