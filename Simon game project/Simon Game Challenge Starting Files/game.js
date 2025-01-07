let gamePattern = [];
let userClickedPattern= [];
let buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4)
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
$(".btn").click( function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
})

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")
    setTimeout(() => {$("#" + currentColour).removeClass("pressed")}, 50)
}
