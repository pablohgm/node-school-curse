module.exports = function(argPath, argExt, callback){

    var fs = require('fs');
    var path = require('path');
    argExt = '.'+ argExt;
    
    fs.readdir(argPath, function(err, files){
        if(err){
            return callback(err)
        }
        var tmpResult = [];
        for(var index=0; index < files.length; index++){
            if(path.extname(files[index]) === argExt){
                tmpResult.push(files[index]);
            }
        }
        return callback(null, tmpResult);
    });
};



