const fs = require("fs");

//Write File System
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully creation");
  }
});

//Read and console data from welcome.txt
fs.readFile("welcome.txt", (err, data) => {
  if (err) {
    console.log("Wrong reading", err);
  } else {
    console.log("welcome ", data.toString());
  }
});
