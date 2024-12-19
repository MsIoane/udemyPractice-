let randomNumber1 = Math.floor((Math.random() * 6)) + 1 
let randomNumber2 = Math.floor((Math.random() * 6)) + 1 

let playerOneDice = document.getElementsByClassName("img1")[0]
let playerTwoDice = document.querySelector(".img2")

playerOneDice.src = 'images/' + randomNumber1 + '.png';
playerTwoDice.src = 'images/' + randomNumber2 + '.png';

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Pllayer 1 Wins!🚩"
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Pllayer 2 Wins!🚩"
}