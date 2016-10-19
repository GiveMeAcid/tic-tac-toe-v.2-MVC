// var view = {

// 	// showNumber: function(n) {
// 	// 	var el = document.getElementById("showResult");
// 	// 	el.innerHTML = n;
// 	// }

// };

var controller = {

	// handleClick: function() {
	// 	model.calculate(2, 6);
	// }
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
	    // var localDocument = document;
	    if (document.getElementById(this.id + '0').innerHTML === "X" && document.getElementById(this.id + 1).innerHTML === "X" && document.getElementById(this.id + 2).innerHTML === "X") {
	        alert("X win");
	        this.initField();
	        model.createField(sizeOfThree);
	    }
	    else if (document.getElementById(this.id + 3).innerHTML === "X" && document.getElementById(this.id + 4).innerHTML === "X" && document.getElementById(this.id + 5).innerHTML === "X") {
	        alert("X win");
	        this.initField();
	        model.createField(sizeOfThree);
	    }
	    else if (document.getElementById(this.id + 6).innerHTML === "X" && document.getElementById(this.id + 7).innerHTML === "X" && document.getElementById(this.id + 8).innerHTML === "X") {
	        alert("X win");
	        this.initField();
	        model.createField(sizeOfThree);
	    }
	    else if (document.getElementById(this.id + 0).innerHTML === "X" && document.getElementById(this.id + 4).innerHTML === "X" && document.getElementById(this.id + 8).innerHTML === "X") {
	        alert("X win");
	        this.initField();
	        model.createField(sizeOfThree);
	    }
	    else if (document.getElementById(this.id + 2).innerHTML === "X" && document.getElementById(this.id + 4).innerHTML === "X" && document.getElementById(this.id + 6).innerHTML === "X") {
	        alert("X win");
	        this.initField();
	        model.createField(sizeOfThree);
	    }
	    else if (document.getElementById(this.id + 0).innerHTML === "X" && document.getElementById(this.id + 3).innerHTML === "X" && document.getElementById(this.id + 6).innerHTML === "X") {
	        alert("X win");
	        this.initField();
	        model.createField(sizeOfThree);
	    }
	    else if (document.getElementById(this.id + 1).innerHTML === "X" && document.getElementById(this.id + 4).innerHTML === "X" && document.getElementById(this.id + 7).innerHTML === "X") {
	        alert("X win");
	        this.initField();
	        model.createField(sizeOfThree);
	    }
	    else if (document.getElementById(this.id + 2).innerHTML === "X" && document.getElementById(this.id + 5).innerHTML === "X" && document.getElementById(this.id + 8).innerHTML === "X") {
	        alert("X win");
	        this.initField();
	        model.createField(sizeOfThree);
	    }
	}

};


// (function() {


// 	// var app = {
		
// 	// 	init: function() {
// 	// 		this.main();
// 	// 		this.event();
// 	// 	},

// 	// 	main: function() {

// 	// 	},

// 	// 	event: function() {
// 	// 		var el = document.getElementById("calcUser");
// 	// 		el.onclick = controller.handleClick();

// 	// 	}

// 	// };

// 	// app.init();


// }());

















































// function Controller() {

// 	var load_zone = document.getElementById('fieldOne');//getElementById
// 	var document;
// 	var id = "pole";
// 	var gameLive;
// 	var sizeOfField;
// 	var doubleSizeOfField;
// 	var checkingMassive;

// 	function createField(index) {
// 	    console.log(index);
// 	    fieldSize(index);
// 	    initField();
// 	    var counter = 0;
// 	    for (var i = 0; i < sizeOfField; i++) {
// 	        for (var j = 0; j < index; j++) {
// 	            var div = document.createElement('div');
// 	            div.className = "box";
// 	            var newInput = document.createElement('input');
// 	            newInput.type = "text";
// 	            newInput.readOnly = true;
// 	            newInput.id = id + counter;
// 	            counter++;
// 	            newInput.onclick = click;
// 	            div.appendChild(newInput);
// 	            load_zone.appendChild(div);
// 	        }
// 	    }
// 	    document = document;
// 	    console.log(document.getElementById('pole1'));
// 	    console.log(document);
// 	}

// //dynamic size of field
// 	function fieldSize(index) {
// 	    sizeOfField = index;
// 	    doubleSizeOfField = index * index;
// 	    gameLive = true;
// 	    if (index === 3) {
// 	        load_zone.classList.remove('fieldTwo');
// 	        load_zone.classList.add('fieldOne');
// 	    } else {
// 	        load_zone.classList.remove('fieldOne');
// 	        load_zone.classList.add('fieldTwo');
// 	    }
// 	}
// }

// Controller();