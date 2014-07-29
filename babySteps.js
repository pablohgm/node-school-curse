var tmpSUM = 0;

for(var index=2; index < process.argv.length; index++){
    tmpSUM += Number(process.argv[index]);
}

console.log(tmpSUM);
