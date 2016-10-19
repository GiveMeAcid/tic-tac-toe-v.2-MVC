function Controller() {
	
}





//function of pressing and calling "Х"
function click(event) {
    var target_element = document.getElementById(event.target.id);
    if (!target_element.value.length) {
        target_element.value = 'X';
        checkEndGame();
        if (gameLive) {
            AI();
            // debugger;
        }
    }
    bku();
    checkForVictory();
}

// bot
function AI() {
    // console.log("run AI");
    var rand = randNum(0, doubleSizeOfField - 1);
    var elem = document.getElementById(id + rand);
    if (elem.value === 'X' || elem.value === 'O') {
        AI();// debugger;
    } else {
        elem.value = 'O';
    }
}

//reloading function
function initField() {
    load_zone.innerHTML = '';
    var gameLive = true;
    var checkingMassive = [];
}



function bku() {
    localDocument = document;
    checkingMassive = [];
    for (var i = 0; i < doubleSizeOfField; i++) {
        checkingMassive[i]  = localDocument.getElementById(id + i).value;
    }
    console.log(checkingMassive);
}

//function that checking for victory through the "if" statements
function checkForVictory() {
    localDocument = document;
    if (localDocument.getElementById(id + '0').value === "X" && localDocument.getElementById(id + 1).value === "X" && localDocument.getElementById(id + 2).value === "X") {
        alert("X win");
        initField();
        createField(sizeOfField);
    }
    else if (localDocument.getElementById(id + 3).value === "X" && localDocument.getElementById(id + 4).value === "X" && localDocument.getElementById(id + 5).value === "X") {
        alert("X win");
        initField();
        createField(sizeOfField);
    }
    else if (localDocument.getElementById(id + 6).value === "X" && localDocument.getElementById(id + 7).value === "X" && localDocument.getElementById(id + 8).value === "X") {
        alert("X win");
        initField();
        createField(sizeOfField);
    }
    else if (localDocument.getElementById(id + 0).value === "X" && localDocument.getElementById(id + 4).value === "X" && localDocument.getElementById(id + 8).value === "X") {
        alert("X win");
        initField();
        createField(sizeOfField);
    }
    else if (localDocument.getElementById(id + 2).value === "X" && localDocument.getElementById(id + 4).value === "X" && localDocument.getElementById(id + 6).value === "X") {
        alert("X win");
        initField();
        createField(sizeOfField);
    }
    else if (localDocument.getElementById(id + 0).value === "X" && localDocument.getElementById(id + 3).value === "X" && localDocument.getElementById(id + 6).value === "X") {
        alert("X win");
        initField();
        createField(sizeOfField);
    }
    else if (localDocument.getElementById(id + 1).value === "X" && localDocument.getElementById(id + 4).value === "X" && localDocument.getElementById(id + 7).value === "X") {
        alert("X win");
        initField();
        createField(sizeOfField);
    }
    else if (localDocument.getElementById(id + 2).value === "X" && localDocument.getElementById(id + 5).value === "X" && localDocument.getElementById(id + 8).value === "X") {
        alert("X win");
        initField();
        createField(sizeOfField);
    }
}

//function check for End Game
function checkEndGame() {
    var count = 0;

    for (var i = 0; i < doubleSizeOfField; i++) {
        if (!document.getElementById(id + i).value) {
            ++count;
        }
    }

    if (count === 0) {
        gameLive = false;
        alert('game over');
        initField();
    }
}