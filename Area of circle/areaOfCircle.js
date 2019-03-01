function areaCircle(num){
    var pom = num;
     var total = (Math.PI) * (Math.pow(num,2));

    return total;
    }


var result = areaCircle(3);
console.log("The area of this circle is " + result);