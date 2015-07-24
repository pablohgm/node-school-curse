var myModule = require('./myModule');
var tmpPath = process.argv[2];
var tmpExt = process.argv[3];

myModule(tmpPath, tmpExt, function(err, data){
  data.forEach(function (file) {
    console.log(file);
  })
});