let slideIndex = 1;
let qty = 0;
let cartqty = 0;
let cart = [];
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

  qty = qtySpan.innerHTML;
  qty++;
  qtySpan.innerHTML = qty;
}
function decreaseQty() {
  const qtySpan = document.querySelector("#quantity");

  let qty = qtySpan.innerHTML;
  if (qty > 0) {
    qty--;
    qtySpan.innerHTML = qty;
  }
}

function addToCart() {
  if (qty > 0) {
    let cartItem = {};
    cartqty += qty;
    let existingitem = cart.find((obj) => obj.id === 1);

    let existingQty = 0;
    if (existingitem) {
      existingQty = existingitem.qty;
      existingQty += qty;
      let totalPrice1 = 125.0 * existingQty;
      cart.find((obj) => obj.id === 1).qty = existingQty;
      cart.find((obj) => obj.id === 1).finalPrice = totalPrice1;
    } else {
      let totalPrice2 = 125.0 * qty;
      cartItem = {
        id: 1,
        img: "images/image-product-1-thumbnail.jpg",
        pName: "Fall Limited Edition Sneaker",
        price: "125.00",
        qty: qty,
        finalPrice: totalPrice2,
      };
      cart.push(cartItem);
    }

    const qtySpan = document.querySelector("#quantity");
    qtySpan.innerHTML = 0;
    qty = 0;
    console.log(cart);
  }
}
setInterval(() => {
  if (cart.length > 0) {
    const cartBody = document.querySelector(".cart-body");
    const cartlist = document.querySelector(".cart-items-list");
    const cartBadge = document.querySelector(".badge");

    cartBody.classList.add("hasItem");
    cartBadge.setAttribute("value", cartqty);
    cartBadge.classList.add("hasItem");
    let cartItem = cart.map((item) => {
      return ` <div class="cart-item">
      <div class="cart-item-image"> 
        <img src="${item.img}">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-info-title">
          ${item.pName}
        </div>
        <div class="cart-item-info-prices">
          <span class="prices-left"
            ><span>$${item.price}</span><span>x</span><span>${item.qty}</span></span
          ><span class="prices-right">$${item.finalPrice}</span>
        </div>
      </div>
      <div class="cart-item-delete" onclick="removeItemCart()">
        <img src="images/icon-delete.svg" alt="" />
      </div>
    </div>`;
    });
    cartlist.innerHTML = cartItem;
  }
}, 500);
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
function removeItemCart() {
  const cartBody = document.querySelector(".cart-body");
  const cartlist = document.querySelector(".cart-items-list");
  const cartBadge = document.querySelector(".badge");

  cartBody.classList.remove("hasItem");
  cartBadge.setAttribute("value", 0);
  cartBadge.classList.remove("hasItem");
  cart = [];
  if (cart.length <= 0) {
    cartlist.innerHTML = "";
  }
}
