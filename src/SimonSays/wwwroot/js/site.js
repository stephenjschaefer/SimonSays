// Write your Javascript code.

//Global Variables
var moveArray;
var clickCount = 0;
var clickLimit = 1;
var clickTotal = 20;
var mode = "START";

//Flash Triangle And Play Sound
function applyFlash(e, direction) {
    if (e != null) {
        e.preventDefault();
    }

    var sound;

    switch (direction) {
        case "up":
            sound = $(".sound0")[0];
            break;
        case "right":
            sound = $(".sound1")[0];
            break;
        case "down":
            sound = $(".sound2")[0];
            break;
        case "left":
            sound = $(".sound3")[0];
            break;
        default:
            break;
    }

    $("#triangle-" + direction).addClass("flash-" + direction);

    sound.currentTime = 0;
    sound.play();

    setTimeout(function () {
        $("#triangle-" + direction).removeClass("flash-" + direction);
    }, 1000);
}

//Check If Game Was Won
function checkWin() {
    if (clickLimit > clickTotal) {
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
       if (moveArray[clickCount] != value) {
           setMessage("Sorry, You Lost!");
           newGame();
       } else {
           clickCount++;
       }                    
       if (checkPattern()) {
          setMessage("That's Correct, Nice Job!");
          $("#score").text(clickLimit);
          clickLimit++;
          if (checkWin()) {
              mode = "END";
              setMessage("Congradulations, You Win!");
              setTimeout(function () {
                  newGame();
              }, 10000);
          } else {
              setTimeout(function () {
                  showMoves(moveArray);
              }, 2750);
          }
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
    var timeout = 1250 - (clickLimit * 100);
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
        }, timeout);
    }, timeout);
    
    
}

//Set status message text
function setMessage(message) {
    $("#message").fadeTo(500, 0);
    setTimeout(function () {
        $("#message").text(message);
        $("#message").fadeTo(500, 1);
    }, 1500);
}