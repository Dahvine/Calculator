// Get the necessary DOM elements
const lastOperationScreen = document.getElementById("lastOperationScreen");
const currentOperationScreen = document.getElementById("currentOperationScreen");
const clearButton = document.getElementById("clearbtn");
const deleteButton = document.getElementById("deletebtn");
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operatorbtn");
const decimalButton = document.getElementById("decimal");
const equalsButton = document.getElementById("eqlbtn");

let currentOperation = "";
let lastOperation = "";
let isCalculated = false;

// Helper function to update the display
function updateDisplay() {
  currentOperationScreen.value = currentOperation;
  lastOperationScreen.textContent = lastOperation;
}

// Helper function to perform the calculation
function calculate() {
  try {
    const result = eval(currentOperation);
    lastOperation = currentOperation + " =";
    currentOperation = String(result);
    isCalculated = true;
    updateDisplay();
  } catch (error) {
    // Handle invalid input
    lastOperationScreen.textContent = "Error";
  }
}

// Event listeners for number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isCalculated) {
      currentOperation = "";
      isCalculated = false;
    }
    currentOperation += button.textContent;
    updateDisplay();
  });
});

// Event listener for operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isCalculated) {
      isCalculated = false;
    }
    currentOperation += button.textContent;
    updateDisplay();
  });
});

// Event listener for decimal button
decimalButton.addEventListener("click", () => {
  if (!currentOperation.includes(".")) {
    currentOperation += ".";
    updateDisplay();
  }
});

// Event listener for equals button
equalsButton.addEventListener("click", calculate);

// Event listener for clear button
clearButton.addEventListener("click", () => {
  currentOperation = "";
  lastOperation = "";
  isCalculated = false;
  updateDisplay();
});

// Event listener for delete button
deleteButton.addEventListener("click", () => {
    if (lastOperation === "") {
      // If no calculation has been done yet, clear the input
      currentOperation = currentOperation.slice(0, -1);
    } else {
      // If a calculation has been done, clear all
      currentOperation = "";
      lastOperation = "";
    }
    updateDisplay();
  });
  