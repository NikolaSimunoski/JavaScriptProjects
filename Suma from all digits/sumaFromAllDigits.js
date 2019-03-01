function sumaDigits(digit){
var number = digit;
var sum = 0;
while (number > 0){
   var secNumber = number % 10;
   sum = sum + secNumber;
   number = parseInt(number / 10); 
}
return sum;
}



var num = sumaDigits(213458);
console.log("Suma of all digits is: " + num);