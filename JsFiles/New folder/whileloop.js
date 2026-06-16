// let i = 1;
// let sum = 0;

// while (i <= 50) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     document.write(" " + i);
//     sum = sum + 1;
//   }
//   i = i + 1;
// }
// document.write(" " + sum);
// document.write(<h1>END</h1>);

// name = ["Ashraful", "sakib", "musfiq", "anis", "sohan"];

// for (let x = 0; x < 5; x++) {
//   console.log(name[x]);
// }

// function highestscore(scores) {
//   let max = scores[0];
//   for (x = 1; x < scores.length; x++) {
//     if (max < scores[x]) {
//       max = scores[x];
//     }
//   }
//   return max;
// }

// let scores = [21, 23, 25, 88, 90];
// let maxscore = highestscore(scores);
// console.log(maxscore);

function Student(name, age, gpa, lang) {
  this.name = name;
  this.age = age;
  this.gpa = gpa;
  this.lang = lang;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.gpa);
    console.log(this.lang);
  };
}

let student1 = new Student("saif islam", 25, 3.4, "English");
let student2 = new Student("titu", 45, 3.4, "English");
let student3 = new Student("kashem", 35, 3.4, "English");

student1.display();
student2.display();
student3.display();
