// ************************************************Login Form
function showLoginModal() {
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".loginform").classList.add("showloginform");
}

function closeLoginModal() {
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".loginform").classList.remove("showloginform");
}

var btnlogin = document.querySelector(".loginbtn");
btnlogin.addEventListener("click", showLoginModal);

var btnCloselLogin = document.querySelector(".crossbtn");
btnCloselLogin.addEventListener("click", closeLoginModal);


// ************************************************Registration form

function showRegModal() {
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".regform").classList.add("showloginform");
}

function closeRegModal() {
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".regform").classList.remove("showloginform");
}

var btnlogin = document.querySelector(".regbtn");
btnlogin.addEventListener("click", showRegModal);

var btnCloselLogin = document.querySelector(".crossbtn");
btnCloselLogin.addEventListener("click", closeRegModal);

function closeRegOpenlog(){
    closeRegModal();
    showLoginModal();
}