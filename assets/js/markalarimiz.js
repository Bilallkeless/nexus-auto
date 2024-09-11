document.addEventListener("DOMContentLoaded", function () {
  new Splide("#brands-slider", {
    type: "slide",
    perPage: 5,
    perMove: 1,
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "2rem",
    breakpoints: {
      1024: {
        perPage: 4,
      },
      768: {
        perPage: 3,
      },
      576: {
        perPage: 2,
        gap: "2rem",
      },
      374: {
        perPage: 1,
        gap: "2rem",
      },
    },
  }).mount();
});
