const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

addButton.addEventListener('click', () => {
  result.value = parseInt(num1.value) + parseInt(num2.value);
});

subtractButton.addEventListener('click', () => {
  result.value = parseInt(num1.value) - parseInt(num2.value);
});

multiplyButton.addEventListener('click', () => {
  result.value = parseInt(num1.value) * parseInt(num2.value);
});

divideButton.addEventListener('click', () => {
  result.value = parseInt(num1.value) / parseInt(num2.value);
});

const gradeInputBox = document.getElementById('grade-input-box');
const submitButton = document.getElementById('submit-button');
const passingGradesDisplay = document.getElementById('passing-grades-display');
const submittedNumbers = [];
const passingGrades = [];

submitButton.addEventListener('click', () => {
  const grade = gradeInputBox.value;
  submittedNumbers.push(grade);

  if (grade >= 75) {
    passingGrades.push(grade);
  }

  const passingGradesString = passingGrades.join(', ');
  passingGradesDisplay.innerHTML = passingGradesString;
  gradeInputBox.value = submittedNumbers.join(', ');
});

function checkNumber() {
  const number = parseInt(document.getElementById('numberInput').value);
  const answerElement = document.getElementById('answer');
  
  if (number % 2 === 0) {
    answerElement.innerHTML = number + ' is even number';
  } else {
    answerElement.innerHTML = number + ' is odd number';
  }
}

function calculateSum() {
  const number = parseInt(document.getElementById('number').value);
  let sum = 0;
  const sumElement = document.getElementById('sum');
  
  for (let i = 1; i <= number; i++) {
    sum += i;
    sumElement.innerHTML += i + ', ';
  }
  
  sumElement.innerHTML += '<br>The sum is: ' + sum;
}


function displayFibonacciSequence() {
  const inputNumber = parseInt(document.getElementById('inputNumber').value);
  let n1 = 0, n2 = 1;
  let output = '';

  for (let i = 1; i <= inputNumber; i++) {
    output += n1 + ', ';
    const nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
  }

  document.getElementById('output').innerHTML = output;
}


document.addEventListener('DOMContentLoaded', () => {
  const displayButton = document.getElementById('displayButton');
  
  displayButton.addEventListener('click', () => {
    const numInput = document.getElementById('numInput');
    const asteriskOutput = document.getElementById('asteriskOutput');
    const num = parseInt(numInput.value);
    
    asteriskOutput.innerHTML = '';
    
    if (!isNaN(num) && num > 0) {
      for (let i = 0; i < num; i++) {
        const asterisks = '*'.repeat(i + 1);
        const p = document.createElement('p');
        p.textContent = asterisks;
        asteriskOutput.appendChild(p);
      }
    } else {
      asteriskOutput.textContent = 'Please enter a valid positive number.';
    }
  });
});
