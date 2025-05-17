const elements = document.querySelectorAll("section, .project-card, .skills-list li");

const options = {
  threshold: 0.2
};

const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

elements.forEach(el => {
  el.classList.add("hidden");
  revealOnScroll.observe(el);
});
