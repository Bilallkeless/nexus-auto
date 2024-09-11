const openBtn = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const headerLogo = document.querySelector(".header-logo");
const body = document.body;

// Menü açma/kapatma işlevini belirleme
let isMenuOpen = false;

// Sayfa yüklendiğinde ve pencere yeniden boyutlandırıldığında mobileMenu'nun konumunu ayarlama
function adjustMobileMenuPosition() {
  const headerLogoHeight = headerLogo.offsetHeight; // header-logo yüksekliğini al
  mobileMenu.style.top = headerLogoHeight + 5 + "px"; // top değerini header-logo'nun 5px altına ayarla
}

// Sayfa yüklendiğinde mobil menüyü ayarla
window.addEventListener("load", adjustMobileMenuPosition);

// Pencere yeniden boyutlandırıldığında mobil menüyü tekrar ayarla
window.addEventListener("resize", adjustMobileMenuPosition);

// Menü ikonuna tıklandığında çalışacak işlev
openBtn.addEventListener("click", () => {
  // Menü durumunu değiştirme
  mobileMenu.classList.toggle("active");
  openBtn.classList.toggle("active");

  // Menü açıldığında body'ye "no-scroll" sınıfı ekleyerek kaydırmayı engelle
  if (mobileMenu.classList.contains("active")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
});
