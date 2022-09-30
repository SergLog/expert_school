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

authTab.click();
// Переключение между табами

// Валидации формы регистрации
// const invalid = document.querySelector(".registration-tabs .tab.reg");
// Валидации формы регистрации

// Откртие модалки
const regSendButton = document.querySelector("#reg-fields button");
const regModal = document.querySelector("#reg-fields .registration-modal");

regSendButton.addEventListener("click", (event) => {
    const form = document.querySelector("#reg-fields");
    
    if (form.checkValidity()) {
        event.preventDefault();
        
        window.location = 'registration.html';
        // const authTab = document.querySelector(".registration-tabs .tab.auth");
        // setTimeout(() => {
        //     const authTab = document.querySelector(".registration-tabs .tab.auth");
        //     authTab.click(); 
        //   }, "1000")
        // regModal.classList.add("show");
               
    } 
});
// Откртие модалки