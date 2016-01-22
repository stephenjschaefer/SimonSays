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
function showMoves(moves) {
    alert("Moves: " + moves);
}