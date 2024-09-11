document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".car-names-slider", {
    type: "slide",
    perPage: 4,
    pagination: false,
    arrows: false,
    drag: "free",
    breakpoints: {
      1200: {
        perPage: 3,
      },
      768: {
        perPage: 1,
      },
      576: {
        perPage: 1,
        gap: "2rem",
      },
    },
  }).mount();

  const carNames = document.querySelectorAll(".car-name");
  const carDetailsContainers = document.querySelectorAll(
    ".car-details-container"
  );

  carNames.forEach((carName) => {
    carName.addEventListener("click", function () {
      // Tüm araba isimlerinin aktifliğini kaldır
      carNames.forEach((name) => name.classList.remove("active"));
      document
        .querySelectorAll(".splide__slide")
        .forEach((slide) => slide.classList.remove("active"));

      // Tıklanan araba ismine 'active' sınıfı ekle
      this.classList.add("active");
      this.closest(".splide__slide").classList.add("active");

      // Tüm araba detaylarını gizle
      carDetailsContainers.forEach((container) => {
        container.style.display = "none";
        container.classList.remove("active");
      });

      // Seçilen arabanın detaylarını göster
      const selectedCar = this.getAttribute("data-car");
      const selectedCarDetails = document.querySelector(
        `.car-details-container[data-car="${selectedCar}"]`
      );
      selectedCarDetails.style.display = "flex";
      setTimeout(() => {
        selectedCarDetails.classList.add("active");
      }, 50);
    });
  });

  // İlk arabayı göster
  document.querySelector('.car-name[data-car="1"]').click();
});
