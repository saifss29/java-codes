const budgetResultElement = document.getElementById("budgetResult");
const clearBudgetElement = document.getElementById("clearBudget");
const startBudgetElement = document.getElementById("startBudget");
const calculateBudgetElement = document.getElementById("calculateBudget");
const numberOfExpensesElement = document.getElementById("numExpenses");
const userNameElement = document.getElementById("username"); // FIXED
const incomeElement = document.getElementById("userincome"); // FIXED
const expenseInputsDiv = document.getElementById("expenseInputs");

// Attach event listeners
startBudgetElement.addEventListener("click", getExpenses);
calculateBudgetElement.addEventListener("click", startCalculateBudget);
clearBudgetElement.addEventListener("click", clearBudget);

incomeElement.addEventListener("input", validateForm);
userNameElement.addEventListener("input", validateForm);
numberOfExpensesElement.addEventListener("input", validateForm);

// Disable start button initially
startBudgetElement.disabled = true;

// ---------------- VALIDATION ----------------
function validateForm() {
  const incomeValid = parseFloat(incomeElement.value) > 0;
  const userNameValid = userNameElement.value.trim().length > 0;
  const numberOfExpensesValid = parseInt(numberOfExpensesElement.value) >= 0;

  startBudgetElement.disabled = !(
    incomeValid &&
    userNameValid &&
    numberOfExpensesValid
  );
}

// ---------------- LOCAL STORAGE ----------------
function saveBudgetToLocal(userBudget) {
  localStorage.setItem("userBudget", JSON.stringify(userBudget));
}

function getBudgetFromLocal() {
  const savedBudget = localStorage.getItem("userBudget");
  return savedBudget ? JSON.parse(savedBudget) : null;
}

function clearBudgetFromLocal() {
  localStorage.removeItem("userBudget");
}

// ---------------- UI FUNCTIONS ----------------
function clearBudget() {
  clearBudgetFromLocal();

  document.getElementById("username").value = "";
  document.getElementById("userincome").value = "";
  document.getElementById("numExpenses").value = "";

  expenseInputsDiv.innerHTML = "";
  budgetResultElement.innerHTML = "";

  calculateBudgetElement.style.display = "none";
  clearBudgetElement.style.display = "none";
}

// ---------------- CREATE EXPENSE INPUTS ----------------
function getExpenses() {
  const numberOfExpenses = parseInt(numberOfExpensesElement.value);
  expenseInputsDiv.innerHTML = "";

  if (isNaN(numberOfExpenses) || numberOfExpenses <= 0) {
    alert("⚠️ Enter a valid number of expenses.");
    return;
  }

  for (let i = 1; i <= numberOfExpenses; i++) {
    const label = document.createElement("label");
    label.textContent = `Expense ${i}: `;

    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("expenseValue");

    expenseInputsDiv.appendChild(label);
    expenseInputsDiv.appendChild(input);
    expenseInputsDiv.appendChild(document.createElement("br"));
  }

  calculateBudgetElement.style.display = "inline-block";
  clearBudgetElement.style.display = "inline-block";
}

// ---------------- START CALCULATION ----------------
function startCalculateBudget() {
  let userBudget = {
    userName: userNameElement.value,
    income: parseFloat(incomeElement.value),
    expenses: [],
    numberOfExpenses: parseInt(numberOfExpensesElement.value),
    totalExpenses: 0,
    tax: 0,
    netIncome: 0,
    balance: 0,
    savings: 0,
    finalStatus: "",
  };

  const expenseInputs = document.getElementsByClassName("expenseValue");

  for (let i = 0; i < expenseInputs.length; i++) {
    let expense = parseFloat(expenseInputs[i].value);
    userBudget.expenses.push(isNaN(expense) ? 0 : expense);
  }

  calculateBudget(userBudget);
  saveBudgetToLocal(userBudget);
  displayResults(userBudget);
}

// ---------------- CALCULATION HELPERS ----------------
function calculateTotalExpenses(expenses) {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
  }
  return total;
}

function calculateTax(income, rate) {
  return income * rate;
}

function calculateNetIncome(income, tax) {
  return income - tax;
}

function calculateBalance(netIncome, totalExpenses) {
  return netIncome - totalExpenses;
}

function calculateSavings(balance, rate) {
  return balance * rate;
}

function getFinancialStatus(savings) {
  if (savings >= 1000) return "💰 Excellent! You are saving well!";
  if (savings >= 500) return "✅ Good! You have a decent savings amount.";
  if (savings >= 100)
    return "⚠️ Needs Improvement. Consider reducing expenses.";
  return "🚨 Critical! Your savings are too low!";
}

// ---------------- MAIN CALCULATION ----------------
function calculateBudget(userBudget) {
  userBudget.totalExpenses = calculateTotalExpenses(userBudget.expenses);
  userBudget.tax = calculateTax(userBudget.income, 0.1);
  userBudget.netIncome = calculateNetIncome(userBudget.income, userBudget.tax);
  userBudget.balance = calculateBalance(
    userBudget.netIncome,
    userBudget.totalExpenses,
  );
  userBudget.savings = calculateSavings(userBudget.balance, 0.2);
  userBudget.finalStatus = getFinancialStatus(userBudget.savings);
}

// ---------------- DISPLAY ----------------
function displayResults(userBudget) {
  budgetResultElement.innerHTML = `
    <h2>Budget Summary</h2>
    <p>👤 User: ${userBudget.userName}</p>
    <p>💰 Income: $${userBudget.income.toFixed(2)}</p>
    <p>💸 Expenses: $${userBudget.totalExpenses.toFixed(2)}</p>
    <p>📉 Tax: $${userBudget.tax.toFixed(2)}</p>
    <p>💲 Net Income: $${userBudget.netIncome.toFixed(2)}</p>
    <p>🟢 Balance: $${userBudget.balance.toFixed(2)}</p>
    <p>💾 Savings: $${userBudget.savings.toFixed(2)}</p>
    <p><strong>${userBudget.finalStatus}</strong></p>
  `;
}

// ---------------- LOAD SAVED DATA ----------------
function runBudgetTracker() {
  const savedBudget = getBudgetFromLocal();
  if (savedBudget) displayResults(savedBudget);
}

window.addEventListener("load", runBudgetTracker);
