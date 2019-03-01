
function startFlirting(action){
    let pointsEarn = 0;
    for (var index = 1; index <= action; index++) {
        pointsEarn += 1;
        if(index % 3 == 0){
            pointsEarn += 5;
        }
        if(index % 5 == 0){
            pointsEarn += 10;
        }
        if(index % 10 == 0){
            pointsEarn -= 12;
        }
    }
    return pointsEarn;
}



var girl = startFlirting(54);
console.log("Girl earned " + girl + " points from flearting whit this boy");