const fs = require('fs')
const contents = fs.readFileSync(process.argv[2]);
const buff= contents.toString();
const split = buff.split('\n')
const lines= split.length-1;
console.log(lines);