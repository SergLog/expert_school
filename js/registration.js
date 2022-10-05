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
const modalLink = document.querySelector(".success-modal a.modal-link");

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
// const regSendButton = document.querySelector("#reg-fields button");


// regSendButton.addEventListener("click", (event) => {
//     // event.preventDefault(); 
//     const form = document.querySelector("#reg-fields");

//     if (form.checkValidity()) {
//         event.preventDefault();             
//         // window.location = 'registration.html';
//         authTab.click();
//         modalLink.click();
//         // setTimeout(() => modalLink.click(), 1000);  
//     }   
//     // modalLink.click();         
// });
// Откртие модалки


function checkFields(obj) {
    let result = true;

    function setInvalidField(field) {
        $(field).parent().addClass('error');
        if (result) result = false;
    }

    function setValidField(field) {
        $(field).parent().removeClass('error');
    }

    obj.find('input[type="text"]').each(function () {
        let id = $(this)[0].id;
        let val = $(this).val();
        let el = $(this);
        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        $(this).removeClass('error');

        if (id === 'fio' || id === 'name' || id === 'lastName' || id === 'town' || id === 'job' || id === 'dropdown') {
            val.length < 1 ? setInvalidField(el) : setValidField(el);
        }
        if (id === 'email') {
            emailRegex.test(String(val).toLowerCase()) ? setValidField(el) : setInvalidField(el);
        }
        if (id === 'tel') {
            val.length <= 11 ? setInvalidField(el) : setValidField(el);
        }
    });

    obj.find('#dropdown').each(function () {
        let id = $(this)[0].id;
        let val = $(this).val();
        let el = $(this).parent();
        $(this).removeClass('error');

        if (id === 'dropdown') {
            val == null ? setInvalidField(el) : setValidField(el);
        }
    });

    if(!obj.find('#agreement')[0].checked) {
        result = false;
        alert('Подвердите согласие на обработку')
    }   

    return result;
}

function submitForm(obj) {
    if (checkFields(obj)) sendMessage(obj);
};

function sendMessage(formObj) {
    const msg = formObj.serialize();
    const formName = formObj[0].id;
    $.ajax({
        type: 'POST',
        url: '../PHPMailer.php',
        data: msg,
        success: function (data) {
            if (data.status === 'success') {
                
            }
        },
        error: function (xhr, str) {
            authTab.click();
            modalLink.click();
            console.log('Возникла ошибка: ' + xhr.responseCode);
        }
    });
}

$('body').on('submit', '#reg-fields', function (e) {
    e.preventDefault();
    submitForm($('#reg-fields'));
});

$('#reg-fields input[type="text"]').each(function () {
    $(this).on("input", function () {
        $(this).parent().removeClass('error');
    });
});

$('#reg-fields #dropdown').each(function () {
    $(this).on("change", function () {
        $(this).parent().parent().removeClass('error');
    });
});