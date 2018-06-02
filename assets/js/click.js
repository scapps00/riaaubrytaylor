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
    if (hitY > originY1) {
        var lengthY = hitY - originY1;
    } else {
        var lengthY = originY1 - hitY;
    }
    var length = Math.sqrt(Math.pow(lengthY, 2) + Math.pow(hitX - originX1, 2));
    $("#laser1").width(length);
    $("#laser1").height(5);
    $("#laser1").css("left", originX1.toString() + "px");
    $("#laser1").css("top", originY1.toString() + "px");
    var angle = Math.acos((hitX - originX1) / length);
    console.log(angle);
    console.log(length);
    console.log(hitX - originX1);
    $("#laser1").css("transform", "rotate(" + angle.toString() + "rad)");
});