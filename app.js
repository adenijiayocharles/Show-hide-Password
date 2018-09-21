let showPassword = document.querySelector("#show-password");
showPassword.addEventListener("click", (e) => {
    let passwordInput = document.querySelector("#password");
    let passwordInputType = passwordInput.getAttribute("type");

    if(passwordInputType == "password"){
        e.target.textContent = "hide password";
        passwordInput.setAttribute("type", "text");
    } else if (passwordInputType == "text"){
        e.target.textContent = "show password";
        passwordInput.setAttribute("type", "password");
    } 
});