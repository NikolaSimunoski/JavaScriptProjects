
function feedCats(){  
    
          
    for (let i = 1; i < 9; i++) {
        generateCat();
        nameOfCat;
       if (nameOfCat === "Tobby"){
           console.log("Day " + i + nameOfCat + " started eating fish"); 
           continue;  
        }
           else if(nameOfCat === "Lizzie"){
           console.log("Day " + i + nameOfCat + " started eating chicken"); 
           continue; 
           }
           else if (nameOfCat === "Marry"){
               console.log("Day " + i +  nameOfCat + " strated eating whatever");
               continue;      
           }
           else if (nameOfCat === "Tom"){
               console.log("Day " + i + " You don't have cat with name  " + nameOfCat); 
               continue;      
           } 
    }
   
}

function generateCat() {

        var giveCat = getRandom(1, 4);
        var nameOfC;
       
        switch (giveCat) {
            case 1:
                nameOfC = "Tobby";
                break;
            case 2:
                nameOfC = "Lizzie";
                break;
            case 3:
                nameOfC = "Marry";
                break;
            case 4:
                nameOfC = "Tom";
                break;
        }   
        nameOfCat = nameOfC;
        
    }

    window.getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

   


feedCats();

  

