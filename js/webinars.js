const rightButtons = Array.from(document.getElementsByClassName('next'));
const leftButtons = Array.from(document.getElementsByClassName('prev'));
const containers = Array.from(document.getElementsByClassName('recomendations-container'));

let index = 0;
for (const rightButton of rightButtons) {
    const container = containers[index];
    rightButton.addEventListener("click", function () {
        // container.scrollLeft += 543;
        container.scrollLeft += 255;
    });
    index++;
}

index = 0;
for (const leftButton of leftButtons) {
    const container = containers[index];
    leftButton.addEventListener("click", function () {
        // container.scrollLeft -= 543;
        container.scrollLeft -= 255;
    });
    index++;
}

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