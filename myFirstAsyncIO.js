var fs = require('fs');
var tmpPath = process.argv[2];

fs.readFile(tmpPath, 'utf8', function(err, data){
    var splitResult = data.split("\n");
    console.log(splitResult.length-1);
});



