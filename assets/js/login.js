

function showLoginModal() {
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".loginform").classList.add("showloginform");
}

function closeLoginModal() {
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".loginform").classList.remove("showloginform");
}

var btnlogin = document.querySelector(".loginbtn");
if (btnlogin) {
    btnlogin.addEventListener("click", showLoginModal);
} else {
    console.log('here btnlogin')
}

var btnCloselLogin = document.querySelector(".crossbtn");
if (btnCloselLogin) {
    btnCloselLogin.addEventListener("click", closeLoginModal);
}


// ************************************************Registration form

function showRegModal() {
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".regform").classList.add("showloginform");
}

function closeRegModal() {
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".regform").classList.remove("showloginform");
}



var btnreg = document.querySelector(".regbtn");
if (btnreg) {
    btnreg.addEventListener("click", showRegModal);
}

var btnCloselreg = document.querySelector(".crossbtn");
if (btnCloselreg) {
    btnCloselreg.addEventListener("click", closeRegModal);
}

function closeRegOpenlog() {
    closeRegModal();
    showLoginModal();
}

// ***************************registration and login validtions

const sendData = (sRate, count, userObj) => {
    if (count === sRate) {
        if (localStorage.getItem(userObj.emailVal)) {
            alert("Already registered!!!");
        } else {

            localStorage.setItem(userObj.emailVal, JSON.stringify(userObj));
            localStorage.setItem("products", JSON.stringify({}));
            localStorage.setItem("wishCart", JSON.stringify({}));
            localStorage.setItem("isSubscribed", "false");
            swal(`Welcome! ${userObj.usernameVal}`, "Registration Successfull", "success");
            closeRegModal();
        }
    }
}

const regSuccess = (userObj) => {
    const regCon = document.getElementsByClassName("regInputBar");
    let count = regCon.length - 1;
    for (var i = 0; i < regCon.length; i++) {
        if (regCon[i].className === "regInputBar success") {
            var sRate = 0 + i;
            sendData(sRate, count, userObj);
        }
        else {
            return false;
        }
    }
}


const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}



const validate = (username, email, password, cpassword) => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal === "") {
        setErrorMsg(username, "username can not be blank");
    }
    else if (usernameVal.length <= 2) {
        setErrorMsg(username, "username must be min 3 char");
    }
    else {
        setSuccessMsg(username);
    }


    if (emailVal === "") {
        setErrorMsg(email, "email can not be blank");
    }
    else if (!isEmail(emailVal)) {
        setErrorMsg(email, "email is not valid");
    }
    else {
        setSuccessMsg(email);
    }


    if (passwordVal === "") {
        setErrorMsg(password, "password can not be blank");
    }
    else if (passwordVal.length <= 5) {
        setErrorMsg(password, "Minmium 6 char");
    }
    else {
        setSuccessMsg(password);
    }

    if (cpasswordVal === "") {
        setErrorMsg(cpassword, "Confirm password can not be blank");
    }
    else if (cpasswordVal != passwordVal) {
        setErrorMsg(cpassword, "Password not matching");
    }
    else {
        setSuccessMsg(cpassword);
    }

    let userObj = {
        usernameVal: usernameVal,
        emailVal: emailVal,
        passwordVal: passwordVal
    }

    regSuccess(userObj);
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    formControl.className = "regInputBar error";
    const small = formControl.querySelector('small');
    small.innerText = errormsgs;
}


function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "regInputBar success";
}


const registrationForm = document.getElementById("form");
const loginForm = document.getElementById("loginform");
const logoutBtn = document.getElementById("logoutbtn");


updateUI();

if (registrationForm) {
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const cpassword = document.getElementById("cpassword");
        validate(username, email, password, cpassword);
    });
}
else {
    console.log("error registrationForm")
}

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;


        const storedUserData = localStorage.getItem(email);
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            if (userData.passwordVal === password) {

                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("loggedInUser", userData.usernameVal);

                

                updateUI();
                alert("Login successful!");
                location.reload();
            } else {
                alert("Invalid password! Please try again.");
            }
        } else {
            alert("Username not found! Please register first.");
        }
    });
}


if (logoutBtn) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("loggedInUser");
            updateUI();

            // Do empty cart for login User
            // localStorage.setItem("products", JSON.stringify({}));

            alert("Logout successful!");
            closeRegModal();
            btnreg.addEventListener("click", showRegModal);
            location.reload();
        });
    }
}
else {
    console.log("Log out error...");
}


function updateUI() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (isLoggedIn) {
        var loginBtnElement = document.getElementById("loginuser");
        if (loginBtnElement) {
            loginBtnElement.innerText = loggedInUser;
        }
        var logoutBtnElement = document.getElementById("logOut");
        if (logoutBtnElement) {
            logoutBtnElement.innerText = "Logout";
        }


        var divElement = document.querySelector('.regbtn');
        if (divElement) {
            divElement.classList.remove('regbtn');
        }


        if (loginForm) {
            loginForm.style.display = "none";
        }

        const overlayElement = document.querySelector(".overlay");
        if (overlayElement) {
            overlayElement.style.display = "none";
        }

    } else {

        if (registrationForm) {
            registrationForm.style.display = "block";
        }
        if (loginForm) {
            loginForm.style.display = "block";
        }
    }

}

