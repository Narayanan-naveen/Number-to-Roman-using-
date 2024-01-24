let inputNumber = document.getElementById("input-number");
let convertButton = document.getElementById("convert-button");
let errorMessage = document.getElementById("error-message");
let convertedResult = document.getElementById("converted-result");

const romanNumeralMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    XXX: 30,
    XX: 20,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

convertButton.addEventListener("click", () => {
    convertToRoman(inputNumber.value);
    inputNumber.value = "";
});

function convertToRoman(num) {
    let number = parseInt(num);

    if (num.trim().length == 0) {
        errorMessage.innerHTML = "Invalid Input";
        convertedResult.innerHTML = "";
        return false;
    }
    if (number > 4999 || number < 1) {
        errorMessage.innerHTML = "Input Out Of Range";
        convertedResult.innerHTML = "";
        return false;
    }
    errorMessage.innerHTML = "";
    convertedResult.innerHTML = "";

    let result = "";
    let romanNumerals = Object.keys(romanNumeralMap);
    romanNumerals.forEach((key) => {
        while (romanNumeralMap[key] <= number) {
            number -= romanNumeralMap[key];
            result += key;
        }
    });
    convertedResult.innerHTML = result;
}