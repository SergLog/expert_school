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
});// Открытие мобильного меню

const sendPollButtom = document.querySelector("main .webinars-poll .send-button");
const webinarPollEnd = document.querySelector("main .webinars-poll-end");
const webinarPoll = document.querySelector("main .webinars-poll");

sendPollButtom.addEventListener("click", () => {
    webinarPollEnd.classList.add("show");
    webinarPoll.classList.add("hide");
});


// Открытие/закрытие подробной информации о спикере
const personInfoBtn = document.querySelectorAll(".webinars-speakers-person-more-btn");

personInfoBtn.forEach(
    function(btn){
        btn.addEventListener("click", function(){
            this.previousElementSibling.classList.toggle('active');
        });
    }
)
// Открытие/закрытие подробной информации о спикере


// Открытие/закрытие  видеонавигации
const videoNavBtn = document.querySelectorAll(".webinars-speakers-videonav-more");

videoNavBtn.forEach(
    function(btn){
        btn.addEventListener("click", function(){
            this.previousElementSibling.classList.toggle('full');
        });
    }
)
// Открытие/закрытие  видеонавигации





// Слайдер
$(document).ready(function(){
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinity: true,
    });

    var sliderMain = $('.recomendations-container');

    console.log($('.recomendations-container'));
  
    sliderMain.slick({
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            centerMode: false,
            slidesToScroll: 1,
            variableWidth: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.5,
            centerMode: false,
            slidesToScroll: 1,
            variableWidth: true
          }
        }
      ]
    });

});


// $(document).ready(function () {

    
  
//   });