const energy = 20;
const hunger = 50;
const happiness = 80;
let boredom = 10;
const sleepiness = 100;
document.getElementById("bored").style.width = boredom;
console.log("boredom is currently " + boredom);
const sleep = false;
let wiggles = 0;

const ballBounce = new Audio("audio/dodgeball.mp3");
const tonk = new Audio("audio/tink.mp3");

//Pertains to age. Every 9 wiggles is one age. The first age hatches, and later the boy will mature.
//doesn't work right now and I don't know why.
function wiggle(){
    console.log("wiggle number: " + wiggles);
    if(wiggles < 9){
        document.getElementById("Oatkylosaurus").style.animation = "wiggle 1s";
    }
    else if(wiggles == 9){
        document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' width='200px' height='200px'>";
    }
    if(wiggles % 4 == 0){
        boredom ++;
        console.log("boredom is currently " + boredom);
    }
    if(wiggles % 3 == 0){
        hunger ++;
        sleepiness ++;
        
    }
    if(wiggles % 5 == 0){
        happiness --;
        energy --;
    }
    wiggles ++;
        
}

//probably called every wiggle. Separate for readability but may condense later.
function barUpdate(){
    if(energy < 0)
       energy = 0; 
    if(hunger < 0)
        hunger = 0;
    if(sleep){
        if(sleepiness <= 0){
            sleep = false;
        }
        sleepiness --;
    }
    else{
        sleepiness ++;
        if(sleepiness >= 600)
            sleep = true;
    }
}

//decreases boredom because you played with him!
function haveFun(n){
    console.log("have this much fun: " + n);
    boredom -= n;
    if(boredom < 0)
        boredom = 0;
    document.getElementById("bored").style.width = boredom;
    console.log("boredom is currently " + boredom);
}

//play with the boy by hitting him with a ball. He doesn't seem to like it much.
//the animation is not working yet. I want to emulate the speed of chucking a ball by having the immediate sound, which begets an immediate hit, so the ball will spawn on his head and then ricochet elsewhere.
const ball = document.getElementById("playBall")
ball.addEventListener("click", () =>{
    haveFun(5);
    document.getElementById("dodgeball").style.display = "block";
    document.getElementById("dodgeball").style.animation = "bounce 1s";
    setTimeout(() => {
        document.getElementById("dodgeball").style.display = "none";
    }, 1000);
    ballBounce.currentTime = 13.5;
    ballBounce.play();
});

//do work to earn money, and to pass the time.
let shift = false;
const start = document.getElementById("startShift");
start.addEventListener("click", () =>{
    //wiggle();
    if(!shift){
        console.log("Let's start a shift!");
        shift = true;
        document.getElementById("shiftBG").style.display = "block";
        document.getElementById("station").style.display = "block";
        document.getElementById("hammer").style.display = "block";
        document.getElementById("oat").style.display = "block";
        document.getElementById("debris").style.display = "block";
    }
    else{
        console.log("Phew, tough day.");
        shift = false;
        document.getElementById("shiftBG").style.display = "none";
        document.getElementById("station").style.display = "none";
        document.getElementById("hammer").style.display = "none";
        document.getElementById("oat").style.display = "none";
        document.getElementById("debris").style.display = "none";
    }
});

//shell the oat.
const shell = document.getElementById("debris");
shell.addEventListener("click", () =>{
    document.getElementById("hammer").style.transform = "rotate(315deg)";
    tonk.currentTime = 0;
    tonk.play();
    setTimeout(() => {
        document.getElementById("hammer").style.transform = "rotate(0deg)";
    }, 500);
});

