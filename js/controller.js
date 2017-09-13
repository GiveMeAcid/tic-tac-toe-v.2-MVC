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
    }
};
