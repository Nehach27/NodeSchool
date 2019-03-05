const fs = require('fs');
fs.readFile(process.argv[2], function doneReading(err,data){
if (err){
  console.log(error);
}
const buff= data.toString();
const split = buff.split('\n')
const lines= split.length-1;
console.log(lines);
})