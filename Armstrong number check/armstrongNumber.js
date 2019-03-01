function checkBigestNumber(digit){
    var number = digit;
    var pom = 0;
    var sum = 0;
    while (number > 0){
       var secNumber = number % 10;
       pom = Math.pow(secNumber, 3);
       sum +=pom;
       number = parseInt(number / 10); 
    }
    if (sum === digit){
        console.log(digit + " is armstrong number!");
    }
    else{
        console.log(digit + " is not armstrong number!");
    }
    }
    
    
    var num = checkBigestNumber(371);
    