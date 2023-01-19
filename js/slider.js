const buttonsBack = document.querySelectorAll(".button-slider__back");
const buttonsForward = document.querySelectorAll(".button-slider__forward");
const test = document.querySelector(".about-everland");



buttonsBack.forEach(function (btn) {
    // Вешаем событие клик
    btn.addEventListener('click', function () {
        buttonBackItem(test)
    })
})

buttonsForward.forEach(function (btn) {
    // Вешаем событие клик
    btn.addEventListener('click', function () {
        buttonForwardItem(test);
    })
})



function buttonForwardItem(item) {
    item.style.left = "-1400px";
}

function buttonBackItem(item) {
    item.style.left = "0px";
}