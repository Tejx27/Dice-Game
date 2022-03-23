// This Is Code For Image Section First...

var randomno1=Math.floor(Math.random()*6)+1;//1-6

var randomImageSource="images/dice"+ randomno1 +".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


// This Is Code For Image Section Second...

var randomno2=Math.floor(Math.random()*6)+1;

var randomDiceImage="images/dice"+ randomno2 +".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage);

// In this Code Palyer 1 is Win!!!!
if(randomno1 > randomno2){
  document.querySelector("h2").innerHTML="🚩 Payer1 Win!!!"
}
// In This Code Ther Are Two Dices Are Same Then It will Draw!!
else if(randomno1===randomno2){
  document.querySelector("h2").innerHTML="Draw!!"
}
// In this Code Palyer 2 is Win!!!!
else{
  document.querySelector("h2").innerHTML="🚩 Payer2 Win!!!"
}
