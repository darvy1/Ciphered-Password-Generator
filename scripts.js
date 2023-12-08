// Event listeners and Page Elements
const CreatePasswordsButton = document.querySelector(".css-create-password-button");
const CreatePasswordsDiv = document.querySelector(".css-password-creation-absolute");
const HomeDivElement = document.querySelector(".home-div"); 
const HomeDivCurve = document.querySelector(".css-curve-container1");

const GeneratePasswords = document.querySelector(".js-generate-password");
const NumberCharsCheckbox = document.querySelector(".js-Number-Chars-Checkbox");
const LetterCharsCheckbox = document.querySelector(".js-Letter-Chars-Checkbox");
const SpecialCharsCheckbox = document.querySelector(".js-Special-Chars-Checkbox");
const NoOfCharsInputField = document.querySelector(".js-No-of-Chars-Input");
const PasswordOutput = document.querySelector(".js-password-output");
const ExitGenerationButton = document.querySelector(".js-exit-generation-button");

CreatePasswordsButton.addEventListener("click", () => {
    setTimeout(() => {
        CreatePasswordsDiv.classList.remove("js-none");
        HomeDivElement.classList.add("js-home-page-blur");
        HomeDivCurve.classList.add("js-home-page-blur");
    }, 250);
});

ExitGenerationButton.addEventListener("click", () => {
    setTimeout(() => {
        CreatePasswordsDiv.classList.add("js-none");
        HomeDivElement.classList.remove("js-home-page-blur");
        HomeDivCurve.classList.remove("js-home-page-blur");
    }, 250);
});

GeneratePasswords.addEventListener("click", () => {
    GeneratePassword();
});

// Reset inputs
NoOfCharsInputField.value = "";
PasswordOutput.value = "";
LetterCharsCheckbox.checked = false;
NumberCharsCheckbox.checked = false;
SpecialCharsCheckbox.checked = false;

//Generate Password Function
function GeneratePassword() {
   
    const LetterCharacters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMqwertyur";
    const NumberCharacters = "123456789012345678901234567890123456789012345678901234567890";  
    const SpecialCharacters = "!@#$%^&*()~`_+-={]]}:;''><.,?/!@#$%^&*()~`_+-={]]}:;''><.,?/|";

    let Characters = "";
    let PasswordList = [];
    let Password = "";

    if (NumberCharsCheckbox.checked) {
        Characters += NumberCharacters;
    }
    if (LetterCharsCheckbox.checked) {
        Characters += LetterCharacters;
    }
    if (SpecialCharsCheckbox.checked) {
        Characters += SpecialCharacters;
    }

    if (!NumberCharsCheckbox.checked && !LetterCharsCheckbox.checked && !SpecialCharsCheckbox.checked) {
        document.querySelector(".Error-texts")
            .innerHTML = `* Please select a character type *`;
    } else if ((isNaN(NoOfCharsInputField.value)) || (String(NoOfCharsInputField.value) === "")) {
        document.querySelector(".Error-texts")
            .innerHTML = `* Please enter a numeric value in "Enter no. of characters" *`;
    } else{
        GeneratePasswords.innerHTML = `Re-Generate
        <img src="Images/Regenerate icon.png">`;        

        document.querySelector(".Error-texts")
            .innerHTML = ``;

        const NoOfChars = Number(NoOfCharsInputField.value);

        for (let i = 0; i < NoOfChars; i++) {
            const randomChar = Characters[Math.floor(Math.random() * Characters.length)];
            PasswordList.push(randomChar);
        } 

        PasswordList.forEach((char) => {
            Password += char;
        });

        PasswordOutput.value = Password;
    }
}
