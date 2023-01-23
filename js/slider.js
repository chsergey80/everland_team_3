const slide = document.querySelectorAll(".everland-slides");
const projectsSlide = document.querySelectorAll(".projects-slider");
const lastSlide = [].slice.call(slide).pop();
const lastProjectsSlide = [].slice.call(projectsSlide).pop();


/*Проходим по массиву слайдов про Everland*/
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

/*Проходим по массиву слайдов про специальные проекты*/
projectsSlide.forEach(function (slides) {
    // Вешаем событие клик
    let preProjectsSlide = slides.previousElementSibling;
    slides.querySelector(".button-slider__back").addEventListener("click", function () {
        buttonBackItemProjects(slides, preProjectsSlide);
    })
    slides.querySelector(".button-slider__forward").addEventListener("click", function () {
        buttonForwardItemProjects(slides);
    })
})


/*Функции слистывания слайдов про Everland*/
function buttonForwardItem(item) {
    const width = document.documentElement.clientWidth;
    if (item != lastSlide) {
        if (width >= "1440") {
            item.style.marginLeft = "-1360px";
        } else if (width <= "1439" && width >= "768") {
            item.style.marginLeft = "-688px";
        } else {
            item.style.marginLeft = "-304px";
        }
    } else {
        if (width >= "1440") {
            item.style.marginLeft = "40px";
        } else if (width <= "1439" && width >= "768") {
            item.style.marginLeft = "0px";
        } else {
            item.style.marginLeft = "0px";
        }
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


/*Функции слистывания слайдов про специальные проекты*/
function buttonForwardItemProjects(item) {
    const width = document.documentElement.clientWidth;
    if (item != lastProjectsSlide) {
        if (width >= "1440") {
            item.style.marginLeft = "-1330px";
        } else if (width <= "1439" && width >= "768") {
            item.style.marginLeft = "-658px";
        } else {
            item.style.marginLeft = "-278px";
        }
    } else {
        if (width >= "1440") {
            item.style.marginLeft = "30px";
        } else if (width <= "1439" && width >= "768") {
            item.style.marginLeft = "30px";
        } else {
            item.style.marginLeft = "24px";
        }
    }
}

function buttonBackItemProjects(item, pre) {
    const width = document.documentElement.clientWidth;
    if (width >= "1440") {
        item.style.marginLeft = "30px";
        pre.style.marginLeft = "30px";
    } else if (width <= "1439" && width >= "768") {
        item.style.marginLeft = "30px";
        pre.style.marginLeft = "30px";
    }
    else {
        item.style.marginLeft = "24px";
        pre.style.marginLeft = "24px";
    }
}