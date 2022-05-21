let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showLightBox(n) {
  let lightBox = document.querySelector(".light-box");
  lightBox.classList.add("show");
  currentSlide(n);
}
function closeLightBox() {
  let lightBox = document.querySelector(".light-box");
  lightBox.classList.remove("show");
}

function increaseQty() {
  const qtySpan = document.querySelector("#quantity");
  let qty = qtySpan.innerHTML;
  qty++;
  qtySpan.innerHTML = qty;
  console.log(qty);
}
function decreaseQty() {
  const qtySpan = document.querySelector("#quantity");
  let qty = qtySpan.innerHTML;
  if (qty > 0) {
    qty--;
    qtySpan.innerHTML = qty;
    console.log(qty);
  }
}

function openSidebar() {
  const mainmenu = document.querySelector(".mobile-menu");
  const sideBar = document.querySelector(".sidebar");
  mainmenu.classList.add("showMenu");
  sideBar.classList.add("showSidebar");
}
function closeSidebar() {
  const mainmenu = document.querySelector(".mobile-menu");
  mainmenu.classList.remove("showMenu");
}
function showCart() {
  const cartDisplay = document.querySelector(".cart-list-container");
  cartDisplay.classList.toggle("show");
}
