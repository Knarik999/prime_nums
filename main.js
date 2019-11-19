const reader = require('readline-sync');
const utils = require('./utils');

const n1 = reader.questionInt("Please insert a positive number = ");
const n2 = reader.questionInt("Please insert a positive number = ");

if(utils.getPrimes(n1,n2)){
  utils.printElems(utils.getPrimes(n1,n2));
}else{
  console.log("numbers should be positive");
}
