/*Переменные для слайдера Everland*/
let leftSliderEverland = 0; //смещение от левого края
const everlandSection = document.querySelector(".about-everland");
const everlandSlider = document.querySelector(".about-everland__container");
const everlandSliderBack = everlandSection.querySelector(".button-slider__back");
const everlandSliderForward = everlandSection.querySelector(".button-slider__forward");
const everlendSliderNum = document.querySelector(".specialization__num");

/*Переменные для слайдера Projects*/
let leftSliderProjects = 0; //смещение от левого края
const projectSection = document.querySelector(".special-projects");
const projectsSlider = document.querySelector(".special-projects__container");
const projectsSliderBack = projectSection.querySelector(".button-slider__back");
const projectsSliderForward = projectSection.querySelector(".button-slider__forward");


/*Реализация работы слайдера Everland*/
everlandSliderForward.addEventListener("click", function () {
    const width = document.documentElement.clientWidth;
    if (width >= "1440") {
        leftSliderEverland += 1400;
        if (leftSliderEverland > 7000) {
            leftSliderEverland = 0;
        }
        everlandSlider.style.left = -leftSliderEverland + "px";
    } else if (width <= "1439" && width >= "768") {
        leftSliderEverland += 688;
        if (leftSliderEverland > 3440) {
            leftSliderEverland = 0;
        }
        everlandSlider.style.left = -leftSliderEverland + "px";
    } else {
        leftSliderEverland += 304;
        if (leftSliderEverland > 1520) {
            leftSliderEverland = 0;
        }
        everlandSlider.style.left = -leftSliderEverland + "px";
    }
});

everlandSliderBack.addEventListener("click", function () {
    const width = document.documentElement.clientWidth;
    if (width >= "1440") {
        leftSliderEverland -= 1400;
        if (leftSliderEverland < 0) {
            leftSliderEverland = 7000;
        }
        everlandSlider.style.left = -leftSliderEverland + "px";
    } else if (width <= "1439" && width >= "768") {
        leftSliderEverland -= 688;
        if (leftSliderEverland < 0) {
            leftSliderEverland = 3440;
        }
        everlandSlider.style.left = -leftSliderEverland + "px";
    } else {
        leftSliderEverland -= 304;
        if (leftSliderEverland < 0) {
            leftSliderEverland = 1520;
        }
        everlandSlider.style.left = -leftSliderEverland + "px";
    }
});

/*Реализация работы слайдера Projects*/
projectsSliderForward.addEventListener("click", function () {
    const width = document.documentElement.clientWidth;
    if (width >= "1440") {
        leftSliderProjects += 1360;
        if (leftSliderProjects > 2720) {
            leftSliderProjects = 0;
        }
        projectsSlider.style.left = -leftSliderProjects + "px";
    } else if (width <= "1439" && width >= "768") {
        leftSliderProjects += 688;
        if (leftSliderProjects > 1376) {
            leftSliderProjects = 0;
        }
        projectsSlider.style.left = -leftSliderProjects + "px";
    } else {
        leftSliderProjects += 300;
        if (leftSliderProjects > 600) {
            leftSliderProjects = 0;
        }
        projectsSlider.style.left = -leftSliderProjects + "px";
    }
});

projectsSliderBack.addEventListener("click", function () {
    const width = document.documentElement.clientWidth;
    if (width >= "1440") {
        leftSliderProjects -= 1360;
        if (leftSliderProjects < 0) {
            leftSliderProjects = 2720;
        }
        projectsSlider.style.left = -leftSliderProjects + "px";
    } else if (width <= "1439" && width >= "768") {
        leftSliderProjects -= 688;
        if (leftSliderProjects < 0) {
            leftSliderProjects = 1376;
        }
        projectsSlider.style.left = -leftSliderProjects + "px";
    } else {
        leftSliderProjects -= 300;
        if (leftSliderProjects < 0) {
            leftSliderProjects = 600;
        }
        projectsSlider.style.left = -leftSliderProjects + "px";
    }
});