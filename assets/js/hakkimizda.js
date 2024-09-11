document.addEventListener("DOMContentLoaded", function () {
  new Splide("#car-slider", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 2000,
    arrows: true,
    pagination: false,
    reducedMotion: {
      interval: 4000,
      speed: 800,
      autoplay: true,
    },
    resetProgress: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  }).mount();

  // Modal ve close elementlerini seç
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const closeBtn = document.getElementsByClassName("close")[0];
  const slides = document.querySelectorAll("#car-slider .splide__slide img");
  let currentIndex = 0;

  // Zoom butonlarına event listener ekle
  document.querySelectorAll(".zoom-button").forEach((button, index) => {
    button.addEventListener("click", function () {
      currentIndex = index; // Geçerli resmi tut
      openModal(currentIndex); // Modalı aç ve resmi göster
    });
  });

  document
    .querySelectorAll("#car-slider .splide__slide img")
    .forEach((button, index) => {
      button.addEventListener("click", function () {
        currentIndex = index; // Geçerli resmi tut
        openModal(currentIndex); // Modalı aç ve resmi göster
      });
    });

  function openModal(index) {
    const imgSrc = slides[index].src; // Resim kaynağını al
    modal.style.display = "flex"; // Modalı göster
    modalImg.src = imgSrc; // Modal içeriğine resim kaynağını ekle
  }

  // Close butonuna event listener ekle
  closeBtn.onclick = function () {
    modal.style.display = "none"; // Modalı kapat
  };

  // Modal dışına tıklandığında kapatma işlevselliği
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none"; // Modalı kapat
    }
  };

  // Esc tuşuna basıldığında modalı kapat
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none"; // Modalı kapat
    }
  });

  // Modal için ok butonları oluştur ve event listener ekle
  const leftArrow = document.createElement("div");
  leftArrow.className = "modal-arrow left";
  leftArrow.innerHTML = "&#10094;"; // Sol ok
  modal.appendChild(leftArrow);

  const rightArrow = document.createElement("div");
  rightArrow.className = "modal-arrow right";
  rightArrow.innerHTML = "&#10095;"; // Sağ ok
  modal.appendChild(rightArrow);

  leftArrow.onclick = function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Bir önceki resim
    openModal(currentIndex);
  };

  rightArrow.onclick = function () {
    currentIndex = (currentIndex + 1) % slides.length; // Bir sonraki resim
    openModal(currentIndex);
  };
});

// JavaScript: Resim Slaytı için İşlevsellik
const carSlides = document.querySelectorAll(".car-image");
const carPrevButton = document.querySelector(".car-prev-button");
const carNextButton = document.querySelector(".car-next-button");
let carCurrentIndex = 0;

// İlk resmi göster
carSlides[carCurrentIndex].classList.add("active");

// Önceki resmi göster
carPrevButton.addEventListener("click", () => {
  carSlides[carCurrentIndex].classList.remove("active");
  carCurrentIndex = (carCurrentIndex - 1 + carSlides.length) % carSlides.length;
  carSlides[carCurrentIndex].classList.add("active");
});

// Sonraki resmi göster
carNextButton.addEventListener("click", () => {
  carSlides[carCurrentIndex].classList.remove("active");
  carCurrentIndex = (carCurrentIndex + 1) % carSlides.length;
  carSlides[carCurrentIndex].classList.add("active");
});
