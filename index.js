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

emailButton.addEventListener("click", () => {
    if (! ValidateEmail(emailInput)) {
        emailBox.style.borderColor = "hsl(0, 93%, 68%)";
        emailBox.style.borderWidth = "3px";
        emailInput.focus();
    }

})
