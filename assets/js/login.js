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

var btnreg = document.querySelector(".regbtn");
btnreg.addEventListener("click", showRegModal);

var btnCloselreg = document.querySelector(".crossbtn");
btnCloselreg.addEventListener("click", closeRegModal);

function closeRegOpenlog() {
    closeRegModal();
    showLoginModal();
}

// ***************************registration and login validtions

//  const computedStyles = document.getElementById("form");
// const form = window.getComputedStyle(computedStyles);

// const form = document.getElementById("form");


// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     validate();
// })

const sendData = (sRate, count, userObj) => {
    if (count === sRate) {
        // alert("Registration Successfull");
        if (localStorage.getItem(userObj.emailVal)) {
            alert("Already registered!!!");
        } else {
            // Store the registration information in localStorage
            localStorage.setItem(userObj.emailVal, JSON.stringify(userObj));
            alert("Registration successful!");
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
            console.log(sRate);
            sendData(sRate, count, userObj);
        }
        else {
            return false;
        }
    }
}

// More email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}


// Define the validate function

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




document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("form");
    const loginForm = document.getElementById("loginform");
    const logoutBtn = document.getElementById("logoutbtn");

    // Check if the user is already logged in and update the UI accordingly
    console.log("above the update UI");
    updateUI();

    // Event listener for the registration form
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const cpassword = document.getElementById("cpassword");
        validate(username, email, password, cpassword);
    });

    // Event listener for the login form
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // Perform login actions (e.g., validate credentials, check against stored data, etc.)
        const storedUserData = localStorage.getItem(email);
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            if (userData.passwordVal === password) {
                // Store the login completion status in localStorage
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("loggedInUser", userData.usernameVal);

                // Update the UI after login
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

    // Event listener for the logout button
    if (logoutBtn) {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            logoutBtn.addEventListener("click", function () {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("loggedInUser");
                updateUI();
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

    // Function to update the UI based on the login status
    function updateUI() {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        const loggedInUser = localStorage.getItem("loggedInUser");

        if (isLoggedIn) {
            var loginBtnElement = document.getElementById("loginuser");
            loginBtnElement.innerText = loggedInUser;

            var logoutBtnElement = document.getElementById("logOut");
            logoutBtnElement.innerText = "Logout";

            // btnreg.removeEventListener("click", showRegModal);
            var divElement = document.querySelector('.regbtn');
            divElement.classList.remove('regbtn');


            loginForm.style.display = "none";
            // logoutBtn.style.display = "block";
            document.querySelector(".overlay").classList.remove("showoverlay");
            // logoutBtn.style.display = "block";
        } else {
            // Show the registration and login forms and hide the logout button
            registrationForm.style.display = "block";
            loginForm.style.display = "block";
            // logoutBtn.style.display = "none";
        }

        // If there's a logged-in user, display a welcome message
        // if (isLoggedIn && loggedInUser) {
        //     alert("Welcome, " + loggedInUser + "!");
        // }
    }
});

