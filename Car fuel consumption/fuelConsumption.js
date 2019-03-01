function carFuelConsumption(litar, km, totalkm){
    let i;
    let onekm = litar/km;
    let vkupno = 0;
    for(i = 0; i < totalkm; i++){
        vkupno += onekm;
    }
    console.log("You need " + vkupno + " litar fuel to finish your " + totalkm + " km trip");
}



carFuelConsumption (7,100,43);