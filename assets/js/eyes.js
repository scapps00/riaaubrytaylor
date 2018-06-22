function calcX1(x, y, left) {
    var length = Math.sqrt(Math.pow(left - x, 2) + Math.pow(233 - y, 2));
    var proportion = 10 / length;
    var height = Math.abs(x - left) * proportion;
    if (x < left) {
        var xCord = left - height;
    } else if (x > left) {
        var xCord = left + height;
    } else if (x == left) {
        var xCord = left;
    }
    return xCord;
}

function calcY1(x, y, left) {
    var length = Math.sqrt(Math.pow(left - x, 2) + Math.pow(233 - y, 2));
    var proportion = 10 / length;
    var width = Math.abs(y - 233) * proportion;
    if (y < 233) {
        var yCord = 233 - width;
    } else if (y > 233) {
        var yCord = 233 + width;
    } else if (y == 233){
        var yCord = 233;
    }
    return yCord;
}

function calcX2(x, y, right) {
    var length = Math.sqrt(Math.pow(right - x, 2) + Math.pow(233 - y, 2));
    var proportion = 10 / length;
    var height = Math.abs(x - right) * proportion;
    if (x < right) {
        var xCord = right - height;
    } else if (x > right) {
        var xCord = right + height;
    } else if (x == right) {
        var xCord = right;
    }
    return xCord;
}

function calcY2(x, y, right) {
    var length = Math.sqrt(Math.pow(right - x, 2) + Math.pow(233 - y, 2));
    var proportion = 10 / length;
    var width = Math.abs(y - 233) * proportion;
    if (y < 233) {
        var yCord = 233 - width;
    } else if (y > 233) {
        var yCord = 233 + width;
    } else if (y == 233){
        var yCord = 233;
    }
    return yCord;
}

function eye1Pos() {
    var windowWidth = $(window).width();
    var catLeft = Math.floor(windowWidth / 4 - 200);
    return catLeft + 110;
}

function eye2Pos() {
    var windowWidth = $(window).width();
    var catRight = Math.floor(windowWidth / 4 + 200);
    return catRight - 145;
}

function setEyes() {
    $("#laser1").css("display", "none");
    $("#laser2").css("display", "none");
    $("#eye1").attr("src", "assets/images/eye.png");
    $("#eye2").attr("src", "assets/images/eye.png");
    $(document).on("mousemove", function(event) {
        $("#eye1").css("top", calcY1(event.pageX, event.pageY, eye1Pos()) + "px");
        $("#eye1").css("left", calcX1(event.pageX, event.pageY, eye1Pos()) + "px");
    });

    $(window).resize(function(event) {
        $("#eye1").css("top", calcY1(event.pageX, event.pageY, eye1Pos()) + "px");
        $("#eye1").css("left", calcX1(event.pageX, event.pageY, eye1Pos()) + "px");
    });

    $(document).on("mousemove", function(event) {
        $("#eye2").css("top", calcY2(event.pageX, event.pageY, eye2Pos()) + "px");
        $("#eye2").css("left", calcX2(event.pageX, event.pageY, eye2Pos()) + "px");
    });

    $(window).resize(function(event) {
        $("#eye2").css("top", calcY2(event.pageX, event.pageY, eye2Pos()) + "px");
        $("#eye2").css("left", calcX2(event.pageX, event.pageY, eye2Pos()) + "px");
    });
}

setEyes();