function login() {
    var email = document.getElementById("user_name").value;
    var pass = document.getElementById("pass").value;
    if (email == "" || pass == "") {

    }
    else if (email == "amanvyas720@gmail.com" && pass == "12345") {

        window.location = "ekart_index.html";
    }
    else {
        alert("Invalid Email/Password.");
    }

}
function email_validate() {

}
function searchBar() {

}
function validate(psw, patern) {
    if (psw.match(patern)) {
        return true
    }
    else {
        false
    }
}

function reg() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var em = document.getElementById("e-mail").value;
    var pat = /([a-z\d]+)@([gmail yahoo hotmail reddit .ac]+).([com in eu edu au])/;
    var p_pat1 = /[A-Z]+/;
    var p_pat2 = /[a-z]+/;
    var p_pat3 = /[!@#$%^&*]/;
    var p_pat4 = /([a-z\d]+)([A-Z\d]+)([!@#$%^&*?><~])/
    if (em.match(pat)) {
        document.getElementById('e-pop').style.display = 'block';
        document.getElementById('epop-p').innerText = 'email address is valid';
        document.getElementById('epop-p').style.color = 'green';
        if (validate(pass1, p_pat1)) {
            document.getElementById('Ucase').style.color = 'green';
        }
        else {
            document.getElementById('Ucase').style.color = 'red';
        }
        if (validate(pass1, p_pat2)) {
            document.getElementById('Lcase').style.color = 'green';
        }
        else {
            document.getElementById('Lcase').style.color = 'red';
        }
        if (validate(pass1, p_pat3)) {
            document.getElementById('sp_char').style.color = 'green';
        }
        else {
            document.getElementById('sp_char').style.color = 'red';
        }
        if (pass1.length >= 8 && pass1.length <= 15) {
            document.getElementById('len').style.color = 'green';
        }
        else {
            document.getElementById('len').style.color = 'red';
        }
        if (pass1.match(p_pat4) && pass1.length >= 8 && pass1.length <= 15) {
            if (pass1 == pass2) {
                alert('Registration Successful.');
            }
            else {
                alert('Passwords Dont Match.')
            }
        }
    }
    else {
        document.getElementById('e-pop').style.display = 'block';
        document.getElementById('epop-p').innerText = 'email address is Invalid';
        document.getElementById('epop-p').style.color = 'red';
    }
    setTimeout("alert('Registration Successful.')", 5000)
}
function show() {
    var p = document.getElementById('pass');
    if (p.type == "password") {
        p.type = "text";
        document.getElementById('sh_image').src = "images/hide.png"
    }
    else {
        p.type = "password";
        document.getElementById('sh_image').src = "images/show.png"
    }
}
function searchBar() {
    var bar = document.getElementById('search_feild')
}
function f() {
    document.getElementById("fname").focus();
}
function showHdd() {
    var hdd = document.getElementById('check1');

    if (hdd.checked == true) {
        document.getElementById('hddDrop').style.display = 'block';
    }
    else {
        document.getElementById('hddDrop').style.display = 'none';
    }
}
function showSSD() {
    var ssd = document.getElementById('check2');
    if (ssd.checked == true) {
        document.getElementById('ssdDrop').style.display = 'block';
    }
    else {
        document.getElementById('ssdDrop').style.display = 'none';
    }
}
function dropdown(id) {
    var div = document.getElementById(id);
    if (div.style.display == 'none') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }

}