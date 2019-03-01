var text = document.createElement("p");
text.innerHTML = "This is my first project - DOM";
document.body.appendChild(text);

var myButton = document.createElement("button");
myButton.innerHTML = "click me!!";
document.body.appendChild(myButton);

function changeStyle(event){
event.target.style.backgroundColor = "red";
event.target.previousSibling.style.color = "green";
event.target.previousSibling.style.fontSize = "32px";
}

myButton.addEventListener("click", changeStyle);
