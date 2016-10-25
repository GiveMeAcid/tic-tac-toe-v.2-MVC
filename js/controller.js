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

    checkFunc: function(array) {
        var localDocument = document.getElementsByClassName("box");
        var counter = 0;
        var maxLength = array[0][0].length;
        // console.log(maxLength);
        for (var i = 0; i < array.length; i++) {
            
            console.log(array[i][0]);
            console.log(localDocument[array[i][0]]);
            console.log((localDocument[array[i][0]]).innerHTML);
            // debugger;
            var firstElement = (localDocument[array[i][0]]).innerHTML;
            counter = 0;
            for (var j = 0; j < array[i].length; j++) {
                if (firstElement == localDocument[array[i][j]].innerHTML && localDocument[array[i][j]].innerHTML.length && firstElement.length) {
                   ++counter; 
                }

                if (counter == model.maxLength) {
                    return {
                        status: false,
                        target: firstElement
                    };
                }
            }
        }
        return {
            status: true
        };
    },

    checkForVictory: function() {
        var localDocument = document.getElementsByClassName("box");
                                                                       
        var checkingArray = this.checkFunc(model.index);

        if (!checkingArray.status) {
            alert(checkingArray.target + " win");
            this.initField();
            model.createField(model.maxLength);
        } 
             
        // if (localDocument[0].innerHTML === "X" && localDocument[1].innerHTML === "X" && localDocument[2].innerHTML === "X") {
        //     alert("X win");
        //     this.initField();
        //     model.createField(sizeOfThree);
        // }
        // else if (localDocument[3].innerHTML === "X" && localDocument[4].innerHTML === "X" && localDocument[5].innerHTML === "X") {
        //     alert("X win");
        //     this.initField();
        //     model.createField(sizeOfThree);
        // }
        // else if (localDocument[6].innerHTML === "X" && localDocument[7].innerHTML === "X" && localDocument[8].innerHTML === "X") {
        //     alert("X win");
        //     this.initField();
        //     model.createField(sizeOfThree);
        // }
        // else if (localDocument[0].innerHTML === "X" && localDocument[4].innerHTML === "X" && localDocument[8].innerHTML === "X") {
        //     alert("X win");
        //     this.initField();
        //     model.createField(sizeOfThree);
        // }
        // else if (localDocument[2].innerHTML === "X" && localDocument[4].innerHTML === "X" && localDocument[6].innerHTML === "X") {
        //     alert("X win");
        //     this.initField();
        //     model.createField(sizeOfThree);
        // }
        // else if (localDocument[0].innerHTML === "X" && localDocument[3].innerHTML === "X" && localDocument[6].innerHTML === "X") {
        //     alert("X win");
        //     this.initField();
        //     model.createField(sizeOfThree);
        // }
        // else if (localDocument[1].innerHTML === "X" && localDocument[4].innerHTML === "X" && localDocument[7].innerHTML === "X") {
        //     alert("X win");
        //     this.initField();
        //     model.createField(sizeOfThree);
        // }
        // else if (localDocument[2].innerHTML === "X" && localDocument[5].innerHTML === "X" && localDocument[8].innerHTML === "X") {
        //     alert("X win");
        //     this.initField();
        //     model.createField(sizeOfThree);
        // }
    }
};
