document.addEventListener("DOMContentLoaded", function () {
    const showLoginFormLink = document.getElementById("showLoginFormLink");
    const loginFormElement = document.getElementById("login-form");
        showLoginFormLink.onclick = function (event) {
            event.preventDefault();
            loginFormElement.style.display = "block";
        };
});

document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.getElementById("closeButton");
    const loginFormElement = document.getElementById("login-form");
        closeButton.onclick = function (event) {
            event.preventDefault(); 
            loginFormElement.style.display = "none";
        };
});