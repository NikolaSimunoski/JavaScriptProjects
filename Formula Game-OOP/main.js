function main() {
    var formulaRace = new FormulaTournament();


    for (var laps = 1; laps <= 80; laps++) {
        formulaRace.checkCrash();
        
        console.log("Lap - " + laps);
        console.log(formulaRace.formulaRacers);
        
       
    }
    
    formulaRace.checkWinner();
    console.log("After 80 laps the WINNER is racer number " + formulaRace.winner + " with time " + formulaRace.timeBestScore + " min!") ;
    

}
main();

