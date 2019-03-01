function Renderer(person) {
    this.user = person;
    this.mainContainer = document.getElementById("main-container");
 
    this.renderAll = function() {
        this.renderLeft();
        this.renderRight();
    }


    this.renderLeft = function() {
        var mainDiv = document.createElement("div");
        mainDiv.classList.add("main");
        document.body.appendChild(mainDiv);
        mainDiv.style.border ="2px solid red"; 
        mainDiv.style.width = "1500px";
        mainDiv.style.height = "800px";

        var topMainDiv = document.createElement("div");
        topMainDiv.id = "topContainer";
        topMainDiv.style.width = "100%";
        topMainDiv.style.height = "35%";
        // topMainDiv.style.backgroundColor = "yellow";
        mainDiv.appendChild(topMainDiv);
        topMainDiv.style.display = "flex";
        

        var topLeft = document.createElement("div");
        topLeft.id = "topLeft";
        topLeft.style.width = "20%";
        topLeft.style.height = "100%";
        // topLeft.style.backgroundColor = "grey";
        topMainDiv.appendChild(topLeft);
        // topLeft.style.border = "1px solid grey";
        // topLeft.style.objectFit = "cover";

        var topRight = document.createElement("div");
        topRight.id = "topRight";
        topRight.style.width = "80%";
        topRight.style.height = "100%";
        topRight.style.backgroundColor = "white";
        topMainDiv.appendChild(topRight); 
        topRight.classList.add("albumR");
        
        
        
        var bottomDiv = document.createElement("div");
        bottomDiv.id = "bottomContainer";
        bottomDiv.style.width = "100%";
        bottomDiv.style.height = "65%";
        bottomDiv.style.backgroundColor = "#ebebe0";
        bottomDiv.style.display = "flex"
        mainDiv.appendChild(bottomDiv);
       
        var bottomLeft = document.createElement("div");
        bottomLeft.id = "bottomLeft";
        bottomLeft.style.width = "20%";
        bottomLeft.style.height = "100%";
        // bottomLeft.style.backgroundColor = "blue";
        bottomDiv.appendChild(bottomLeft);
            
        var bottomRight = document.createElement("div");
        bottomRight.id = "bottomRight";
        bottomRight.style.width = "80%";
        bottomRight.style.height = "100%";
        // bottomRight.style.backgroundColor = "black";
        bottomDiv.appendChild(bottomRight);
        bottomRight.style.display = "flex";
        bottomRight.style.flexDirection = "column";
        bottomRight.style.boxShadow = "0px 0px 10px 2px"
        
        
        function myZoom() {
            if (topLeft.addEventListener("mouseover", function(_e) {
                    myProfPic = mainDiv.querySelector("#topLeft");
                    myProfPic.style.height = "550px";
                    myProfPic.style.width = "550px";
                    myProfPic.style.transition = "3s";
                    
       
                }));
                else if (topLeft.addEventListener("mouseout", function(_e) {

                    myProfPic = mainDiv.querySelector("#topLeft");
                    myProfPic.style.height = "100%";
                    myProfPic.style.width = "20%";
                    myProfPic.style.transition = "0.5s";
                     
                }));
            }

            myZoom();



        this.renderProfilepic();
        this.renderAlbum();
    }
    this.renderProfilepic = function() {

        var myProfPic = document.createElement("img");
        myProfPic.src = this.user.profile.profilePhoto;
        topLeft.appendChild(myProfPic);
        topLeft.style.display = "flex";
        myProfPic.style.objectFit = "cover";
        myProfPic.style.width = "100%";
        myProfPic.style.height ="100%";
        myProfPic.style.cursor = "pointer";
        topLeft.style.position = "relative";
          
    }

    

    this.renderAlbum = function() {
        
        for (let index = 0; index < this.user.album.length; index++) {
            let smallDiv = document.createElement("div"); 
            smallDiv.classList.add("smallDiv");
            topRight.appendChild(smallDiv);
            topRight.display = "grid";
            var myAlbumImg = document.createElement("img"); 
            myAlbumImg.src = this.user.album[index].url;
            // myAlbumImg.alt = this.user.album[index].altText;
            myAlbumImg.id = this.user.album[index].id;
            
            myAlbumImg.classList.add("gifPictures");   
            smallDiv.appendChild(myAlbumImg);
            topRight.style.justifyContent = "space-around";
            smallDiv.style.margin = "4px";

            let myOtherPop = document.createElement("div");
            myOtherPop.id = ("myOtherPop");
            topRight.appendChild(myOtherPop);
            myOtherPop.style.display = "none";
            
            let myNewBotton = document.createElement("button");
            myNewBotton.id = ("myBtn");
            myOtherPop.appendChild(myNewBotton);
            let mySpan = document.createElement("span");
            mySpan.innerHTML = "X";
            mySpan.id = "mySpan";
            myNewBotton.appendChild(mySpan);
            let myLeftArrow = document.createElement("a");
            myLeftArrow.innerHTML = "<";
            myLeftArrow.id = ("myLeft");
            let myRightArrow = document.createElement("a");
            myRightArrow.id = ("myRight");
            myRightArrow.innerHTML = ">";


     

             myAlbumImg.addEventListener("click" ,function(e){
                 myOtherPop.style.display = "grid"; 
                 let popImg = document.createElement("img");
                 popImg.src = e.target.src;
                 popImg.alt = e.target.alt;
                 popImg.id = e.target.id;
                 popImg.style.width = "100%";
                 popImg.style.height = "100%";
                 popImg.style.objectFit = "cover";
                 myOtherPop.append(popImg,myNewBotton,myLeftArrow, myRightArrow);



             })
           


                myNewBotton.addEventListener("click", function() {
                    myOtherPop.style.display = "none";
             
                })
           } 


            $(document).on("click", "#myRight", (event) => {
                let myNext = parseInt($(event.target).siblings("img").attr("id")) + 1;
                if (myNext == 10) myNext = 0;
                let nextImage = this.user.album.find(photo => photo.id === myNext);
                $(event.target).siblings("img").attr("src", nextImage.url);
                $(event.target).siblings("img").attr("id", nextImage.id);
            })
    
            $(document).on("click", "#myLeft", (event) => {
                let myNext = parseInt($(event.target).siblings("img").attr("id")) - 1;
                if (myNext == -1) myNext = 9;
                let nextImage = this.user.album.find(photo => photo.id === myNext);
                $(event.target).siblings("img").attr("src", nextImage.url);
                $(event.target).siblings("img").attr("id", nextImage.id);
            })
        }



    this.renderRight = function() {
        this.renderAbout();
        this.renderStories();
        
    }
       
    this.renderAbout = function() {
        var aboutMe = document.createElement("p");
        aboutMe.textContent = "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        bottomLeft.appendChild(aboutMe);
        aboutMe.style.fontFamily = "Arial, Helvetica, sans-serif";
        aboutMe.style.textAlign = "center";
        aboutMe.style.textOverflow = "initial"
        aboutMe.style.fontSize = "18px";
       aboutMe.style.padding = "20px 20px 3px 20px";
       
    }
 
    this.renderStories = function() {
        for (var index = 0; index < 5; index++) {
            var gridDiv = document.createElement("div");
            var gridDivLeft = document.createElement("div");
            var gridRight = document.createElement("div");
            var gridRightRight = document.createElement("div");
            var gridPup = document.createElement("p");
            var gridH = document.createElement("h1");
            var myGridPic = document.createElement("p");
            gridDiv.classList.add("gridDiv");
            gridDiv.style.width = "90%"; 
            gridDiv.style.height = "62.4px";
            gridDiv.style.margin = "0 auto";
            bottomRight.appendChild(gridDiv); 
            gridDiv.style.display = "flex";
            bottomRight.style.justifyContent = "space-around";
            gridDiv.id = "gridDi";
            gridDiv.classList.add("gridDiv");

            gridDiv.append(gridDivLeft);
            gridDivLeft.style.width = "15%";
            // gridDivLeft.style.height = "100%";
            gridDivLeft.style.display = "flex";
            gridDivLeft.style.justifyContent = "center";
            gridDivLeft.style.alignItems = "center";

            var stoPic = document.createElement("div");
            gridDivLeft.appendChild(stoPic);
            stoPic.style.height = "80%";
            stoPic.style.width = "40%";

            var storyP = document.createElement("img");
            storyP.src = "Gymshark_Social_Media_Strategy.jpg";
            stoPic.appendChild(storyP);
            storyP.style.height = "100%";
            storyP.style.width = "100%";
            storyP.style.borderRadius = "50%";
            storyP.style.objectFit = "cover";

            gridDiv.append(gridRight);
            gridRight.style.width = "65%";
            // gridRight.style.borderLeft = "1px solid #3366ff";
            gridRight.style.paddingLeft = "30px";
            gridRight.style.display = "flex";
            gridRight.style.flexDirection = "column";
            gridRight.style.justifyContent = "space-evenly";
            gridRight.id = "midle";

            gridRight.append(gridPup);
            gridPup.textContent = "Click here to accept this event!";
            gridPup.style.margin = "0";
            gridPup.style.cursor = "pointer";
            gridPup.style.fontFamily = "Arial, Helvetica, sans-serif";
            gridPup.style.fontWeight = "bold";
            gridPup.style.color = "#33adff";

            gridRight.appendChild(gridH);
            gridH.textContent = "This is an envent, if you don't like it click close button !!!";
            gridH.id = "gymSite";
            gridH.style.fontSize = "22px";
            gridH.style.margin = "0";
            gridH.style.fontFamily = "Arial, Helvetica, sans-serif";
            gridH.style.fontWeight = "bold";
            gridPup.onclick = function open() {

            window.open("https://www.gymshark.com/", "_new");
             } 
             
            gridDiv.appendChild(gridRightRight);
            gridRightRight.style.width = "15%";

            gridRightRight.style.display = "flex";
            gridRightRight.style.justifyContent = "center";
            gridRightRight.style.alignItems = "center";
            gridRightRight.className = ("grRi");

            var closeBtn = document.createElement("button");
            closeBtn.id = "button";
            gridRightRight.appendChild(closeBtn);
            closeBtn.style.width = "80%";
            closeBtn.style.height = "50%";
            closeBtn.innerText = "CLOSE EVENT";
            closeBtn.style.fontFamily = "Arial, Helvetica, sans-serif";
            closeBtn.style.fontWeight = "bold";
            closeBtn.style.cursor = "pointer";
            closeBtn.style.border = "1px solid black";
            closeBtn.style.backgroundColor = "#ebebe0";

            myGridPic.innerHTML = this.user.mystory.description;
            myGridPic.style.fontFamily = "Arial, Helvetica, sans-serif";
            myGridPic.style.margin = "0";
            gridRight.appendChild(myGridPic);
            gridDiv.style.border = "solid #3366ff 1px";
            myGridPic.style.display = "flex";
            gridDiv.style.borderRadius = "20px";
            
                

            $("#button") .mouseover (function(){
                this.style.backgroundColor = "black";
                this.style.color = "white";
                this.innerText = "CLOSE"
            });

            $("#button") .mouseleave (function(){
                this.style.backgroundColor = "#ebebe0";
                this.style.color = "black";
                this.innerText = "CLOSE EVENT"
                this.style.border = "1px solid black";
                
            });
            

            $("button") .on ("click", function(){
                $(this).closest(".gridDiv").empty();
            });
            
        }
         }
        
        $(".myAlbumImg").on("click",function(){
            $(this).closest(".smallDiv").remove();
        

        });
    }
  
