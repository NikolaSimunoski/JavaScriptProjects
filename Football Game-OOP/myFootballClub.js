function Club() {
    this.players = [];
    this.allMatchesGoals = 0;
    this.numberOfSeats = 75000;
    this.totalSellSeats = 0;
    this.totalEarningsTshirtSell = 0;
    this.scoreGoal = false;
    this.billFromHooligansDamage = 0;
    this.costOfTicket = 70;
    this.finalBill = 0;

    this.generatePlayers = function () {
        for (var index = 1; index <= 22; index++) {
            var element = new Player(index);
            this.players.push(element);
        }
    }

    this.playMatch = function () {
        if (calculatePercent(30)) {
            this.players[Math.floor(Math.random() * (this.players.length - 1))].goal++;
            this.allMatchesGoals++;
            this.scoreGoal = true;


        }
    }

    this.lowestPlayer = function () {
        var worstPlayer;
        var goals = [];

        for (let i = 0; i < this.players.length; i++) {
            goals.push(this.players[i].goal);
        }

        var pomosna = Math.min.apply(0, goals);
        worstPlayer = goals.indexOf(pomosna);
        this.players.splice(worstPlayer, 1);
    }


    this.sellSeats = function () {
        var pomosnaSeats = getRandomNumber(60, 80);
        pomosnaSeats = (pomosnaSeats * 750);
        this.totalSellSeats += pomosnaSeats;
        if (scoreGoal = true) {
            this.totalEarningsTshirtSell += Math.floor(pomosnaSeats * 0.25);
        }
        else {
            this.totalEarningsTshirtSell += Math.floor(pomosnaSeats * 0.10);
        }
    }

    this.hooligansDamage = function () {
        var pomHooligans = getRandomNumber(0, 70) * 400;
        this.billFromHooligansDamage += pomHooligans;
    }
    this.totalProfit = function(){
        var pomProfit = ((this.totalSellSeats*this.costOfTicket) + this.totalEarningsTshirtSell) - this.billFromHooligansDamage;
        this.finalBill += pomProfit;
    }


    this.generatePlayers();

}