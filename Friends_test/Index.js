const data = require("./friends_data.json");
// console.log(data);

// // console.log(data.friends[0]);

// // data.friends[0].name = "Siam";
// // console.log(data.friends[0]);

// delete data.friends[0].name;
// console.log(data);

// const data = require("./students_data.json");
// console.log(data.student[1].languages[0]);

for (x in data) {
  console.log(x);
  //   to find key value
  console.log(data[x]);
}
