var fs = require('fs');
var tmpPath = process.argv[1];

fs.readFile(tmpPath, 'utf8', function(err, data){
    var splitResult = data.split('\n');
    var tmpCounter = 0;
    for(var index=0; index < splitResult.length; index++){
        if(splitResult[index] === ''){
            tmpCounter++;
        }
    }
    console.log(tmpCounter);
});



