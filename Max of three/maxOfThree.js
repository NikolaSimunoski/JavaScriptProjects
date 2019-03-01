function maxOfThree(first, second, thirth){
        if(first > second && first > thirth){
            return "The num " + first + " is the largest num";
        }
        else  if(first < second && second > thirth){
            return "The num " + second + " is the largest";
        }
        else if(first < thirth && second < thirth){
            return "The num " + thirth + " is the largest";
        } else{
            return "num is equals";
        }
    }
    var results = maxOfThree(3,10,5);
    document.write(results);