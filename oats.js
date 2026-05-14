let energy = 20;
let hunger = 50;
let happiness = 80;
let boredom = 10;
document.getElementById("bored").style.width = boredom + "px";
let sleepiness = 100;
document.getElementById("bored").style.width = boredom;
console.log("boredom is currently " + boredom);
let sleep = false;
let wiggles = 0;
let year = 0;
const ballBounce = new Audio("audio/dodgeball.mp3");
const tonk = new Audio("audio/tink.mp3");

//Pertains to age. Every 9 wiggles is one year, and every shift completed is one wiggle. He matures at age 4 and again at age 9.
//Sadly setting .style.width = tall + "px" (where tall = 40 and is iterated by 62 per year and caps at 600px) does not work. I have opted to set each of 9 heights manually.
function wiggle(){
    console.log("wiggle number: " + wiggles);
    if(wiggles < 9){
        document.getElementById("Oatkylosaurus").style.animation = "wiggle 1s";
        console.log("wiggle wiggle!");
    }
    if(wiggles % 4 == 0){
        boredom ++;
        console.log("boredom is currently " + boredom);
        document.getElementById("bored").style.width = boredom + "px";
    }
    if(wiggles % 3 == 0){
        hunger ++;
        sleepiness ++;
        if(wiggles % 9 == 0 && wiggles != 0){
            year ++;
            if(year < 10){
                bound ++;
                if(wiggles == 9)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='102px' width='102px'>";
                else if(wiggles == 18)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='164px' width='164px'>";
                else if(wiggles == 27)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='226px' width='226px'>";
                else if(wiggles == 36)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='289px' width='289px'>";
                else if(wiggles == 45)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='351px' width='351px'>";
                else if(wiggles == 54)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='413px' width='413px'>";
                else if(wiggles == 63)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='475px' width='475px'>";
                else if(wiggles == 72)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='537px' width='537px'>";
                else if(wiggles == 81)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
            }
            document.getElementById("age").innerHTML = "Age: " + year;
        }
    }
    if(wiggles % 5 == 0){
        happiness --;
        energy --;
    }
    wiggles ++;
        
}

//decreases boredom because you played with him!
function haveFun(n){
    console.log("have this much fun: " + n);
    boredom -= n;
    if(boredom < 0){
        boredom = 0;
    }
    document.getElementById("bored").style.width = boredom + "px";
    console.log("boredom is currently " + boredom);
}

//play with the boy by hitting him with a ball. He doesn't seem to like it much...
const ball = document.getElementById("playBall");
let bound = 0;
ball.addEventListener("click", () =>{
    haveFun(1);
    const dodgeball = document.createElement("div");
    document.getElementById("dodgeball").style.display = "block";
    document.getElementById("dodgeball").innerHTML = "<img src='images/BigRedBall.png' width='100px' height='100px' style=\"display: block\">";
    document.getElementById("dodgeball").style.animation =  "bounce" + bound + " 1.05s";
    setTimeout(() => {
        document.getElementById("dodgeball").style.display = "none";
        document.getElementById("dodgeball").innerHTML = "<img src='images/BigRedBall.png' width='100px' height='100px' style=\"display: none\">";
    }, 1000);
    ballBounce.currentTime = 13.5;
    ballBounce.play();
});

//do work to earn money, and to pass the time.
let shift = false;
const start = document.getElementById("startShift");
start.addEventListener("click", () =>{
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
        wiggle();
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
    document.getElementById("debris").style.animation = "flew 1s";
    setTimeout(() => {
        document.getElementById("hammer").style.transform = "rotate(0deg)";
    }, 500);
});

