const slide = document.querySelectorAll(".everland-slides");
const projectsSlide = document.querySelectorAll(".projects")



slide.forEach(function (slides) {
    // Вешаем событие клик
    let preSlide = slides.previousElementSibling;
    slides.querySelector(".button-slider__back").addEventListener("click", function () {
        buttonBackItem(slides, preSlide);
    })
    slides.querySelector(".button-slider__forward").addEventListener("click", function () {
        buttonForwardItem(slides);
    })
})

function buttonForwardItem(item) {
    const width = document.documentElement.clientWidth;
    if (width >= "1440") {
        item.style.marginLeft = "-1360px";
    } else if (width <= "1439" && width >= "768") {
        item.style.marginLeft = "-688px";
    } else {
        item.style.marginLeft = "-304px";
    }
}

function buttonBackItem(item, pre) {
    const width = document.documentElement.clientWidth;
    if (width >= "1440") {
        item.style.marginLeft = "40px";
        pre.style.marginLeft = "40px";
    } else {
        item.style.marginLeft = "0px";
        pre.style.marginLeft = "0px";
    } 
}
