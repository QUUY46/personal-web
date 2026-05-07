const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  },
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll("[data-photo-image]").forEach((image) => {
  const slot = image.closest("[data-photo-slot]");
  if (!slot) return;

  const markLoaded = () => {
    slot.classList.add("has-image");
  };

  const markMissing = () => {
    slot.classList.remove("has-image");
  };

  if (image.complete && image.naturalWidth > 0) {
    markLoaded();
  } else if (image.complete) {
    markMissing();
  }

  image.addEventListener("load", markLoaded);
  image.addEventListener("error", markMissing);
});
