var fs = require('fs');
var tmpBuffer = fs.readFileSync('./assets/fileToCountLines.js');
var splitResult = tmpBuffer.toString().split('\n');
var tmpCounter = 0;
for(var index=0; index < splitResult.length; index++){
    if(splitResult[index] === ''){
        tmpCounter++;
    }
}
console.log(tmpCounter);