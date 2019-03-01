function denarsToEuros(num){
    var denars = num;
    var total = denars / 61.5;

    return total;
    }

    function eurosToDenars(num){
        var euros = num;
        var total = euros * 61.5;
    
        return total;
        }


    var result = eurosToDenars(50);
    console.log("The result is " + result + " denars");


    var result = denarsToEuros(1200);
    console.log("The result is " + result + " euros");