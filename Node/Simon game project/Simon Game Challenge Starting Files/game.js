let gamePattern = [];
let userClickedPattern= [];
let buttonColours = ["red", "blue", "green", "yellow"];
var started = false; 
var level = 0;

$(".btn").click( function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("succes");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else{
       playSound("wrong");
       $("body").addClass("game-over")
       setTimeout(() => {$("body").removeClass("game-over")}, 200)
       started = false; 
       $("#level-title").text("Game over! Press any key to restart");
       level = 0; 
       gamePattern = [];
       userClickedPattern = [];
    }
}

function nextSequence(){
    userClickedPattern = []; 
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    $("#level-title").text("Level " + level);
    level++;
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")
    setTimeout(() => {$("#" + currentColour).removeClass("pressed")}, 50)
}

$(document).on("keypress", () =>{
    if(started == false){
        started = true; 
        nextSequence();
    }
})
