var heading3 = document.createElement("h1");
var text = document.createTextNode("New Heading");
heading3.appendChild(text);

var myDiv = document.getElementById("new");
myDiv.appendChild(heading3);

var Heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(Heading2);

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("New Heading0");
heading0.appendChild(text0);
var Heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0, Heading1);
