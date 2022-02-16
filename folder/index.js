gamePattern=[];

colors=["red","blue","yellow","green"];
var start=false;
var n=1;

// start game
$(document).keypress(function(){

if(!start){
nextSequence();
start=true;
}

});
document.addEventListener("touchstart",function(){
  if(!start){
  nextSequence();
  start=true;
  };
})
nextSequence

function nextSequence(){
clickedPattern=[];
var randomNumber=Math.floor(Math.random()*4);
randomColor=colors[randomNumber];          //randomColor===red;
gamePattern.push(randomColor);
$("#"+randomColor).fadeOut(300).fadeIn(200);
makeSound(randomColor);
$("h2").text("level "+n);
n++;
}
// detect  clicks
        $(".all").on("click",effect);

//detect button press

$(document).on("keypress",function(event){

switch (event.key) {
  case "r":
buttonSound("red");
makeSound("red");
    break;
    case "y":
    buttonSound("yellow");
    makeSound("yellow");
      break;
      case "b":
      buttonSound("blue");
      makeSound("blue");
        break;
        case "g":
        buttonSound("green");
        makeSound("green");
          break;
  default:}});
//check answer
var wrong=new Audio("folder/sounds/wrong.mp3");
function checkAnswer(long){            //long==clickedPattern==["red","blue","yellow"]
if(gamePattern[long-1]===clickedPattern[long-1]){
console.log("1st");
if(gamePattern.length===long){
clickedPattern=[];
setTimeout(function(){nextSequence();},500);
console.log("2nd");};}

else{ $("h2").text("Game over😭.kissu paro na.press any key to start")
start=false;
gameOver();
wrong.play()};

}

//  Game   over

function gameOver(){
$("body").addClass("game-over");
setTimeout(function(){
$("body").removeClass("game-over")},1700)
gamePattern=[];
n=1;
}

//makesound
function makeSound(name){
var soundName=new Audio("folder/sounds/"+name+".mp3");
switch (name) {
  case name:
    soundName.play();
    break;
  default:}}

// give effect

function effect(){
$(this).addClass("pressed");
var ID=(this.id)
setTimeout(function(){$("#"+ID).removeClass("pressed");},250);
makeSound(ID);
clickedPattern.push(ID);
checkAnswer(clickedPattern.length);
}

function buttonSound(nm){
  $("#"+nm).addClass("pressed");
  var In=nm;
  setTimeout(function(){$("#"+In).removeClass("pressed");},250);
clickedPattern.push(In);
checkAnswer(clickedPattern.length);
}
