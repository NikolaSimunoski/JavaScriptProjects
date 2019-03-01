function main(){
   var btnOne = document.getElementById("num-one");
   var btnTwo = document.getElementById("num-two");
   var btnThree = document.getElementById("num-three");
   var btnFour = document.getElementById("num-four");
   var btnSix = document.getElementById("num-six");
   var btnSeven = document.getElementById("num-seven");
   var btneight = document.getElementById("num-eight");
   var btnNine = document.getElementById("num-nine");
   var btnFive = document.getElementById("num-five");
   var btnZero = document.getElementById("num-zero");
    
   var btnDecimal = document.getElementById("num-decimal");
   var btnClear = document.getElementById("numClear");
   var btnBackspace = document.getElementById("backspace");
   var display = document.getElementById("display");
   
   var calcNumBtn = document.getElementsByClassName("calc-btn");
   var operatorBtn = document.getElementsByClassName("calc-operator");

   var displayNum = "0";
   var pendingVal;
   var evalStringArray = [];

    var updateDisplayVal = (clickObj) => {
        var btnText = clickObj.target.innerText;

        if(displayNum === "0")
            displayNum = "";
        displayNum += btnText;
        display.value = displayNum;
    }

    var performOperation = (clickObj) => {
        var operator = clickObj.target.innerText;
        switch (operator) {
            case "+":
                pendingVal = displayNum;
                displayNum = "0";
                display.innerText = displayNum;
                evalStringArray.push(pendingVal);
                evalStringArray.push("+");
                break;
               
                case "-":
                pendingVal = displayNum;
                displayNum = "0";
                display.value = displayNum;
                evalStringArray.push(pendingVal);
                evalStringArray.push("-");
                break;

                case "*":
                pendingVal = displayNum;
                displayNum = "0";
                display.value = displayNum;
                evalStringArray.push(pendingVal);
                evalStringArray.push("*");
                break;

                case "/":
                pendingVal = displayNum;
                displayNum = "0";
                display.value = displayNum;
                evalStringArray.push(pendingVal);
                evalStringArray.push("/");
                break;

                case "=":
                evalStringArray.push(displayNum);
                var suma = eval(evalStringArray.join(" "));
                displayNum = suma + "";
                display.value = displayNum;
                evalStringArray = [];

                break;

            default:
                break;
        }
    }


   for (let index = 0; index < calcNumBtn.length; index++) {
    calcNumBtn[index].addEventListener("click", updateDisplayVal, false)
       
    }

    for (let index = 0; index < operatorBtn.length; index++) {
        operatorBtn[index].addEventListener("click", performOperation, false)
        
    }

    $(btnClear) .on ("click", function(){
       displayNum = "0";
       pendingVal = undefined;
       display.value = displayNum;

    });

    $(btnBackspace) .on ("click", function(){
        var lenghtOfDisplay = displayNum.length;
        displayNum = displayNum.slice(0, lenghtOfDisplay - 1);
        display.value = displayNum;

        if(displayNum === " ")
        displayNum = "0";
        display.value = displayNum;
    

    });
    
   $(btnDecimal) .on ("click", function(){
       if(!displayNum.includes("."))
       displayNum += ".";
       display.value = displayNum;
   })





}

main();
