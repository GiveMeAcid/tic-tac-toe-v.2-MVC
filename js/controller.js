var controller = {

    id: "pole",

    buttonClick: function(index) {
        model.sizeOfField(index);
        model.createField(index);
    },

    //function of pressing and calling "Х"
    click: function(event) {
        console.log(event);
        var targetElement = document.getElementById(event.target.id);
        console.log(event.target.id);
        if (targetElement.innerHTML == "") {
            targetElement.innerHTML = 'X';
            // checkEndGame();
            if (model.gameLive) {
                model.AI();
                // debugger;
            }
        }
        controller.checkForVictory();
    },

    initField: function() {
        model.loadField.innerHTML = '';
        var gameLive = true;
    },

    checkForVictory: function() {
        var localDocument = document.getElementsByClassName("box");
             
        if (localDocument[0,1,2].innerHTML === "X" || localDocument[3,4,5].innerHTML === "X" || localDocument[6,7,8].innerHTML === "X") {
            alert("X win");
            this.initField();
            model.createField(sizeOfThree);
        }

        else if (localDocument[0].innerHTML === "X" && localDocument[4].innerHTML === "X" && localDocument[8].innerHTML === "X") {
            alert("X win");
            this.initField();
            model.createField(sizeOfThree);
        }
        else if (localDocument[2].innerHTML === "X" && localDocument[4].innerHTML === "X" && localDocument[6].innerHTML === "X") {
            alert("X win");
            this.initField();
            model.createField(sizeOfThree);
        }
        else if (localDocument[0].innerHTML === "X" && localDocument[3].innerHTML === "X" && localDocument[6].innerHTML === "X") {
            alert("X win");
            this.initField();
            model.createField(sizeOfThree);
        }
        else if (localDocument[1].innerHTML === "X" && localDocument[4].innerHTML === "X" && localDocument[7].innerHTML === "X") {
            alert("X win");
            this.initField();
            model.createField(sizeOfThree);
        }
        else if (localDocument[2].innerHTML === "X" && localDocument[5].innerHTML === "X" && localDocument[8].innerHTML === "X") {
            alert("X win");
            this.initField();
            model.createField(sizeOfThree);
        }
    }

};
