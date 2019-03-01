function concatString(firstStr, secondStr, reverse){
    if(reverse){
        return firstStr + " " + secondStr;
    }else{
        return secondStr + " " + firstStr;
    }
    }
    var myString = concatString("Nikola","Simunoski", true);
    document.write("Your final string is: " + myString);