// sessionStorage.setItem("user1", "saif");
// sessionStorage.setItem("user2", "linkdin");

// const userName = sessionStorage.getItem("user");
// console.log(userName);

// sessionStorage.removeItem("user");

// sessionStorage.clear();

// const userInfo = JSON.parse(sessionStorage.getItem("user"));

const user = { id: "101", name: "saif" };
sessionStorage.setItem("user", JSON.stringify(user));

const UserInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(UserInfo);
