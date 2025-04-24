const form = document.querySelector(".form");
const input = document.getElementById("text-input");
const output = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value.length) {
    alert("Please input a value");
    return;
  }
  const cleanedValue = cleanInput(value);
  const isPalindrome = checkPalindrome(cleanedValue);
  input.value = "";
  showResult(value, isPalindrome);
});

function cleanInput(value) {
  const regex = /[^a-z0-9]/gi;
  const cleanValue = value.replace(regex, "");
  return cleanValue;
}

function checkPalindrome(value) {
  const strToArr = value.toLowerCase().split("");
  const reversedArr = [...strToArr].reverse();
  let isSame = true;
  for (let i = 0; i < strToArr.length; i++) {
    const char = strToArr[i];
    const reverseChar = reversedArr[i];
    if (char !== reverseChar) {
      isSame = false;
      break;
    }
  }

  return isSame;
}

function showResult(value, isPalindrome) {
  let message = "";

  if (isPalindrome) {
    message = `${value} is a palindrome.`;
  } else {
    message = `${value} is not a palindrome.`;
  }

  output.innerText = message;
}
