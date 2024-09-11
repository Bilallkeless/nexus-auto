window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.querySelector(".scroll-to-top");
  if (window.scrollY > 300) {
    // 300px aşağı kaydırıldığında görünür
    scrollToTopBtn.style.opacity = 1;
    scrollToTopBtn.style.transform = "translateY(0)";
  } else {
    scrollToTopBtn.style.opacity = 0;
    scrollToTopBtn.style.transform = "translateY(50px)";
  }
});

document
  .querySelector(".scroll-to-top")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
