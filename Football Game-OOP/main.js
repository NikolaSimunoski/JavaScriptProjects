function main() {
    var footballClub = new Club();


    for (var days = 1; days <= 30; days++) {

        if (days % 8 === 0) {
            footballClub.lowestPlayer();
            var hiredPlayer = new Player("New Star" + days);
            footballClub.players.push(hiredPlayer);
        }
        footballClub.playMatch();
        footballClub.sellSeats();
        footballClub.hooligansDamage();
    }

    footballClub.totalProfit();

    console.log(footballClub);
    console.log("After 30days we hit " + footballClub.allMatchesGoals + " goals!");
    console.log("After 30days we sell " + footballClub.totalSellSeats + " seats!");
    console.log("After 30days we earn " + footballClub.totalEarningsTshirtSell + " dolars from T-shirts!");
    console.log("After 30days total sum of damage from hooligans is " + footballClub.billFromHooligansDamage + " dolars!");
    console.log("Finaly after 30 days we made a greath deal and we earn impressive " + footballClub.finalBill + " dolars!");

}
main();

