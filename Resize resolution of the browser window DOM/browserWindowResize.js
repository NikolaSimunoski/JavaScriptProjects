var resizeResult = document.createElement("div");
document.body.appendChild(resizeResult);
window.addEventListener("resize", function(){
    resizeResult.innerHTML = "Height " + window.innerHeight + " and width is " + window.innerWidth; 
})