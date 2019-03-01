    function fight(){
    var orcHealth = 720;
    var orcArmor = 5;
    var humanHealth = 550;
    var humanArmor = 15;

    while (orcHealth > 0 && humanHealth > 0){
        var humanDamage = getRandomNumber(18,29);
        var orcDamage = getRandomNumber(23,35);
        humanHealth = humanHealth - orcDamage + humanArmor;
        if(humanHealth <= 0){
            console.log("Winner is Orc with energy " + orcHealth + " and human health " + humanHealth);
            break;
        }
        orcHealth = orcHealth - humanDamage + orcArmor;
        if(orcHealth < 0){
            console.log("Winner is Human with energy " + humanHealth + " and orc health " + orcHealth);
            break;
        }
    }
    }

    function getRandomNumber(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    
fight();