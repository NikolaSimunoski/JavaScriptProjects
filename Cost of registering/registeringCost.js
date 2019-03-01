function calcReg(bhp){
    if(bhp <= 85){
        return "You must pay 3000 denari";
    }else if (bhp >= 85 && bhp <= 150){
        return "You must pay 5000 denari";
    }else{
        return "You must pay 15000 denari"
    }
}
var yourBill = calcReg(151);
document.write(yourBill);