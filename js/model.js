var model = {

    loadField: document.getElementById("field"),
    gameLive: true,

    createField: function(index) {
        this.sizeOfField(index);
        controller.initField();
        var counter = 0;
        for (var i = 0; i < sizeOfThree; i++) {
            for (var j = 0; j < index; j++) {
                var div = document.createElement('div');
                div.className = "box";
                div.id = "pole" + counter;
                counter++;
                div.onclick = controller.click;
                this.loadField.appendChild(div);
            }
        }
    },

    sizeOfField: function(index) {
        var loadField = this.loadField;
        sizeOfThree = index;
        sizeOfFive = index * index;
        if (index === 3) {
            loadField.classList.remove('fieldOfFive');
            loadField.classList.add('fieldOfThree');
        } else {
            loadField.classList.remove('fieldOfThree');
            loadField.classList.add('fieldOfFive');
        }
    },

    randNum: function(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },

// bot
    AI: function() {
        // console.log("run AI");
        var rand = this.randNum(0, sizeOfFive - 1);
        var elem = document.getElementById(controller.id + rand);
        if (elem.innerHTML === 'X' || elem.innerHTML === 'O') {
            this.AI();// debugger;
        } else {
            elem.innerHTML = 'O';
        }
    }


    // number: 0,

    // calculate: function(x, y) {
    //  this.number = x * y;
    //  var result = this.number;

    //  view.showNumber(result);
    // }

};