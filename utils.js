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
  printElems: function (ary) {
    if(!ary.length){
      console.log("there are no prime numbers in this range");
    }else{
      for(let i = 0; i < ary.length; i++)
        console.log(ary[i]);
    }
  },
  isPrime
}
