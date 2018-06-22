$(".links").click(function(event) {
    event.preventDefault();
    document.getElementById("meow").play();
    $("#eye1").attr("src", "assets/images/eyeRed.png");
    $("#eye2").attr("src", "assets/images/eyeRed.png");
    $(document).unbind();
    $("#laser1").css("display", "inline");
    $("#laser2").css("display", "inline");
    var hitY = event.pageY;
    var hitX = event.pageX;
    var originX1 = parseInt($("#eye1").css("left")) + 20;
    var originY1 = parseInt($("#eye1").css("top")) + 20;
    var originX2 = parseInt($("#eye2").css("left")) + 20;
    var originY2 = parseInt($("#eye2").css("top")) + 20;
    if (hitY > originY1) {
        var lengthY1 = hitY - originY1;
        var lengthY2 = hitY - originY2;
    } else {
        var lengthY1 = originY1 - hitY;
        var lengthY2 = originY2 - hitY;
    }
    var length1 = Math.sqrt(Math.pow(lengthY1, 2) + Math.pow(hitX - originX1, 2));
    var length2 = Math.sqrt(Math.pow(lengthY2, 2) + Math.pow(hitX - originX2, 2));
    $("#laser1").height(5);
    $("#laser2").height(5);
    $("#laser1").css("left", originX1.toString() + "px");
    $("#laser1").css("top", originY1.toString() + "px");
    $("#laser2").css("left", originX2.toString() + "px");
    $("#laser2").css("top", originY2.toString() + "px");
    var angle1 = Math.acos((hitX - originX1) / length1);
    var angle2 = Math.acos((hitX - originX2) / length2);
    if (hitY >= originY1) {
        $("#laser1").css("transform", "rotate(" + angle1.toString() + "rad)");
    } else {
        $("#laser1").css("transform", "rotate(" + (2 * Math.PI - angle1).toString() + "rad)");
    }
    if (hitY >= originY2) {
        $("#laser2").css("transform", "rotate(" + angle2.toString() + "rad)");
    } else {
        $("#laser2").css("transform", "rotate(" + (2 * Math.PI - angle2).toString() + "rad)");
    }
    sendLaser(length1, length2, event);
});

function sendLaser(length1, length2, event) {
    $("#laser1").width(length1 * .1);
    $("#laser2").width(length2 * .1);
    setTimeout(function() {
        $("#laser1").width(length1 * .2);
        $("#laser2").width(length2 * .2);
    }, 100);
    setTimeout(function() {
        $("#laser1").width(length1 * .3);
        $("#laser2").width(length2 * .3);
    }, 200);
    setTimeout(function() {
        $("#laser1").width(length1 * .4);
        $("#laser2").width(length2 * .4);
        document.getElementById("laserSound").play();
    }, 300);
    setTimeout(function() {
        $("#laser1").width(length1 * .5);
        $("#laser2").width(length2 * .5);
    }, 400);
    setTimeout(function() {
        $("#laser1").width(length1 * .6);
        $("#laser2").width(length2 * .6);
    }, 500);
    setTimeout(function() {
        $("#laser1").width(length1 * .7);
        $("#laser2").width(length2 * .7);
    }, 600);
    setTimeout(function() {
        $("#laser1").width(length1 * .8);
        $("#laser2").width(length2 * .8);
    }, 700);
    setTimeout(function() {
        $("#laser1").width(length1 * .9);
        $("#laser2").width(length2 * .9);
    }, 800);
    setTimeout(function() {
        $("#laser1").width(length1);
        $("#laser2").width(length2);
    }, 900);
    setTimeout(function() {
        setEyes();
    }, 2900);
}