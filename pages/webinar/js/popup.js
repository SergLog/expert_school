const registrationModalLink = document.querySelector(".registration-modal a.modal-link");
const modalLink = document.querySelector(".modal a.modal-link");
const modalText = document.querySelector(".modal #modal p");


function openRegistrationModal() {
    registrationModalLink.click();
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
        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        $(this).removeClass('error');

        if (id === 'surname' || id === 'name' || id === 'name' || id === 'town') {
            val.length < 1 ? setInvalidField(el) : setValidField(el);
        }
        if (id === 'email') {
            emailRegex.test(String(val).toLowerCase()) ? setValidField(el) : setInvalidField(el);
        }
        if (id === 'tel') {
            val.length <= 11 ? setInvalidField(el) : setValidField(el);
        }
    });

    obj.find('select').each(function () {
        let id = $(this)[0].id;
        let val = $(this).val();
        let el = $(this).parent();
        $(this).removeClass('error');

        // if (id === 'dropdown') {
            val == null ? setInvalidField(el) : setValidField(el);
        // }
    });

    // if(!obj.find('#agreement')[0].checked && obj.find('.error').length == 0) {
    //     result = false;
    //     alert('Подвердите согласие на обработку')
    // }   

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
            modalText.innerHTML = 'Пользователь с таким e-mail уже зарегистрирован';
            modalText.innerHTML = 'Ссылка для авторизации отправлена на ваш e-mail ';
            modalText.innerHTML = 'Пользователь с таким e-mail не зарегистрирован';
            modalText.innerHTML = 'Вы успешно прошли регистрацию.<br>На ваш e-mail отправлено письмо<br>с подтверждением.';
            modalLink.click();
            console.log('Возникла ошибка: ' + xhr.responseCode);
        }
    });
}

$('body').on('submit', '#registration-modal', function (e) {
    e.preventDefault();
    submitForm($('#registration-modal'));
});

$('#registration-modal input[type="text"]').each(function () {
    $(this).on("input", function () {
        $(this).parent().removeClass('error');
    });
});

$('#registration-modal select').each(function () {
    $(this).on("change", function () {
        $(this).parent().parent().removeClass('error');
    });
});