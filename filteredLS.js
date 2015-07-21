var fs = require('fs');
var path = require('path');
var tmpPath = process.argv[2];
//var tmpPath = 'assets'
var tmpExt = '.'+process.argv[3];
//var tmpExt = '.'+'js'

fs.readdir(tmpPath, function(err, files){
    for(var index=0; index < files.length; index++){
        if(path.extname(files[index]) === tmpExt){
            console.log(files[index]);
        }
    }
});



