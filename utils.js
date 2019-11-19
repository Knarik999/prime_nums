function isPrime (n) {
  if (n <= 1){
    return false;
  }

  let div = 2;

  while(div <= Math.sqrt(n)){
    if(n % div === 0){
      return false;
    }
    div++;
  }
  return true;
}

module.exports = {
  getPrimes: function(n1,n2){
    if(n1 > 0 && n2 > 0) {
      let primes = [];

      for (let i = n1; i <= n2; i++) {
        if(isPrime(i)) {
          primes.push(i)
        }
      }
      return primes;
    }
  },

  printElems: function (ary) {
    if(!ary.length){
      console.log("Prime numbers missing! Finder gets some amount of money!");
    }else{
      for(let i = 0; i < ary.length; i++)
        console.log(ary[i]);
    }
  }
}
