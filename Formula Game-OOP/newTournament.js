function FormulaTournament() {
    this.formulaRacers = [];
    this.lapDistance = 10;
    this.chrashedBolids = 0;
    this.winner = [];
    this.timeBestScore = 0;


    this.genaerateRacers = function () {
        for (let index = 1; index <= 30; index++) {
            var pomRacer = new Racer();
            this.formulaRacers.push(pomRacer);

        }
    }

    this.checkCrash = function () {
        for (var i = 0; i < this.formulaRacers.length; i++) {
            var ine = this.formulaRacers[i];

            var tire = getRandomNumber(40, 60);
            this.formulaRacers[i].tireHealth = tire;
            if (tire < 50) {
                this.formulaRacers[i].timeScore += 9;
            }

            var speed = getRandomNumber(272, 372);
            this.formulaRacers[i].maxSpeed = speed;
            if (speed < 323) {
                this.formulaRacers[i].timeScore += 10;
            }

            var fuel = getRandomNumber(1, 120);
            this.formulaRacers[i].fuelCapacity = fuel;
            if (fuel < 60) {
                this.formulaRacers[i].timeScore += 5;
            }


            if (calculatePercent(1)) {
                console.log("CRASHEDCAR - " + ine.name);
                this.formulaRacers = this.formulaRacers.filter(function (x) { return x !== ine; });
                this.chrashedBolids++;
            }
        }
    }


    this.checkWinner = function () {
        var bestDriwer;
        var race = [];

        for (let i = 0; i < this.formulaRacers.length; i++) {
            race.push(this.formulaRacers[i].timeScore);
        }

        var pomosna = Math.min.apply(0, race);
        this.timeBestScore = pomosna;
        bestDriwer = race.indexOf(pomosna);

        this.winner.push(bestDriwer);

    }



    this.genaerateRacers();
}