var model = {

    loadField: document.getElementById("field"),
    gameLive: true,
    index: 0,
    maxLength: 0,

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
        this.index = index;
        sizeOfThree = index;
        sizeOfFive = index * index;
        if (index === 3) {
            loadField.classList.remove('fieldOfFive');
            loadField.classList.add('fieldOfThree');
            this.index = [
                          [0,1,2], [0,3,6], [0,4,8],
                          [3,4,5], [1,4,7], [2,4,6],
                          [6,7,8], [2,4,8]               
                         ];
            this.maxLength = index;
        } else {
            loadField.classList.remove('fieldOfThree');
            loadField.classList.add('fieldOfFive');
            this.index = [   
                          [ 0, 1, 2, 3, 4], [0,5,10,15,20], [0,6,12,18,24],
                          [ 5, 6, 7, 8, 9], [1,6,11,16,21], [4,8,12,16,20],
                          [10,11,12,13,14], [2,7,12,17,22],
                          [15,16,17,18,19], [3,8,13,18,23],
                          [20,21,22,23,24], [4,9,14,19,24]
                         ];
            this.maxLength = index;
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
};