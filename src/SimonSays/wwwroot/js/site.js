// Write your Javascript code.

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

//Establish Triangle On Click Event Handlers
$(document).ready(function () {
    $("#triangle-up").click(function (e) {
        applyFlash(e, "up");
    });

    $("#triangle-down").click(function (e) {
        applyFlash(e, "down");
    });

    $("#triangle-right").click(function (e) {
        applyFlash(e, "right");
    });

    $("#triangle-left").click(function (e) {
        applyFlash(e, "left");
    });
});

//Establish Arrow Keypress Event Handlers
$(document).keydown(function (e) {
    switch(e.keyCode) {
        case 38:
            applyFlash(e, "up");
            break;
        case 39:
            applyFlash(e, "right");
            break;
        case 40:
            applyFlash(e, "down");
            break;
        case 37:
            applyFlash(e, "left");
            break;
        case 13:
            //TODO: Start Game
            break;
        default:
            break;
    }
});

//Show Moves
function showMoves(moves, count) {
    setMessage("Watch Carefully!");
    var timeout = 2000;
    setTimeout(function () {
        for (var i = 0; i < count; i++) {
            timeout = 2000 + (1500 * i + 1);
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
        }, timeout + 2000);
    }, timeout);
    
    
}

function setMessage(message) {
    $("#message").fadeTo(1000, 0);
    setTimeout(function () {
        $("#message").text(message);
        $("#message").fadeTo(1000, 1);
    }, 1500);
}