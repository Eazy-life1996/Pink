let navMain = document.querySelector(".main-nav");
let navButton = document.querySelector(".main-nav__toggle");

let form = document.querySelector(".form");
let userName = document.querySelector(".form__input--name");
let userSurname = document.querySelector(".form__input--surname");
let userMail = document.querySelector(".form__input--email");
let modalFail = document.querySelector(".form-modal--failur");
let modalSuccess = document.querySelector(".form-modal--success");
let formButton = document.querySelector(".form__button");
let buttonCloseFirst = document.querySelector(".form-modal__button-first-close");
let buttonCloseSecond = document.querySelector(".form-modal__button-second-close");

navMain.classList.remove("main-nav--nojs");

navButton.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--close")) {
    navMain.classList.remove("main-nav--close");
    navMain.classList.add("main-nav--open");
  } else {
    navMain.classList.add("main-nav--close");
    navMain.classList.remove("main-nav--open");
  }
});

formButton.addEventListener("click", function (evt) {
  if (!userMail.value || !userName.value || !userSurname.value) {
    modalFail.classList.add("modal-f-show");
  } else {
    evt.preventDefault();
    modalSuccess.classList.add("modal-s-show");
  }
});

buttonCloseFirst.addEventListener("click", function () {
  modalFail.classList.remove("modal-f-show");
});

buttonCloseSecond.addEventListener("click", function () {
  modalSuccess.classList.remove("modal-s-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFail.classList.contains("modal-f-show")) {
      evt.preventDefault();
      modalFail.classList.remove("modal-f-show");
    } else {
      if (modalSuccess.classList.contains("modal-s-show")) {
        modalSuccess.classList.remove("modal-s-show");
      }
    }
  }
});
