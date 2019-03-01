function celFar(num){
    var celsius = num;
    var total = celsius * 1.8 + 32;

    return total;
    }

    function farCel(num){
        var fahrenheit = num;
        var total = (5/9) * (fahrenheit - 32);
    
        return total;
        }


    var result = celFar(30);
    console.log("The result is " + result + " Fahrenheit");


    var result = farCel(30);
    console.log("The result is " + result + " Celsius");