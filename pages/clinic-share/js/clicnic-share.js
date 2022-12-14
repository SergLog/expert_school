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
    for (var i = 0; i < fileTypes.length; i++) {
        if (file.type === fileTypes[i]) {
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


const doctors = document.querySelector(".site-intro .doctors-logo-container");
const siteTitle = document.querySelector(".site-intro .site-title-container");
const content = document.querySelector(".clinical-share-content");
const thanks = document.querySelector(".clinic-share-thanks");
const upButton = document.querySelector("footer a.up-button");

function publishCase() {
    doctors.style.display = 'none';
    siteTitle.style.display = 'none';
    content.style.display = 'none';
    thanks.style.display = 'flex';
    upButton.click();
};


const visit2 = document.querySelector(".visit2 .icon");
const visit2Container = document.querySelector(".visit2-container");
const visit3 = document.querySelector(".visit3 .icon");
const visit3Container = document.querySelector(".visit3-container");

visit2Container.style.display = "none";
visit3Container.style.display = "none";

visit2.addEventListener("click", () => {
    if (visit2Container.style.display === "none") {
        visit2Container.style.display = "block";
        visit2Container.classList.add("active-container");
        visit2.classList.add("minus");
    } else {
        visit2Container.style.display = "none";
        visit2.classList.remove("minus");
        visit2Container.classList.remove("active-container");
    }
});

visit3.addEventListener("click", () => {
    if (visit3Container.style.display === "none") {
        visit3Container.style.display = "block";
        visit3.classList.add("minus");
        visit3Container.classList.add("active-container");
    } else {
        visit3Container.style.display = "none";
        visit3.classList.remove("minus");
        visit3Container.classList.remove("active-container");
    }
});

const visit2Text = document.querySelector(".visit2 p");
const visit3Text = document.querySelector(".visit3 p");

const visit2Errors = document.querySelector(".visit2 error");
const visit3Errors = document.querySelector(".visit3 error");

function checkVisits() {
    let errors2 = document.querySelector(".visit2-container .error");
    if (errors2 != null) {
        visit2Text.style.color = 'red';
    }
    else {
        visit2Text.style.color = 'inherit';
    }

    let errors3 = document.querySelector(".visit3-container .error");
    if (errors3 != null) {
        visit3Text.style.color = 'red';
    }
    else {
        visit3Text.style.color = 'inherit';
    }
}


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
        $(this).removeClass('error');

        numnberRegex = /^[0-9]+$/;

        if (id === 'name' || id === 'male' || id === 'female' || id === 'complaints' || id === 'diagnos' || id === 'dropdown') {
            val.length < 1 ? setInvalidField(el) : setValidField(el);
        }

        if (id === 'age-year') {
            numnberRegex.test(val) && val.length < 5 ? setValidField(el) : setInvalidField(el);
        }        

        // if(!obj.find('#male')[0].checked && obj.find('.error').length == 0) {
        //     result = false;
        //     alert('Подвердите согласие на обработку')
        // }  

        // if (id === 'age-month') {
        //     val.length == 0 || (numnberRegex.test(val) && val.length > 0 && val.length < 13 ) ? setValidField(el) : setInvalidField(el);
        // }
        

    });

    obj.find('div.ui-textarea').each(function () {
        let id = $(this)[0].id;
        let text = $(this)[0].innerText;
        let el = $(this);
        $(this).removeClass('error');

        if (id === 'anamnez' || id === 'diagnostic' || id === 'recommend' || id === 'analysis' || id === 'diagnos' || id === 'dropdown') {
            text.length < 1 ? setInvalidField(el) : setValidField(el);
        }
    });

    // obj.find('#education').each(function () {
    //     let id = $(this)[0].id;
    //     let val = $(this).val();
    //     let el = $(this).parent();
    //     $(this).removeClass('error');
    //         val == null ? setInvalidField(el) : setValidField(el);            
    // });

    // obj.find('#maritalstatus').each(function () {
    //     let id = $(this)[0].id;
    //     let val = $(this).val();
    //     let el = $(this).parent();
    //     $(this).removeClass('error');            
    //         val == null ? setInvalidField(el) : setValidField(el);            
    // });

    checkVisits();
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
            doctors.style.display = 'none';
            siteTitle.style.display = 'none';
            content.style.display = 'none';
            thanks.style.display = 'flex';
            upButton.click();

            console.log('Возникла ошибка: ' + xhr.responseCode);
        }
    });
}

$('body').on('submit', '#fields', function (e) {
    e.preventDefault();
    submitForm($('#fields'));
});

$('#input[type="text"]').each(function () {
    $(this).on("input", function () {
        $(this).parent().removeClass('error');
    });
});

$('#dropdown').each(function () {
    $(this).on("change", function () {
        $(this).parent().parent().removeClass('error');
    });
});


