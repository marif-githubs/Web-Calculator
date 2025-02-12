let num = document.getElementsByClassName("button");
let op = document.getElementsByClassName("op");
let screen = document.querySelector(".screen");
let buffer = "0";
let accumulator = 0;
let operator = "";

function init() {
  for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function (event) {
      handleDigit(event.target.innerText);
    });
  }
  for (let j = 0; j < op.length; j++) {
    op[j].addEventListener("click", function (event) {
      handleOp(event.target.innerText);
    });
  }
}
init();

function displayA() {
  screen.innerText = accumulator;
}
function displayB() {
  screen.innerText = buffer;
}

function handleDigit(digit) {
  if (buffer === "0") {
    buffer = digit;
  } else {
    buffer += digit;
  }
  displayB();
  console.log(buffer);
}

function handleOp(op) {
  if (op === "C") {
    accumulator = 0;
    buffer = "0";
    displayB();
  } else if (op === "D") {
    buffer = buffer.substring(0, buffer.length - 1);
    displayB();
  } else if (op === "=") {
    if(operator != " "){
      compute();
    }
  } else {
    if(accumulator == 0){
      accumulator = parseInt(buffer);
    }
    buffer = "0";
    displayB();
    operator = op;
  }
}

function compute() {
  switch (operator) {
    case "+":
      accumulator += parseInt(buffer);
      break;
    case "-":
      accumulator -= parseInt(buffer);
      break;
    case "*":
      accumulator *= parseInt(buffer);
      break;
    case "/":
      accumulator /= parseInt(buffer);
      break;
     default :
      
  }
  buffer = "0";
  displayA();
}
