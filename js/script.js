const nav = document.querySelector("#nav");
const btn = document.querySelector("#header-btn");
const btnImg = document.querySelector("#header-btn-img");

btn.onclick = () => {
  if (nav.classList.toggle("open")) {
    btnImg.src = "./img/icon/Burger-close.svg";
  } else {
    btnImg.src = "./img/icon/Burger-button.svg";
  }
};

AOS.init({
  disable: 'phone',
  once: true
});
