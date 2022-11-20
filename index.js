
var randomNumber1= (Math.random()*6)+1;
randomNumber1 = Math.floor(randomNumber1);
var randomDiceImage1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

var randomNumber2= Math.random()*6+1;
randomNumber2 = Math.floor(randomNumber2);
document.getElementsByClassName("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>= randomNumber2){
    document.querySelector("h1").innerHTML= "Play 1 Wins";
}
 else if(randomNumber1<= randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 Wins";
 }

 else{
    document.querySelector("h1").innerHTML= "Draws";
 }