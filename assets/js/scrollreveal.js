ScrollReveal().reveal(".reveal-h1", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
  easing: "ease-in-out",
  reset: false,
});

ScrollReveal().reveal(".reveal-p", {
  origin: "bottom",
  distance: "50px",
  duration: 1200,
  delay: 400,
  easing: "ease-in-out",
  reset: false,
});

ScrollReveal().reveal(".reveal-btn", {
  origin: "bottom",
  distance: "30px",
  duration: 1400,
  delay: 600,
  easing: "ease-in-out",
  reset: false,
});

document.addEventListener("DOMContentLoaded", function () {
  // Sadece masaüstü ekranında animasyon çalıştır
  if (window.innerWidth > 819) {
    ScrollReveal().reveal(
      ".car-text-content h2, .car-text-content p, .car-text-content button",
      {
        duration: 1500,
        origin: "right",
        distance: "100px",
        opacity: 0,
      }
    );

    ScrollReveal().reveal("#car-slider", {
      duration: 1500,
      origin: "left",
      distance: "100px",
      opacity: 0,
    });

    ScrollReveal().reveal(".customer-container", {
      duration: 2000,
      origin: "top",
      distance: "50px",
      opacity: 0,
    });

    ScrollReveal().reveal(".brands-title, .section-title", {
      duration: 1000,
      origin: "top",
      distance: "50px",
      opacity: 0,
    });

    ScrollReveal().reveal(".service-card", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: false,
      interval: 200,
    });

    ScrollReveal().reveal(".right-section", {
      duration: 2000,
      origin: "top",
      distance: "50px",
      opacity: 0,
    });

    ScrollReveal().reveal(".iletisim-section .car-image", {
      duration: 2000,
      origin: "left",
      distance: "50px",
      opacity: 0,
    });
  }
});
