
function patientLifeFight(){
    console.log("We start with massage the patient's heart")
for(var i = 1; i <= 60; i++){
    console.log("Preform CPR " + i);

    if( i == 60){
        console.log("after " + i + " days we did a great job, patient is allive!!!");
        break;
    }
    
    if(i%15 === 0){
       if (calculatePercent(30)){
        console.log("patient is dead");
        break;
       }
       else {
        console.log("After " + i + "secconds pacient is allive, countinue massage the patient's heart");
       }
    }
    
} 
}
window.getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.calculatePercent = function(percent) {
            return (100 - percent) <= getRandomNumber(0, 100);
        }

        patientLifeFight();