// let Number1 = prompt("Enter your number1 :");
// let Number2 = prompt("Enter your number2 :");
// let Number3 = prompt("Enter your number3 :");

// let result =
//   Number1 > Number2 && Number1 > Number3
//     ? "Number1"
//     : Number2 > Number3 && Number2 > Number1
//       ? "Number2"
//       : Number3;
// console.log(result);

// let Letter = prompt("Enter the alphabet: ");

// Letter = Letter.toLowerCase();

// switch (Letter) {
//   case "a":
//     console.log("Vowel");
//     break;

//   case "e":
//     console.log("Vowel");
//     break;

//   case "i":
//     console.log("Vowel");
//     break;

//   case "o":
//     console.log("Vowel");
//     break;

//   case "u":
//     console.log("Vowel");
//     break;

//   default:
//     console.log("Consonant");
// }

// var letter = prompt("Enter a letter : ");
// letter = letter.toLowerCase();

// checking the conditions for vowel and consonant
// switch (letter) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     document.write("Vowel");
//     break;
//   default:
//     document.write("Consonant");
// }

// for (let Number = (x = 10); x >= 1; x = x - 1) {
//   document.write(" " + x);
// }

let n = parseInt(prompt("Enter your number:"));
let m = parseInt(prompt("Enter your number:"));
let sum = 0;

for (var x = m; x >= n; x = x - 1) {
  sum = sum + x;
}
document.write("Sum: " + sum);
