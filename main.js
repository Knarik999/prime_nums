const reader = require('readline-sync');
const utils = require('./utils');

const n1 = reader.questionInt("Please insert a positive number = ");
const n2 = reader.questionInt("Please insert a positive number = ");

function getPrimes (n1,n2){
  if(n1 > 0 && n2 > 0) {
    let primes = [];

    for (let i = n1; i <= n2; i++) {
    if(utils.isPrime(i)) {
        primes.push(i)
      }
    }
    return primes;
  }
}

if(getPrimes(n1,n2)){
  utils.printElems(getPrimes(n1,n2));
}else{
  console.log("both numbers should be positive");
}
