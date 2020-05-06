var clicked = false;
console.log(clicked);   

$("#button1").click(() => {
    if (clicked === false) {
        console.log("Yeah, you clicked me!");
        clicked = true;
    }
})

$("#button2").click(() => {
    if (clicked === false) {
        $("#button1").text("Change");
        clicked = true;
    }
})

var color = "blue";

$("#button3").click(() => {
    if (clicked === false) {
        color = $("#colors").val();
        console.log(color);
        $("button").css("background", color);
        clicked = true;
    }
})
