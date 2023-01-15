/*Нахождение всех нужных для взаимодействия элементов*/
const popup = document.querySelector(".popup");
const menuButton = document.querySelector(".header-navigation__menu");
const menuImg = document.querySelector(".header-navigation__menu-img")

const mobileList = document.querySelectorAll(".popup__list");
const mobileMenuList = document.querySelectorAll(".popup__button");

/*Открытие попапа*/
function openPopup(item) {
    item.classList.toggle("popup_opened");
}

function openMobilePopup(item) {
    item.classList.toggle("popup__list-items_opened");
}

menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("header-navigation__menu_opened");
    openPopup(popup)
})
