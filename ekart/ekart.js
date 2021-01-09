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
    setTimeout('ligin()', 1000);
}
function searchBar() {
    
}
function reg() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    if (pass1 == pass2) {
        alert("Registration successful.");
    }
    else {
        alert("Passwords Dont Match!")
    }
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
