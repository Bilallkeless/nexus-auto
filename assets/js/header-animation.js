let lastScrollTop = 0;

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Aşağıya kaydırıldığında navbar'ı gizle
    header.classList.add("hidden");
  } else {
    // Yukarıya kaydırıldığında navbar'ı göster
    header.classList.remove("hidden");
  }

  // Her durumda scrolled sınıfını ekleyip kaldır
  if (scrollTop > 300) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Kısıtlamayı önlemek için
});
