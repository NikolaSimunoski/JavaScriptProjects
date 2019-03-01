var myDiv = document.createElement("div");
document.body.appendChild(myDiv);


var buttonFi = document.createElement("input");
buttonFi.placeholder = "FirstName";
myDiv.appendChild(buttonFi);


var buttonSe = document.createElement("input");
myDiv.appendChild(buttonSe);
buttonSe.placeholder = "LastName";
var buttonTh = document.createElement("input");
myDiv.appendChild(buttonTh);
buttonTh.placeholder = "Emaill";
var buttonFo = document.createElement("input");
myDiv.appendChild(buttonFo);
buttonFo.placeholder = "Password";

var myButton = document.createElement("button");
myDiv.appendChild(myButton);

myButton.addEventListener("click", function(){
    var userI = {
        name:buttonFi.value,
        last:buttonSe.value,
        mail:buttonTh.value,
        pass:buttonFo.value,
        
    }
    console.log(userI);
});


