function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}

let emailBox = document.querySelector(".email");
let emailInput = document.querySelector(".email input");
let emailButton = document.querySelector(".email button");
let exclamationCircle = document.querySelector(".fa-circle-exclamation")
let errorMessage = document.querySelector(".error-message p")

emailButton.addEventListener("click", () => {
    if (! ValidateEmail(emailInput)) {
        emailBox.style.borderColor = "hsl(0, 93%, 68%)";
        emailBox.style.borderWidth = "3px";
        emailInput.focus();
        exclamationCircle.style.display = "block";
        errorMessage.style.display = "block";
    } else {
        emailBox.style.borderColor = "hsl(0, 36%, 70%)";
        emailBox.style.borderWidth = "1px";
        exclamationCircle.style.display = "none";
        errorMessage.style.display = "none";
    }

})
