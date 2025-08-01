const input = document.getElementById("input");
const convert = document.getElementById("convert");
const result = document.getElementById("result");
const output = document.getElementById("output");
const romanToNumber = (inputVal) => {
  const lookup = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let result = "";

  for (let val of lookup) {
    while (inputVal >= val.value) {
      result += val.symbol;
      inputVal -= val.value;
    }
  }
  console.log(result);
  return result;
};

const Convert = (e) => {
  e.preventDefault();
  let inputVal = input.value.trim();
  const numVal = Number(inputVal);
  if (inputVal === "") {
    alert("Please enter a Number.");
    return;
  } else if (isNaN(numVal) || numVal < 1 || numVal > 3999) {
    alert("Please enter a valid number between 1 and 3999.");
    return;
  } else {
    const roman = romanToNumber(numVal);
    output.value = roman;
  }
};
// roman to number
const romanInput = document.getElementById("romanInput");
const romanConvert = document.getElementById("romanConvert");

const numberOutput = document.getElementById("numberOutput");

const RomanToResult = (inputVal) => {
  const lookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let roman = inputVal.toUpperCase();
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    console.log(lookup[roman[i]]);

    const current = lookup[roman[i]];
    const next = lookup[roman[i + 1]];

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
};
const RomanNumber = (e) => {
  e.preventDefault();
  const inputVal = romanInput.value.trim();
  if (inputVal === "") {
    alert("Please enter a Number.");
    return;
  } else if (!/^[IVXLCDM]+$/i.test(inputVal)) {
    alert("Please enter a valid Roman numeral.");
    return;
  } else {
    const result = RomanToResult(inputVal);
    console.log(result);

    numberOutput.value = result;
  }
};

convert.addEventListener("click", Convert);

romanConvert.addEventListener("click", RomanNumber);
