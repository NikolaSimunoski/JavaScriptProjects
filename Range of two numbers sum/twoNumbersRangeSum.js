function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;
  }


function numberRange(x,y) {
    var printX = x;
    var result = 0;
    for (var i = x; i < y; i++){
        if (!isPrime(i)){
            result += i;
        }  
    }
    return result;
}

var myResult = numberRange(1,10);
console.log("Suma from numbers in range is " + myResult);


