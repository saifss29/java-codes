// document.write("name: Saif Islam<br/>");
// document.write("phone: 036850432 <br/>");
// document.write("location: Ashulia <br/>");
// document.write("hobby: playing football");

// alert("Hello");

// const username = "saif islam";
// const income = 3750;
// const expense = 2000;
// console.log("personal budget tracker app");

// console.log("user: " + username.toUpperCase());
// console.log("Total income: " + income);
// console.log("Total expenses: " + expense);

// let num1 = prompt("Enter your first number : ");
// let num2 = prompt("Enter your second number : ");

// parseInt(num1, 10);
// parseInt(num2, 10);

// let sum, sub,;

// sum = num1 + num2;
// document.write("Addition =" + sum);

// sub = num1-num2;
// document.write("result ="+ sub);

// let farn = parseFloat(prompt("Enter : "));
// let cels = (farn - 32) * (5 / 9);

// document.write("Celsius =" + cels);

// let username = "Saif Islam";
// let income = 5000;
// let totalexpense = 2300;

// let tax = income * 0.1;

// let NetIncome = income - tax;

// let Balance = NetIncome - totalexpense;

// let savings = Balance * 0.2;
// old method
// console.log("Personal Budget Tracker");
// console.log("User :" + username);
// console.log("Total Income: $" + income);
// console.log("Total Expense: $" + totalexpense);
// console.log("Tax Deducted(10%): $" + tax);
// console.log("Net Income After Tax: $" + NetIncome);
// console.log("Remaining Balance: $" + Balance);
// console.log("Savings: $" + savings);

//new method cs6

// console.log("Personal Budget Tracker");
// console.log(`User : ${username}`);
// console.log(`Total Income: $${income}`);
// console.log(`Total Expense: $${totalexpense}`);
// console.log(`Tax Deducted(10%): $${tax}`);
// console.log(`Net Income After Tax: $${NetIncome}`);
// console.log(`Remaining Balance: $${Balance}`);
// console.log(`Savings: $${savings}`);
// console.log(`Hi
//     bye`);

let Marks = parseInt(prompt("Enter your Marks: "));

if (Marks >= 80) document.write("A+");
else if (Marks >= 70) document.write("A");
else if (Marks >= 60) document.write("A-");
else if (Marks >= 50) document.write("B");
else if (Marks >= 40) document.write("C");
else if (Marks >= 33) document.write("D");
else document.write("You got a:" + "F");
