const input = document.getElementById("number");
const form = document.querySelector(".form");
const output = document.getElementById("output");

const romanNums = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  output.classList.remove("output--error");
  output.style.display = "block";

  if (!input.value) {
    output.textContent = "Please enter a valid number";
    output.classList.add("output--error");
    return;
  }

  if (parseInt(input.value) < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    output.classList.add("output--error");
    return;
  }

  if (parseInt(input.value) > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    output.classList.add("output--error");
    return;
  }

  const num = parseInt(input.value);

  const [mNum, numAfterM] = getM(num);
  const [dNum, numAfterD] = getD(numAfterM);
  const [cNum, numAfterC] = getC(numAfterD);
  const [lNum, numAfterL] = getL(numAfterC);
  const [xNum, numAfterX] = getX(numAfterL);
  const [vNum, numAfterV] = getV(numAfterX);
  const iNum = getI(numAfterV);

  const romanNum = mNum + dNum + cNum + lNum + xNum + vNum + iNum;

  output.textContent = romanNum;
  input.value = "";
});

function getM(num) {
  return countLetters("m", num);
}

function getD(num) {
  let dNum = "";
  if (num >= 900) {
    dNum = "CM";
    num = num - 900;
  } else {
    [dNum, num] = countLetters("d", num);
  }
  return [dNum, num];
}

function getC(num) {
  let cNum = "";
  if (num >= 400) {
    cNum = "CD";
    num = num - 400;
  } else {
    [cNum, num] = countLetters("c", num);
  }
  return [cNum, num];
}

function getL(num) {
  let lNum = "";
  if (num >= 90) {
    lNum = "XC";
    num = num - 90;
  } else {
    [lNum, num] = countLetters("l", num);
  }
  return [lNum, num];
}

function getX(num) {
  let xNum = "";
  if (num >= 40) {
    xNum = "XL";
    num = num - 40;
  } else {
    [xNum, num] = countLetters("x", num);
  }
  return [xNum, num];
}

function getV(num) {
  let vNum = "";
  if (num === 9) {
    vNum = "IX";
    num = num - 9;
  } else {
    [vNum, num] = countLetters("v", num);
  }
  return [vNum, num];
}

function getI(num) {
  let iNum = "";
  if (num === 4) {
    iNum = "IV";
    num = num - 4;
  } else {
    [iNum, num] = countLetters("i", num);
  }
  return iNum;
}

function countLetters(letter, num) {
  let quotient = parseInt(num / romanNums[letter]);
  let romanNum = "";
  if (quotient >= 1) {
    romanNum += letter.repeat(quotient).toUpperCase();
    num = num % romanNums[letter];
  }
  return [romanNum, num];
}
