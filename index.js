var randomnum1=Math.floor((Math.random()*6)+1);
var randomnum2=Math.floor((Math.random()*6)+1);
var img1=document.querySelector(".img1");
var img2=document.querySelector(".img2");
switch(randomnum1){
    case 1:
        img1.setAttribute('src',"images/dice1.png");
        break;
    case 2:
        img1.setAttribute('src',"images/dice2.png");
        break;
    case 3:
        img1.setAttribute('src',"images/dice3.png");
        break;
    case 4:
        img1.setAttribute('src',"images/dice4.png");
        break;
    case 5:
       img1.setAttribute('src',"images/dice5.png");
        break;
    case 6:
       img1.setAttribute('src',"images/dice6.png");
        break;
}
switch(randomnum2){
    case 1:
        img2.setAttribute('src',"images/dice1.png");
        break;
    case 2:
        img2.setAttribute('src',"images/dice2.png");
        break;
    case 3:
        img2.setAttribute('src',"images/dice3.png");
        break;
    case 4:
        img2.setAttribute('src',"images/dice4.png");
        break;
    case 5:
       img2.setAttribute('src',"images/dice5.png");
        break;
    case 6:
       img2.setAttribute('src',"images/dice6.png");
        break;
}

if(randomnum1>randomnum2){
    document.querySelector("h1").textContent="Player1 Wins";
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").textContent="Player2 Wins";
}
else if(randomnum1===randomnum2){
    document.querySelector("h1").textContent="Draw";
}
