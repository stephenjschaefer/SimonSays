// Write your Javascript code.

//Global Variables
var moveArray;
var clickCount = 0;
var clickLimit = 1;
var mode = "START";

//Flash Triangle
function applyFlash(e, direction) {
    if (e != null) {
        e.preventDefault();
    }

    $("#triangle-" + direction).addClass("flash-" + direction);

    setTimeout(function () {
        $("#triangle-" + direction).removeClass("flash-" + direction);
    }, 1000);
}

//Check If Game Was Won
function checkWin() {
    if (clickCount > 20) {
        return true;
    } else {
        return false;
    }
}

//Check If A Pattern Was Matched Successfully
function checkPattern() {
    if (clickCount == clickLimit) {
        return true;
    } else {
        return false;
    }
}

//Check If It's The Players Turn
function isPlayerMode() {
    if (mode == "PLAYER") {
        return true;
    } else {
        return false;
    }
}

//Restart A New Game
function newGame() {
    mode = "END";
    setTimeout(function () {
        window.location.href = "../../";
    }, 5000);
}


//Check Player Move
function checkMove(value) {
    if (isPlayerMode()) {
        if (checkWin()) {
            setMessage("Congradulations, You Win!");
            newGame();
        } else {
            if (moveArray[clickCount] != value) {
                setMessage("Sorry, You Lost!");
                newGame();
            } else {
                clickCount++;
            }
        }                    
        if (checkPattern()) {
            setMessage("That's Correct, Nice Job!");
            clickLimit++;
            setTimeout(function () {
                showMoves(moveArray);
            }, 2000);
        }
    }
}

//Establish Triangle On Click Event Handlers
$(document).ready(function () {
    $("#triangle-up").click(function (e) {
        applyFlash(e, "up");
        checkMove(0);
    });

    $("#triangle-right").click(function (e) {
        applyFlash(e, "right");
        checkMove(1);
    });

    $("#triangle-down").click(function (e) {
        applyFlash(e, "down");
        checkMove(2);
    });

    $("#triangle-left").click(function (e) {
        applyFlash(e, "left");
        checkMove(3);
    });
});

//Establish Arrow Keypress Event Handlers
$(document).keydown(function (e) {
    switch(e.keyCode) {
        case 38:
            applyFlash(e, "up");
            checkMove(0);
            break;
        case 39:
            applyFlash(e, "right");
            checkMove(1);
            break;
        case 40:
            applyFlash(e, "down");
            checkMove(2);
            break;
        case 37:
            applyFlash(e, "left");
            checkMove(3);
            break;
        case 13:
            //TODO: Start Game
            break;
        default:
            break;
    }
});

//Show Moves
function showMoves(moves) {
    moveArray = moves;
    clickCount = 0;
    mode = "CPU";
    setMessage("Watch Carefully!");
    var timeout = 1500;
    setTimeout(function () {
        for (var i = 0; i < clickLimit; i++) {
            timeout = 1000 + (1500 * i + 1);
            switch (moves[i]) {
                case 0:
                    setTimeout(function () {
                        applyFlash(null, "up")
                    }, timeout);
                    break;
                case 1:
                    setTimeout(function () {
                        applyFlash(null, "right")
                    }, timeout);
                    break;
                case 2:
                    setTimeout(function () {
                        applyFlash(null, "down")
                    }, timeout);
                    break;
                case 3:
                    setTimeout(function () {
                        applyFlash(null, "left")
                    }, timeout);
                    break;
                default:
                    break;
            }
        }
        setTimeout(function () {
            setMessage("Ok, Your Turn!");
            mode = "PLAYER";
        }, timeout + 1000);
    }, timeout);
    
    
}

//Set status message text
function setMessage(message) {
    $("#message").fadeTo(1000, 0);
    setTimeout(function () {
        $("#message").text(message);
        $("#message").fadeTo(1000, 1);
    }, 1500);
}