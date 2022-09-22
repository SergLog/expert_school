// Открытие/закрытие левого меню
const burgerMenuIcon = document.querySelector("nav .nav-burger-icon");
const closeMenuIcon = document.querySelector("nav .close-menu");
const navMenu = document.querySelector("nav");

burgerMenuIcon.addEventListener("click", () => {
    navMenu.classList.add("expand");
});

closeMenuIcon.addEventListener("click", () => {
    navMenu.classList.remove("expand");
});
// Открытие/закрытие левого меню

// Открытие мобильного меню
const tabletBurgerMenuIcon = document.querySelector(".header-burger-icon");
const tabletCloseMenuIcon = document.querySelector("nav.tablet-nav-menu .close-menu");
const tabletNavMenu = document.querySelector("nav.tablet-nav-menu");
const mainContent = document.querySelector(".content-container");

tabletBurgerMenuIcon.addEventListener("click", () => {
    tabletNavMenu.classList.add("tablet-expand");
    mainContent.classList.add("tablet-expand");
});

tabletCloseMenuIcon.addEventListener("click", () => {
    tabletNavMenu.classList.remove("tablet-expand");
    mainContent.classList.remove("tablet-expand");
});

// Переключение между табами
const regTab = document.querySelector(".registration-tabs .tab.reg");
const authTab = document.querySelector(".registration-tabs .tab.auth");
const regFields = document.querySelector(".reg-fields");
const authFields = document.querySelector(".auth-fields");

regTab.addEventListener("click", () => {
    regTab.classList.add("active");
    authTab.classList.remove("active");
    authFields.classList.remove("active");
    regFields.classList.add("active");
});

authTab.addEventListener("click", () => {
    authTab.classList.add("active");
    regTab.classList.remove("active");
    authFields.classList.add("active");
    regFields.classList.remove("active");
});

regTab.click();
// Переключение между табами