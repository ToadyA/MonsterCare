let energy = 20;
document.getElementById("energy").style.width = energy + "px";
let hunger = 50;
document.getElementById("hunger").style.width = hunger + "px";
let happiness = 80;
document.getElementById("happy").style.width = happiness + "px";
let boredom = 10;
document.getElementById("bored").style.width = boredom + "px";
let sleepiness = 100;
document.getElementById("sleep").style.width = sleepiness + "px";
console.log("boredom is currently " + boredom);
let sleep = false;
let wiggles = 0;
let year = 0;

const ballBounce = new Audio("audio/dodgeball.mp3");
const tonk = new Audio("audio/tink.mp3");

//egg wiggle animation
let billy = new KeyframeEffect(
    document.getElementById("Oatkylosaurus"), [
        {transform: "rotate(-15deg)"},
        {transform: "rotate(15deg)"},
    ], {
        duration: (500 - (wiggles * 10)),
        direction: "alternate",
        iterations: (wiggles + 6),
    }, );
let goodMorning = new Animation(billy, document.timeline);

//Pertains to age. Every 9 wiggles is one year, and every shift completed is one wiggle. He matures at age 4 and again at age 9.
function wiggle(){
    console.log("wiggle number: " + wiggles);
    if(wiggles < 9){
        goodMorning.play();
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
                if(wiggles == 9){
                    document.getElementById("Oatkylosaurus").style.top = "35%";
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='250px' width='250px'>";
                }
                else if(wiggles == 36){
                    document.getElementById("Oatkylosaurus").style.top = "28%";
                    document.getElementById("Oatkylosaurus").style.left = "48%";
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='400px' width='400px'>";
                }
                else if(wiggles == 81){
                    document.getElementById("Oatkylosaurus").style.top = "20%";
                    document.getElementById("Oatkylosaurus").style.left = "47%";
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
                }
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
                                                            //fix the ball animation. Why is it like this?
let boing = new KeyframeEffect(
    document.getElementById("dodgeball"), [
        {transform: "translate(0%, 0%)"},
        {transform: "translate(-100%, -30%)"},
        {transform: "translate(-200%, 0%)"},
        {transform: "translate(-300%, 200%)"},
    ], {
        duration: 1000,
        iterations: 45,
    }, );
let ricochet = new Animation(boing, document.timeline);

//play with the boy by hitting him with a ball. He doesn't seem to like it much...
const ball = document.getElementById("playBall");
ball.addEventListener("click", () =>{
    haveFun(1);
    if(wiggles >= 81)
        document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_hit.png' height='600px' width='600px'>";
    else if(wiggles >= 36)
        document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloYow.png' height='400px' width='400px'>";
    else if(wiggles >= 9)
        document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyHit.png' height='250px' width='250px'>";
    document.getElementById("dodgeball").innerHTML = "<img src='images/BigRedBall.png' width='100px' height='100px' style=\"display: block; z-index: 15; position: absolute; left: 50%; top: 30%;\">";
    setTimeout(() => {
        if(wiggles >= 81)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
        else if(wiggles >= 36)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='400px' width='400px'>";
        else if(wiggles >= 9)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='250px' width='250px'>";
        //document.getElementById("dodgeball").innerHTML = "<img src='images/BigRedBall.png' width='100px' height='100px' style=\"display: none; z-index: 15; position: absolute; left: 50%; top: 30%;\">";
    }, 950);
    ballBounce.currentTime = 13.5;
    ballBounce.play();
    ricochet.play();
});

let peeky = false;
const bag = document.getElementById("Bag");
bag.addEventListener("click", () =>{
    if(!peeky){
        console.log("oh memories.");
        peeky = true;
        document.getElementById("pasLeather").style.display = "block";
    }
    else{
        peeky = false;
        document.getElementById("pasLeather").style.display = "none";
    }
});

let peckish = false;
const oatmeal = document.getElementById("Food");
oatmeal.addEventListener("click", () =>{
    if(!peckish){
        console.log("I wonder what's for Dinner?");
        peckish = true;
        document.getElementById("plasBowl").style.display = "block";
        document.getElementById("iceBank").style.display = "block";
        document.getElementById("Oatmeal").style.display = "block";
        document.getElementById("Pepper").style.display = "block";
        document.getElementById("Ice").style.display = "block";
    }
    else{
        peckish = false;
        document.getElementById("plasBowl").style.display = "none";
        document.getElementById("iceBank").style.display = "none";
        document.getElementById("Oatmeal").style.display = "none";
        document.getElementById("Pepper").style.display = "none";
        document.getElementById("Ice").style.display = "none";
    }
});

let booksy = false;
const bookShelf = document.getElementById("Books");
bookShelf.addEventListener("click", () =>{
    if(!booksy){
        console.log("what's reading?");
        booksy = true;
        document.getElementById("woodShelf").style.display = "block";
        document.getElementById("Book1").style.display = "block";
        document.getElementById("Book2").style.display = "block";
        document.getElementById("Book3").style.display = "block";
        document.getElementById("Book4").style.display = "block";
        document.getElementById("Book5").style.display = "block";
        document.getElementById("Book6").style.display = "block";
    }
    else{
        booksy = false;
        document.getElementById("woodShelf").style.display = "none";
        document.getElementById("Book1").style.display = "none";
        document.getElementById("Book2").style.display = "none";
        document.getElementById("Book3").style.display = "none";
        document.getElementById("Book4").style.display = "none";
        document.getElementById("Book5").style.display = "none";
        document.getElementById("Book6").style.display = "none";
    }
});


//do work to earn money, and to pass the time. This toggles everyting on or off, by a click of the punch card, which also advances the day by 1 Wiggle for every 2 clicks (9 Wiggles per Age).
let shift = false;
const start = document.getElementById("startShift");
start.addEventListener("click", () =>{
    if(!shift){
        console.log("Let's start a shift!");
        shift = true;
        document.getElementById("shiftBG").style.display = "block";
        document.getElementById("station").style.display = "block";
        document.getElementById("RolledBin").style.display = "block";
        document.getElementById("QuickBin").style.display = "block";
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
        document.getElementById("RolledBin").style.display = "none";
        document.getElementById("QuickBin").style.display = "none";
        document.getElementById("hammer").style.display = "none";
        document.getElementById("oat").style.display = "none";
        document.getElementById("debris").style.display = "none";
    }
});

///Shell the oat.
let sorty = false;  //the state of pending sorting, provided you stop mashing the hammer!
let punish = 0;     //you mashed the hammer too much. You must wait.
const shell = document.getElementById("oat");
//shelling animations:
let discard = new KeyframeEffect(
    document.getElementById("debris"), [
        {transform: "translate(0%, 0%)"},
        {transform: "translate(-10000%, -150%)"},
    ], {
        duration: 1000,
    }, );
let flew = new Animation(discard, document.timeline);

let quickly = new KeyframeEffect(
    document.getElementById("oat"), [
        {transform: "translate(0%, 0%)"},
        {transform: "translate(400%, 20%)"},
        {transform: "translate(500%, 350%)"},
    ], {
        duration: 500,
    }, );
let quickSort = new Animation(quickly, document.timeline);

let rolly = new KeyframeEffect(
    document.getElementById("oat"), [
        {transform: "translate(0%, 0%)"},
        {transform: "translate(-300%, 20%)"},
        {transform: "translate(-400%, 350%)"},
    ], {
        duration: 500,
    }, );
let rollSort = new Animation(rolly, document.timeline);

//click the oat
shell.addEventListener("click", () =>{
    setTimeout(() => {
        document.getElementById("debris").style.display = "none";
    }, 999);
    if(sorty){
        punish ++;
        document.getElementById("oat").innerHTML = "<img src='images/work/QuickOat.png' width='50px' height='50px'>";
        console.log("Clicked too much. Punish: " + punish);
    }
    sorty = true;
    document.getElementById("hammer").style.transform = "rotate(315deg)";
    tonk.currentTime = 0;
    tonk.play();
    flew.play();
    setTimeout(() => {
        document.getElementById("hammer").style.transform = "rotate(0deg)";
    }, 500);
    //punish hammer spam: when you click too fast, you must wait 200ms after the last click before the oat is submitted.
    if(punish > 0){
        setTimeout(() => {
            punish ++;
            console.log("You've done it this time. Punish: " + punish);
            setTimeout(() => {
                punish -= 2;
                console.log("Okay, that's long enough. Punish: " + punish);
                if(punish == 0){
                    console.log("submitting the oat to the Quick Bin!");
                    quickSort.play();
                }
            }, 100);
        }, 100);
    }
    if(punish < 0)
        punish = 0;
    //let's check your behavior.
    setTimeout(() => {
        if(punish <= 0){
            rollSort.play();
            document.getElementById("oat").innerHTML = "<img src='images/work/RollOat.png' width='50px' height='50px'>";
            sorty = false;
            document.getElementById("debris").style.display = "block";
            console.log("Sorty restored to false and debris has returned.");
        }
        else
            console.log("You disappoint me, soldier. Punish: " + punish);
    }, 1000);
    
});

