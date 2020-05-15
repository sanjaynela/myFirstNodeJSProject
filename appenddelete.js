var fs = require('fs');

fs.appendFile('read.js','\nconsole.log("done");',function(err){
    console.log("data appended");
});