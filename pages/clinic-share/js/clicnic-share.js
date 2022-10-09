// Открытие/закрытие левого меню
const burgerMenuIcon = document.querySelector("nav .nav-burger-icon");
const closeMenuIcon = document.querySelector("nav .close-menu");
const navMenu = document.querySelector("nav");
const desktopSearch = document.querySelector("nav .search-icon");
desktopSearch.addEventListener("click", () => {
    navMenu.classList.add("expand");
});

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
const tabletSearch = document.querySelector(".header-search-icon");

tabletSearch.addEventListener("click", () => {
    tabletNavMenu.classList.add("tablet-expand");
    mainContent.classList.add("tablet-expand");
});

tabletBurgerMenuIcon.addEventListener("click", () => {
    tabletNavMenu.classList.add("tablet-expand");
    mainContent.classList.add("tablet-expand");
});

tabletCloseMenuIcon.addEventListener("click", () => {
    tabletNavMenu.classList.remove("tablet-expand");
    mainContent.classList.remove("tablet-expand");
});
// Открытие мобильного меню

var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
  ]
  
  function validFileType(file) {
    for(var i = 0; i < fileTypes.length; i++) {
      if(file.type === fileTypes[i]) {
        return true;
      }
    }
  
    return false;
  }
  
function fileUpload1() {
    document.getElementById("file1").click();
};

document.getElementById("file1").addEventListener("change", (event) => {
    let text = document.querySelector('.ui-upload-button-container.file1 button');
    text.innerHTML = document.getElementById("file1").files[0].name;

    
});