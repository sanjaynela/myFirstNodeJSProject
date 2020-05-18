var fs = require("fs");

fs.readFile("calc.js", "utf8", function (err, data) {
  console.log(data);
});

fs.writeFile("writeFile.txt", "This is a test", "utf8", function (err) {
  if (err) {
    return console.error(err);
  }
});
console.log("done");
