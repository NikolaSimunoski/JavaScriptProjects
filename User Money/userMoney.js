function userMoney(money){
        if(money <= 1000){
            return "You are good man";
        }else if (money > 1000 && money <= 3000){
            return "You are litle bad";
        }else if(money >3000 && money <=6000){
            return "You are  bad man";
        }else{
            return "You are evil"
        }
    }
    var desision = userMoney(7000);
    document.write(desision);