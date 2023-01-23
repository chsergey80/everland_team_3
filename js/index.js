/*Нахождение всех нужных для взаимодействия элементов*/
const popup = document.querySelector(".popup");
const menuButton = document.querySelector(".logo-navigation__menu");
const menuImg = document.querySelector(".logo-navigation__menu-img")
/*Нахождение элементов для мобильнеых устройств*/
const mobileMenuProject = document.querySelector(".popup__list-project");
const menuProject = mobileMenuProject.querySelector(".popup__button");
const menuProjectBlock = mobileMenuProject.querySelector(".popup__list-items");
const mobileMenuPeople = document.querySelector(".popup__list-people");
const menuPeople = mobileMenuPeople.querySelector(".popup__button");
const menuPeopleBlock = mobileMenuPeople.querySelector(".popup__list-items");
const mobileMenuServices = document.querySelector(".popup__list-services");
const menuServices = mobileMenuServices.querySelector(".popup__button");
const menuServicesBlock = mobileMenuServices.querySelector(".popup__list-items")

/*Открытие попапа*/
function openPopup(item) {
    item.classList.toggle("popup_opened");
}

/*Закрытие попапа*/
function closePopup(item) {
  item.classList.remove("popup_opened");
}

function openMobilePopup(item) {
    item.classList.toggle("popup__list-items_opened");
}

function openMenuMobile(item) {
    item.classList.toggle("popup__button_opened");
}

function openMenuMobileBlock(item){
    item.classList.toggle("popup__list-items_opened");
}

menuButton.addEventListener("mouseover", function () {
    menuButton.classList.toggle("logo-navigation__menu_opened");
    openPopup(popup);
})

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("logo-navigation__menu_opened");
  closePopup(popup);
})

menuProject.addEventListener("click", function (){
    openMenuMobile(menuProject);
    openMenuMobileBlock(menuProjectBlock);
})

menuPeople.addEventListener("click", function (){
    openMenuMobile(menuPeople);
    openMenuMobileBlock(menuPeopleBlock);
})

menuServices.addEventListener("click", function (){
    openMenuMobile(menuServices);
    openMenuMobileBlock(menuServicesBlock);
})


//АККОРДЕОН
const accordion = document.querySelectorAll(".button-accordeon");
let buttons = [accordion[0], accordion[1], accordion[2], accordion[3], accordion[4], accordion[5]];

buttons.forEach(function(item){
  item.addEventListener("click", function(){
    let text = this.nextElementSibling;
    text.classList.toggle("accordeon__text_visible");
    this.classList.toggle("button-accordeon_active");
  });
});

function changeNameTitleDir(info) {
  const titleDir = document.querySelector(info);
  if (info == '#ourdirects'){
    titleDir.textContent = 'В каких направлениях мы работаем?';
  }else{
    titleDir.textContent = 'Главное в нашей работе';
  }
}

if (
  document.documentElement.clientWidth <= 1439
) {
  changeNameTitleDir('#ourdirects');
  changeNameTitleDir('#inwork');  
}