function checkBigestNumber(){
    var first = 0;
    var biggest = 0;
    for (let index = 1; index <= 10; index++) {
        first = Math.floor(Math.random() * 101);
        console.log(first);
        if (first > biggest){
            biggest = first;
        }
    }
  console.log("The bigest value from ten numbers is " + biggest);
}



checkBigestNumber();