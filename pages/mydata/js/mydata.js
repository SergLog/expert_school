

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
            alert('Успех!')
            console.log('Возникла ошибка: ' + xhr.responseCode);
        }
    });
}

$('body').on('submit', '#mydata', function (e) {
    e.preventDefault();
    submitForm($('#mydata'));
});

$('#mydata input[type="text"]').each(function () {
    $(this).on("input", function () {
        $(this).parent().removeClass('error');
    });
});

$('#mydata #dropdown').each(function () {
    $(this).on("change", function () {
        $(this).parent().parent().removeClass('error');
    });
});