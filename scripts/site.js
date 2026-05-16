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

const landscapeHero = document.querySelector("[data-landscape-hero]");

if (landscapeHero) {
  const webpSource = landscapeHero.querySelector("[data-landscape-webp]");
  const jpegSource = landscapeHero.querySelector("[data-landscape-jpeg]");
  const image = landscapeHero.querySelector("[data-landscape-image]");
  const prevButton = landscapeHero.querySelector("[data-landscape-prev]");
  const nextButton = landscapeHero.querySelector("[data-landscape-next]");

  const slides = [
    { name: "photo-02", width: 1800, height: 1800, alt: "Landscape 02" },
    { name: "photo-03", width: 1800, height: 1800, alt: "Landscape 03" },
    { name: "photo-15", width: 1080, height: 1080, alt: "Landscape 15" },
  ];

  let currentIndex = 0;

  const renderSlide = (index) => {
    const slide = slides[(index + slides.length) % slides.length];
    const base = `../photos/landscape/${slide.name}`;

    if (webpSource) {
      webpSource.srcset = `${base}-800.webp 800w, ${base}.webp ${slide.width}w`;
    }

    if (jpegSource) {
      jpegSource.srcset = `${base}-800.jpg 800w, ${base}.jpg ${slide.width}w`;
    }

    if (image) {
      image.src = `${base}.jpg`;
      image.width = slide.width;
      image.height = slide.height;
      image.alt = slide.alt;
    }
  };

  const goTo = (nextIndex) => {
    currentIndex = (nextIndex + slides.length) % slides.length;
    renderSlide(currentIndex);
  };

  if (slides.length > 1) {
    prevButton?.addEventListener("click", () => {
      goTo(currentIndex - 1);
    });

    nextButton?.addEventListener("click", () => {
      goTo(currentIndex + 1);
    });
  } else {
    prevButton?.setAttribute("disabled", "");
    prevButton?.setAttribute("aria-disabled", "true");
    nextButton?.setAttribute("disabled", "");
    nextButton?.setAttribute("aria-disabled", "true");
  }

  renderSlide(currentIndex);
}
