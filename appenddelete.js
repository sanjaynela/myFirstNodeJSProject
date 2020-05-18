var fs = require("fs");

fs.appendFile("read.js", '\nconsole.log("done");', function (err) {
  console.log("data appended");
});

fs.unlink("writeFile.txt", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Deleted");
});
