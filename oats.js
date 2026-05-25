let hunger = 50;
document.getElementById("hunger").style.width = hunger + "px";
let energy = 20;
document.getElementById("energy").style.width = energy + "px";
let happiness = 80;
document.getElementById("happy").style.width = happiness + "px";
let sleepiness = 62;
document.getElementById("sleep").style.width = sleepiness + "px";
let boredom = 10;
document.getElementById("bored").style.width = boredom + "px";
let sleep = false;
let wiggles = 0;
let year = 0;
let moolah = 20000;     //200 dollars and 00 cents, which will be split manually later to read as $200.00
let cents = 0;
let oatStock = 10;      //starter supply of foodstuffs; if you change these values, you must change them in oats.html separately, too.
let pepperStock = 0;
let iceStock = 0;

let ballBounce = new Audio("audio/dodgeball.mp3");
let tonk = new Audio("audio/tink.mp3");
let xylophone = new Audio("audio/xylophone.mp3");

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
    if(wiggles % 9 == 0 && wiggles != 0){
        year ++;
        if(year < 10){
            if(wiggles == 9){
                document.getElementById("Oatkylosaurus").style.top = "35%";
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyZzz.png' height='250px' width='250px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='250px' width='250px'>";
                document.getElementById("speechBubble").style.top = "24%";
            }
            else if(wiggles == 36){
                document.getElementById("Oatkylosaurus").style.top = "28%";
                document.getElementById("Oatkylosaurus").style.left = "48%";
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloZzz.png' height='400px' width='400px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='400px' width='400px'>";
                document.getElementById("speechBubble").style.top = "22%";
            }
            else if(wiggles == 81){
                document.getElementById("Oatkylosaurus").style.top = "20%";
                document.getElementById("Oatkylosaurus").style.left = "47%";
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_Zzz.png' height='600px' width='600px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
                document.getElementById("speechBubble").style.top = "21%";
            }
        }
        document.getElementById("age").innerHTML = "<h3>Age: " + year + "</h3>";
    }
    hunger += 40;
    if(hunger >= 100)
        hunger = 100;
    document.getElementById("hunger").style.width = hunger + "px";
    if(hunger > 80)
        energy -= 20;
    else
        energy += 20;
    if(energy <= 0)
        energy = 0;
    else if(energy >= 110)
        energy = 110;
    document.getElementById("energy").style.width = energy + "px";
    happiness -= 15;
    if(happiness <= 0)
        happiness = 0;
    document.getElementById("happy").style.width = happiness + "px";
    if(!sleep){
        sleepiness += 10;
    }
    else{
        sleepiness -= 35;
    }
    if(sleep >= 80 && hunger < 50 && energy < 30 && !sleep){
        console.log("Wow! You made him restful! Happy Bonus!!");
        sleep = true;
        if(happiness < 90){
            console.log("(and the bonus mattered, too)");
            happiness = 90;
            document.getElementById("happy").style.width = happiness + "px";
        }
        if(wiggles >= 81)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_Zzz.png' height='600px' width='600px'>";
        else if(wiggles >= 36)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloZzz.png' height='400px' width='400px'>";
        else if(wiggles >= 9)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyZzz.png' height='250px' width='250px'>";
        document.getElementById("sleep").style.backgroundColor = "#0d1ebd";
    }
    if(sleepiness >= 100 && !sleep){
        console.log("Too weary! He fell asleep on his own...");
        sleepiness = 100;
        sleep = true;
        document.getElementById("sleep").style.backgroundColor = "#0d1ebd";
        if(wiggles >= 81)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_Zzz.png' height='600px' width='600px'>";
        else if(wiggles >= 36)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloZzz.png' height='400px' width='400px'>";
        else if(wiggles >= 9)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyZzz.png' height='250px' width='250px'>";
    }
    if(sleepiness <= 0 && sleep){
        console.log("UP AND AT 'EM! IT'S MORNING!");
        sleep = false;
        sleepiness = 0;
        document.getElementById("sleep").style.backgroundColor = "#3c4ac4";
        if(wiggles >= 81)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
        else if(wiggles >= 36)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='400px' width='400px'>";
        else if(wiggles >= 9)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='250px' width='250px'>";
    }
    document.getElementById("sleep").style.width = sleepiness + "px";
    boredom += 60;
    if(boredom >= 100)
        boredom = 100;
    document.getElementById("bored").style.width = boredom + "px";
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
        {transform: "translateX(0%) translateY(0%)"},
    ], {
        duration: 1000,
        iterations: 45,
    }, );
let ricochet = new Animation(boing, document.timeline);

//play with the boy by hitting him with a ball. He doesn't seem to like it much...
const ball = document.getElementById("playBall");
ball.addEventListener("click", () =>{
    haveFun(8);
    if(wiggles >= 81)
        document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_hit.png' height='600px' width='600px'>";
    else if(wiggles >= 36)
        document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloYow.png' height='400px' width='400px'>";
    else if(wiggles >= 9)
        document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyHit.png' height='250px' width='250px'>";
    document.getElementById("dodgeball").innerHTML = "<img src='images/BigRedBall.png' width='100px' height='100px' style=\"display: block; z-index: 15; position: absolute; left: 50%; top: 30%;\">";
    setTimeout(() => {
        if(wiggles >= 81){
            if(sleep)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_Zzz.png' height='600px' width='600px'>";
            else
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
        }
        else if(wiggles >= 36){
            if(sleep)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloZzz.png' height='400px' width='400px'>";
            else
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='400px' width='400px'>";
        }
        else if(wiggles >= 9){
            if(sleep)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyZzz.png' height='400px' width='400px'>";
            else
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='400px' width='400px'>";
        }
        //document.getElementById("dodgeball").innerHTML = "<img src='images/BigRedBall.png' width='100px' height='100px' style=\"display: none; z-index: 15; position: absolute; left: 50%; top: 30%;\">";
    }, 800);
    ballBounce.currentTime = 13.5;
    ballBounce.play();
    ricochet.play();
});

function grub(m){
    moolah += m;
    if(moolah < 100)
        cents = moolah;
    else
        cents = moolah % 100;
    moolah -= cents;
    moolah /= 100;
    if(cents <= 9)
        document.getElementById("cash").innerHTML = "<img src='images/icon/Wage.png'><h3>Cash: $"+ moolah + ".0" + cents + "</h3>";
    else
        document.getElementById("cash").innerHTML = "<img src='images/icon/Wage.png'><h3>Cash: $"+ moolah + "." + cents + "</h3>";
    moolah *= 100;
    moolah += cents;
}

//smoke cloud eeks out of the chimney, then drifts up and left offscreen, when it will loop again.
let smokeOut = new KeyframeEffect(
    document.getElementById("Smoke"), [
        {transform: "translate(0%, 0%)"},
    ], {
        duration: 1000,
        easing: "ease-in",
        iterations: Infinity,
    },
);
let puff = new Animation(smokeOut, document.timeline);
let puffing = false;
const mark2 = document.getElementById("DogHouse");
mark2.addEventListener("click", () =>{
    if(!puffing){
        puffing = true;
        puff.play();
        console.log("puffing has begun.");
        setTimeout(()=>{
            waving = true;
            billow();
            console.log("the shirt shall now billow.");
        }, 400);
    }
    else{
        puffing = false;
        puff.cancel();
        console.log("no more puffing.");
        setTimeout(()=>{
            waving = false;
            billow();
            console.log("the shirt shall now cease its billowing.");
        }, 400);
    }
        
});

//fan animation
let blades = document.getElementById("MainFan");
let bladeAngle = 15;
let quadrant = 0;
let bladeDrop = blades.style.top;
let bladeSlash = blades.style.left;
function fanning(){
    setTimeout(() =>{
        if(cooly){
            if(quadrant == 0){
                console.log("quadrant: " + quadrant);
                bladeDrop +=5;
                bladeSlash -=5;
            }
            else if(quadrant == 1){
                bladeDrop +=5;
                bladeSlash +=5;
                console.log("quadrant: " + quadrant);
            }
            else if(quadrant == 2){
                bladeDrop +=5;
                console.log("quadrant: " + quadrant);
            }
            else if(quadrant == 3){
                bladeDrop +=5;
                bladeSlash -=5;
                console.log("quadrant: " + quadrant);
            }
            else if(quadrant == 4){
                bladeSlash +=5;
                console.log("quadrant: " + quadrant);
            }
            else if(quadrant == 5){
                bladeDrop -=5;
                bladeSlash +=5;
                console.log("quadrant: " + quadrant);
            }
            else if(quadrant == 6){
                bladeDrop -=5;
                bladeSlash -=5;
                console.log("quadrant: " + quadrant);
            }
            else if(quadrant == 7){
                bladeDrop +=5;
                bladeSlash -=5;
                console.log("quadrant: " + quadrant);
            }
            blades.style.rotate = bladeAngle + "deg";
            blades.style.top = bladeDrop + "px";
            console.log("will it rise? " + bladeAngle);
            bladeAngle += 5;
            console.log("it went up! " + bladeAngle);
            if(bladeAngle >= 30 && quadrant == 0){//move down and left (+top, -left)
                quadrant ++;
                console.log("advancing because of the angle! Angle: " + bladeAngle);
            }
            else if(bladeAngle >= 45 && quadrant == 1){//move down and right (+top, +left)
                bladeAngle = 135;
                console.log("reset the angle to 135, but at least we know the quadrant is 1, right? it is: " + quadrant);
                bladeDrop += 100;
                quadrant ++;
                console.log("advancing because of the angle! Angle: " + bladeAngle + ", and the new quadrant according to ++ is: " + quadrant);
            }
            else if(bladeAngle >= 150 && quadrant == 2){//move super down and right (++top, +left)
                quadrant ++;
                console.log("advancing because of the angle! Angle: " + bladeAngle);
            }
            else if(bladeAngle >= 165 && quadrant == 3){//move super down and left (++top, -left)
                bladeAngle = 195;
                quadrant ++;
                console.log("advancing because of the angle! Angle: " + bladeAngle);
            }
            else if((bladeAngle >= 210 || bladeAngle <= 0) && quadrant == 4){//move super down and super left (++top, --+left)
                quadrant ++;
                console.log("advancing because of the angle! Angle: " + bladeAngle);
            }
            else if(bladeAngle >= 225 && quadrant == 5){//move super down and super left (++top, --left)
                bladeAngle = 0;
                quadrant ++;
                console.log("advancing because of the angle! Angle: " + bladeAngle);
            }
            else if(bladeAngle >= 240 && quadrant == 6){//move down and super left(+top, --left)
                bladeAngle = 315;
                quadrant ++;
                console.log("advancing because of the angle! Angle: " + bladeAngle);
            }
            else if((bladeAngle >= 345 || bladeAngle <= 0) && quadrant == 7){//move down and super left (+top, --+left)
                bladeAngle = 15;
                quadrant = 0;
                console.log("advancing because of the angle! Angle: " + bladeAngle);
            }
            fanning();
        }
    }, 30);
}
let cooly = false;
blades.addEventListener("click", ()=>{
    if(!cooly){
        cooly = true;
        fanning();
    }
    else
        cooly = false;
});

//shirt animation
let waving = false;
let wave = 10;
let billowing = true;
function billow(){
    if(waving){
        setTimeout(() =>{
            document.getElementById("Shirt").style.rotate = wave + "deg";
            if(wave >= 30)
                billowing = false;
            else if(wave <= 15)
                billowing = true;
            if(billowing)
                wave ++;
            else
                wave --;
            billow();
        }, 30);
    }
}

//jug animation
let coolIdea = false;   //whether the dino is looking at the water jug, contemplating a certified Cool Idea.
const jugalo = document.getElementById("Jug");
jugalo.addEventListener("click", () =>{
    if(!coolIdea && !sleep){
        coolIdea = true;
        if(wiggles >= 81)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_intrigue.png' height='600px' width='600px'>";
        else if(wiggles >= 36)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloWater.png' height='400px' width='400px'>";
        xylophone.currentTime = 36.5;
        xylophone.play();
        setTimeout(() =>{
            xylophone.currentTime = 45.5;
            setTimeout(() =>{
                xylophone.currentTime = 54.3;
                setTimeout(() =>{
                    xylophone.currentTime = 103;
                    setTimeout(() =>{
                        document.getElementById("eyebeam1").style.display = "none";
                        document.getElementById("eyebeam2").style.display = "none";
                        document.getElementById("eyebeam3").style.display = "none";
                        document.getElementById("eyebeam4").style.display = "none";
                        document.getElementById("eyebeam5").style.display = "none";
                        document.getElementById("eyebeam6").style.display = "none";
                        coolIdea = false;
                        if(wiggles >= 81)
                            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
                        else if(wiggles >= 36)
                            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='400px' width='400px'>";
                    }, 700);
                }, 700);
                setTimeout(() =>{
                    document.getElementById("eyebeam5").style.display = "block";
                    document.getElementById("eyebeam6").style.display = "block";
                }, 400);
            }, 800);
            setTimeout(() =>{
                document.getElementById("eyebeam3").style.display = "block";
                document.getElementById("eyebeam4").style.display = "block";
            }, 400);
        }, 800);
        setTimeout(() =>{
            document.getElementById("eyebeam1").style.display = "block";
            document.getElementById("eyebeam2").style.display = "block";
        }, 400);
    }
    
});

///Fridge/Freezer storage

let peckish = false;
const pantry = document.getElementById("Food");
pantry.addEventListener("click", () =>{
    if(!peckish){
        console.log("I wonder what's for Dinner?");
        peckish = true;
        document.getElementById("plasBowl").style.display = "block";
        if(freezy)
            document.getElementById("iceBank").style.display = "block";
        if(oatStock > 0)
            document.getElementById("Oatmeal").style.display = "block";
        if(pepperStock > 0)
        document.getElementById("Pepper").style.display = "block";
        if(iceStock > 0)
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
const foodOatmeal = document.getElementById("Oatmeal");
foodOatmeal.addEventListener("click", () => {
    if(oatStock > 0 && hunger > 0){
        oatStock --;
        document.getElementById("Oatmeal").innerHTML="<img src='images/Bowl.png'><h1>x" + oatStock + "</h1>";
        hunger -= 15;
        if(hunger < 0)
            hunger = 0;
        document.getElementById("hunger").style.width = hunger + "px";
        happiness += 10;
        if(happiness > 100)
            happiness = 100;
        document.getElementById("happy").style.width = happiness + "px";
        energy += 25;
        if(energy > 105)
            energy = 105;
        document.getElementById("energy").style.width = energy + "px";
        if(wiggles >= 81)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_grateful.png' height='600px' width='600px'>";
        else if(wiggles >= 36)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloThanks.png' height='400px' width='400px'>";
        else if(wiggles >= 9)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyYum.png' height='250px' width='250px'>";
        setTimeout(() =>{
            if(wiggles >= 81)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_chew.png' height='600px' width='600px'>";
            else if(wiggles >= 36)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloChew.png' height='400px' width='400px'>";
            else if(wiggles >= 9)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyChew.png' height='250px' width='250px'>";
        }, 125);
        setTimeout(() =>{
            if(wiggles >= 81)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_grateful.png' height='600px' width='600px'>";
            else if(wiggles >= 36)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloThanks.png' height='400px' width='400px'>";
            else if(wiggles >= 9)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyYum.png' height='250px' width='250px'>";
        }, 250);
        setTimeout(() =>{
            if(wiggles >= 81)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_chew.png' height='600px' width='600px'>";
            else if(wiggles >= 36)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloChew.png' height='400px' width='400px'>";
            else if(wiggles >= 9)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyChew.png' height='250px' width='250px'>";
        }, 375);
        setTimeout(() =>{
            if(wiggles >= 81){
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_Zzz.png' height='600px' width='600px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
            }
            else if(wiggles >= 36){
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloZzz.png' height='400px' width='400px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='400px' width='400px'>";
            }
            else if(wiggles >= 9){
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyZzz.png' height='250px' width='250px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='250px' width='250px'>";
            }
        }, 500);
    }
});
const foodPepper = document.getElementById("Pepper");
foodPepper.addEventListener("click", () => {
    if(pepperStock > 0 && hunger > 0){
        pepperStock --;
        document.getElementById("Pepper").innerHTML="<img src='images/BellPepper.png'><h1>x" + pepperStock + "</h1>";
        hunger -= 40;
        if(hunger < 0)
            hunger = 0;
        document.getElementById("hunger").style.width = hunger + "px";
        happiness -= 5;
        if(happiness < 0)
            happiness = 0;
        document.getElementById("happy").style.width = happiness + "px";
        energy += 10;
        if(energy > 105)
            energy = 105;
        document.getElementById("energy").style.width = energy + "px";
        if(wiggles >= 81)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_hit.png' height='600px' width='600px'>";
        else if(wiggles >= 36)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloEw.png' height='400px' width='400px'>";
        else if(wiggles >= 9)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyPepper.png' height='250px' width='250px'>";
        setTimeout(() =>{
            if(wiggles >= 81){
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_Zzz.png' height='600px' width='600px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
            }
            else if(wiggles >= 36){
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloZzz.png' height='400px' width='400px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='400px' width='400px'>";
            }
            else if(wiggles >= 9){
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyZzz.png' height='250px' width='250px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='250px' width='250px'>";
            }
        }, 500);
    }
});
const foodIce = document.getElementById("Ice");
foodIce.addEventListener("click", () => {
    if(iceStock > 0){
        iceStock --;
        document.getElementById("Ice").innerHTML="<img src='images/IceTray.png'><h1>x" + iceStock + "</h1>";
        if(hunger >= 95)
            hunger = 95;
        document.getElementById("hunger").style.width = hunger + "px";
        boredom -= 1;
        if(boredom <= 0)
            boredom = 0;
        document.getElementById("bored").style.width = boredom + "px";
        if(wiggles >= 81)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_grateful.png' height='600px' width='600px'>";
        else if(wiggles >= 36)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloThanks.png' height='400px' width='400px'>";
        else if(wiggles >= 9)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyYum.png' height='250px' width='250px'>";
        setTimeout(() =>{
            if(wiggles >= 81)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_chew.png' height='600px' width='600px'>";
            else if(wiggles >= 36)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloChew.png' height='400px' width='400px'>";
            else if(wiggles >= 9)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyChew.png' height='250px' width='250px'>";
        }, 125);
        setTimeout(() =>{
            if(wiggles >= 81)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_grateful.png' height='600px' width='600px'>";
            else if(wiggles >= 36)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloThanks.png' height='400px' width='400px'>";
            else if(wiggles >= 9)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyYum.png' height='250px' width='250px'>";
        }, 250);
        setTimeout(() =>{
            if(wiggles >= 81)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_chew.png' height='600px' width='600px'>";
            else if(wiggles >= 36)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloChew.png' height='400px' width='400px'>";
            else if(wiggles >= 9)
                document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyChew.png' height='250px' width='250px'>";
        }, 375);
        setTimeout(() =>{
            if(wiggles >= 81){
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading_Zzz.png' height='600px' width='600px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
            }
            else if(wiggles >= 36){
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloZzz.png' height='400px' width='400px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='400px' width='400px'>";
            }
            else if(wiggles >= 9){
                if(sleep)
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkylobabyZzz.png' height='250px' width='250px'>";
                else
                    document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='250px' width='250px'>";
            }
        }, 500);
    }
});

///Work

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

//Shell the oat.
let sorty = false;          //the state of pending sorting, provided you stop mashing the hammer!
let quickMan = 0;       //remembers your mistake(s)
let punish = 0;             //you mashed the hammer too much. You must wait.
let unresolved = 0;         //keep track of the unresolved timers so that only one animation plays at a time and only one oat gives money.
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
function purgOatory(){
    setTimeout(() => {
        punish -= 1;
        if(punish <= 0){
            punish = 0;
            quickMan = 0;
            quickSort.play();
            setTimeout(() => {
                grub(2);
                document.getElementById("oat").innerHTML = "<img src='images/work/RollOat.png' width='50px' height='50px'>";
                sorty = false;
                document.getElementById("debris").style.display = "block";
            }, 490);
        }
        else
            purgOatory();
    }, 1);
}

shell.addEventListener("click", () =>{
    setTimeout(() => {
        document.getElementById("debris").style.display = "none";
    }, 990);
    if(sorty){
        if(quickMan == 0)
            quickMan = 1;
        punish += 250;
        if(punish >= 300)
            punish = 300;
        document.getElementById("oat").innerHTML = "<img src='images/work/QuickOat.png' width='50px' height='50px'>";
    }
    sorty = true;
    document.getElementById("hammer").style.transform = "rotate(315deg)";
    tonk.currentTime = 0;
    tonk.play();
    flew.play();
    setTimeout(() => {
        document.getElementById("hammer").style.transform = "rotate(0deg)";
    }, 200);
    //punish hammer spam: when you click too fast, you must wait 200ms after the last click before the oat is submitted.
    if(quickMan == 1){
        quickMan = 2;
        purgOatory();
    }
    if(punish < 1)
        punish = 0;
    //let's check your behavior.
    if(quickMan == 0){
        setTimeout(() => {
            if(quickMan == 0){
                rollSort.play();
                document.getElementById("oat").innerHTML = "<img src='images/work/RollOat.png' width='50px' height='50px'>";
                setTimeout(() => {
                    grub(9);
                    sorty = false;
                    document.getElementById("debris").style.display = "block";
                }, 490);
            }
        }, 590);
    }
});

//Pressing Esc closes all exising windows (Shopping, Mealtime, Work).
document.addEventListener('keydown', (e) =>{
    if(e.key === ('Escape')){
        console.log("he has escaped...!");
        if(peckish){
            peckish = false;
            document.getElementById("plasBowl").style.display = "none";
            document.getElementById("iceBank").style.display = "none";
            document.getElementById("Oatmeal").style.display = "none";
            document.getElementById("Pepper").style.display = "none";
            document.getElementById("Ice").style.display = "none";
        }
        if(shopping){
            shopping = false;
            document.getElementById("mart").style.display = "none";
            document.getElementById("Shopkeep").innerHTML="<img src='images/Shopkeep.png'>";
            document.getElementById("Shopkeep").style.display = "none";
            document.getElementById("DogBG").style.display = "none";
            document.getElementById("DogBubble").style.display = "none";
            yapping = false;
            document.getElementById("BookcaseX").style.display = "none";
            document.getElementById("BookAX").style.display = "none";
            document.getElementById("BookBX").style.display = "none";
            document.getElementById("BookCX").style.display = "none";
            document.getElementById("BookDX").style.display = "none";
            document.getElementById("BookEX").style.display = "none";
            document.getElementById("BookFX").style.display = "none";
            document.getElementById("OatmealX").style.display = "none";
            document.getElementById("PepperX").style.display = "none";
            document.getElementById("FreezerX").style.display = "none";
            document.getElementById("IceX").style.display = "none";
            document.getElementById("FanX").style.display = "none";
            document.getElementById("DogHouseX").style.display = "none";
            document.getElementById("ShirtX").style.display = "none";
            document.getElementById("JugX").style.display = "none";
            document.getElementById("HerbsX").style.display = "none";
        }
        if(shift){
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
    }
});

///Store

//16 items to buy, length of 13 without foodstuffs. false means it's stocked, true means you've bought it.
let store = [false,false,false,false,false,false,false,false,false,false,false,false,false];

let shopping = false;
const shop = document.getElementById("Cart");
shop.addEventListener("click", () =>{
    if(!shopping){
        console.log("\"Spend Spend Spend!\" -Moneybags, Spyro A Hero's Tail");
        shopping = true;
        document.getElementById("mart").style.display = "block";
        document.getElementById("Shopkeep").style.display = "block";
        document.getElementById("Shopkeep").innerHTML="<img src='images/Shopkeep.png'>";
        document.getElementById("DogBG").style.display = "block";
        if(!store[0])
            document.getElementById("BookcaseX").style.display = "block";
        if(!store[1])
            document.getElementById("BookAX").style.display = "block";
        if(!store[2])
            document.getElementById("BookBX").style.display = "block";
        if(!store[3])
            document.getElementById("BookCX").style.display = "block";
        if(!store[4])
            document.getElementById("BookDX").style.display = "block";
        if(!store[5])
            document.getElementById("BookEX").style.display = "block";
        if(!store[6])
            document.getElementById("BookFX").style.display = "block";
        document.getElementById("OatmealX").style.display = "block";
        document.getElementById("PepperX").style.display = "block";
        if(!store[7])
            document.getElementById("FreezerX").style.display = "block";
        if(store[7])
            document.getElementById("IceX").style.display = "block";
        if(!store[8])
            document.getElementById("FanX").style.display = "block";
        if(!store[9])
            document.getElementById("DogHouseX").style.display = "block";
        if(!store[10])
            document.getElementById("ShirtX").style.display = "block";
        if(!store[11])
            document.getElementById("JugX").style.display = "block";
        if(!store[12])
            document.getElementById("HerbsX").style.display = "block";
    }
    else{
        shopping = false;
        document.getElementById("mart").style.display = "none";
        document.getElementById("Shopkeep").innerHTML="<img src='images/Shopkeep.png'>";
        document.getElementById("Shopkeep").style.display = "none";
        document.getElementById("DogBG").style.display = "none";
        document.getElementById("DogBubble").style.display = "none";
        yapping = false;
        document.getElementById("BookcaseX").style.display = "none";
        document.getElementById("BookAX").style.display = "none";
        document.getElementById("BookBX").style.display = "none";
        document.getElementById("BookCX").style.display = "none";
        document.getElementById("BookDX").style.display = "none";
        document.getElementById("BookEX").style.display = "none";
        document.getElementById("BookFX").style.display = "none";
        document.getElementById("OatmealX").style.display = "none";
        document.getElementById("PepperX").style.display = "none";
        document.getElementById("FreezerX").style.display = "none";
        document.getElementById("IceX").style.display = "none";
        document.getElementById("FanX").style.display = "none";
        document.getElementById("DogHouseX").style.display = "none";
        document.getElementById("ShirtX").style.display = "none";
        document.getElementById("JugX").style.display = "none";
        document.getElementById("HerbsX").style.display = "none";
    }
});

let shelved = false;     //you cannot buy books without a bookshelf
const buyBookcase = document.getElementById("BookcaseX");
buyBookcase.addEventListener("click", () =>{
    if(store[0] == false && moolah >= 1199){
        shelved = true;
        store[0] = true;
        grub(-1199);
        document.getElementById("BookcaseX").style.display = "none";
        document.getElementById("Bookcase").style.display = "block";
        console.log("Thank you for your purchase of one Bookcase!");
    }
    else if(moolah < 1199)
        console.log("brokie. get lost.");
});
buyBookcase.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>Some kind of bento box for giants. Giants with small appetites.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyBookA = document.getElementById("BookAX");
buyBookA.addEventListener("click", () =>{
    if(store[1] == false && shelved == true && moolah >= 149){
        store[1] = true;
        grub(-149);
        document.getElementById("BookAX").style.display = "none";
        document.getElementById("BookA").style.display = "block";
        console.log("Thank you for your purchase of one copy of \"101 Uses For Oats\"!");
    }
    else if(shelved == false)
        console.log("You need a shelf for your books. Duh.");
    else if(moolah < 149)
        console.log("brokie. get lost.");
});
buyBookA.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>I saw an episode of The Tick where the bad guy confused George Washington Carver with the inventor of peanut butter.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyBookB = document.getElementById("BookBX");
buyBookB.addEventListener("click", () =>{
    if(store[2] == false && shelved == true && moolah >= 399){
        store[2] = true;
        grub(-399);
        document.getElementById("BookBX").style.display = "none";
        document.getElementById("BookB").style.display = "block";
        console.log("Thank you for your purchase of one copy of \"Anna Karenina\"!");
    }
    else if(shelved == false)
        console.log("You need a shelf for your books. Duh.");
    else if(moolah < 399)
        console.log("brokie. get lost.");
});
buyBookB.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>That's a thick book. You probably can't fold that book in half. Probably.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyBookC = document.getElementById("BookCX");
buyBookC.addEventListener("click", () =>{
    if(store[3] == false && shelved == true && moolah >= 249){
        store[3] = true;
        grub(-249);
        document.getElementById("BookCX").style.display = "none";
        document.getElementById("BookC").style.display = "block";
        console.log("Thank you for your purchase of one copy of \"Treasure Island\"!");
    }
    else if(shelved == false)
        console.log("You need a shelf for your books. Duh.");
    else if(moolah < 249)
        console.log("brokie. get lost.");
});
buyBookC.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>I haven't seen Treasure Planet, but I heard it looks beautiful. Why didn't they keep making more movies like that?</p>";
        yapping = true;
        yapItUp();
    }
});
const buyBookD = document.getElementById("BookDX");
buyBookD.addEventListener("click", () =>{
    if(store[4] == false && shelved == true && moolah >= 199){
        store[4] = true;
        grub(-199);
        document.getElementById("BookDX").style.display = "none";
        document.getElementById("BookD").style.display = "block";
        console.log("Thank you for your purchase of one copy of \"The Jungle\"!");
    }
    else if(shelved == false)
        console.log("You need a shelf for your books. Duh.");
    else if(moolah < 199)
        console.log("brokie. get lost.");
});
buyBookD.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>This book is historically-significant in that it helped illuminate the dire working conditions of factories.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyBookE = document.getElementById("BookEX");
buyBookE.addEventListener("click", () =>{
    if(store[5] == false && shelved == true && moolah >= 399){
        store[5] = true;
        grub(-399);
        document.getElementById("BookEX").style.display = "none";
        document.getElementById("BookE").style.display = "block";
        console.log("Thank you for your purchase of one copy of \"The Anti-Ableist Manifesto\"!");
    }
    else if(shelved == false)
        console.log("You need a shelf for your books. Duh.");
    else if(moolah < 399)
        console.log("brokie. get lost.");
});
buyBookE.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>The book cover is orange, but the book itself is white. I like the color combo!</p>";
        yapping = true;
        yapItUp();
    }
});
const buyBookF = document.getElementById("BookFX");
buyBookF.addEventListener("click", () =>{
    if(store[6] == false && shelved == true && moolah >= 99){
        store[6] = true;
        grub(-99);
        document.getElementById("BookFX").style.display = "none";
        document.getElementById("BookF").style.display = "block";
        console.log("Thank you for your purchase of one copy of \"Art of War\"!");
    }
    else if(shelved == false)
        console.log("You need a shelf for your books. Duh.");
    else if(moolah < 99)
        console.log("brokie. get lost.");
});
buyBookF.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>I don't read books. It's easier and more fun to just watch anime and movies instead.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyOatmeal = document.getElementById("OatmealX");
buyOatmeal.addEventListener("click", () =>{
    if(moolah >= 19){
        grub(-19);
        oatStock ++;
        document.getElementById("Oatmeal").innerHTML="<img src='images/Bowl.png'><h1>x" + oatStock + "</h1>";
        if(peckish)
            document.getElementById("Oatmeal").style.display = "block";
        console.log("Thank you for your purchase of one serving of oats!");
    }
    else
        console.log("brokie. get lost.");
});
buyOatmeal.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>I think oats are good for you, but I would never eat them myself.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyPepper = document.getElementById("PepperX");
buyPepper.addEventListener("click", () =>{
    if(moolah >= 99){
        grub(-99);
        pepperStock ++;
        document.getElementById("Pepper").innerHTML="<img src='images/BellPepper.png'><h1>x" + pepperStock + "</h1>";
        if(peckish)
            document.getElementById("Pepper").style.display = "block";
        console.log("Thank you for your purchase of one Orange Bell Pepper!");
    }
    else
        console.log("brokie. get lost.");
});
buyPepper.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>What is this strange orange vegetable?</p>";
        yapping = true;
        yapItUp();
    }
});
let freezy = false;     //you cannot buy ice without a freezer
const buyIce = document.getElementById("IceX");
buyIce.addEventListener("click", () =>{
    if(freezy && moolah >= 1){
        grub(-1);
        iceStock += 10;
        document.getElementById("Ice").innerHTML="<img src='images/IceTray.png'><h1>x" + iceStock + "</h1>";
        if(peckish)
            document.getElementById("Ice").style.display = "block";
        console.log("Thank you for your purchase of a buncha ice chunks!");
    }
    else if (!freezy)
        console.log("Where are you going to put all that ice? Think!");
    else if(moolah < 1)
        console.log("MEGA brokie! Wow! You seriously don't have ONE PENNY?! get lost.");
});
buyIce.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>Ice costs us basically nothing, but we aren't running a charity here. Fork over the penny, bub.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyFreezer = document.getElementById("FreezerX");
buyFreezer.addEventListener("click", () =>{
    if(store[7] == false && moolah >= 1849){
        freezy = true;
        store[7] = true;
        grub(-1849);
        document.getElementById("FreezerX").style.display = "none";
        document.getElementById("Freezer").style.display = "block";
        document.getElementById("IceX").style.display = "block";
        if(peckish)
            document.getElementById("iceBank").style.display = "block";
        console.log("Thank you for your purchase of one Freezer!");
    }
    else if(moolah < 1849)
        console.log("brokie. get lost.");
});
buyFreezer.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>It's not cold because it's not plugged in. You'll just have to trust me on this one.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyFan = document.getElementById("FanX");
buyFan.addEventListener("click", () =>{
    if(store[8] == false && moolah >= 899){
        store[8] = true;
        grub(-899);
        document.getElementById("FanX").style.display = "none";
        document.getElementById("MainFan").style.display = "block";
        document.getElementById("FanCord").style.display = "block";
        console.log("Thank you for your purchase of one Ceiling Fan!");
    }
    else if(moolah < 899)
        console.log("brokie. get lost.");
});
buyFan.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>Looks fine to me.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyDogHouse = document.getElementById("DogHouseX");
buyDogHouse.addEventListener("click", () =>{
    if(store[9] == false && moolah >= 3999){
        store[9] = true;
        grub(-3999);
        document.getElementById("DogHouseX").style.display = "none";
        document.getElementById("DogHouse").style.display = "block";
        document.getElementById("Smoke").style.display = "block";
        console.log("Thank you for your purchase of one Dog House Mk.2!");
    }
    else if(moolah < 3999)
        console.log("brokie. get lost.");
});
buyDogHouse.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>The newest model, DogHouse Mk.2 features Real Smoke Action. A must-get for enthusiasts and any certified Cool Kid.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyShirt = document.getElementById("ShirtX");
buyShirt.addEventListener("click", () =>{
    if(store[10] == false && moolah >= 399){
        store[10] = true;
        grub(-399);
        document.getElementById("ShirtX").style.display = "none";
        document.getElementById("Shirt").style.display = "block";
        console.log("Thank you for your purchase of one Cool Tee-Shirt!");
    }
    else if(moolah < 399)
        console.log("brokie. get lost.");
});
buyShirt.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>This is the coolest shirt I've ever seen. If you don't buy it, I probably will.</p>";
        yapping = true;
        yapItUp();
    }
});
const buyJug = document.getElementById("JugX");
buyJug.addEventListener("click", () =>{
    if(store[11] == false && moolah >= 1599){
        store[11] = true;
        grub(-1599);
        document.getElementById("JugX").style.display = "none";
        document.getElementById("Jug").style.display = "block";
        console.log("Thank you for your purchase of one 5-Gallon Water Jug!");
    }
    else if(moolah < 1599)
        console.log("brokie. get lost.");
});
buyJug.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>Maybe it's not a good idea to get this. I mean, do you see how your kid's looking at it?</p>";
        yapping = true;
        yapItUp();
    }
});
const buyHerbs = document.getElementById("HerbsX");
buyHerbs.addEventListener("click", () =>{
    if(store[12] == false && moolah >= 1449){
        store[12] = true;
        grub(-1449);
        document.getElementById("HerbsX").style.display = "none";
        document.getElementById("Herbs").style.display = "block";
        console.log("Thank you for your purchase of these Trimmed Herbs!");
    }
    else if(moolah < 1449)
        console.log("brokie. get lost.");
});
buyHerbs.addEventListener("contextmenu", (e) => {
    if(yapping){
        yapping = false;
        document.getElementById("DogBubble").style.display = "none";
        document.getElementById("DogBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("DogBubble").style.display = "block";
        document.getElementById("DogBubble").innerHTML="<p>\"Trim the Herbs\", so they say.</p>";
        yapping = true;
        yapItUp();
    }
});

function yapItUp(){
    document.getElementById("Shopkeep").innerHTML="<img src='images/ShopkeepYap.png'>";
    setTimeout(() =>{
        document.getElementById("Shopkeep").innerHTML="<img src='images/Shopkeep.png'>";
        if(yapping){
            setTimeout(() =>{
                yapItUp();
            }, 200);
        }
    }, 200);
}

///Right-Clicks

document.addEventListener("contextmenu", (e) => {
    event.preventDefault();
});
let dinoQuote = "Yeah, I default-texted you. What of it?";
//Right-Clicking the shop wares (Shopkeep yaps)
//Right-Clicking the Furniture (Dino talks)

let dinoFlavor = 0;
let bookcaseFlavor = 0;
let bookAFlavor = 0;
let bookBFlavor = 0;
let bookCFlavor = 0;
let bookDFlavor = 0;
let bookEFlavor = 0;
let bookFFlavor = 0;
let oatmealFlavor = 0;
let pepperFlavor = 0;
let freezerFlavor = 0;
let iceFlavor = 0;
let fanFlavor = 0;
let doghouseFlavor = 0;
let jugFlavor = 0;
let shirtFlavor = 0;
let herbsFlavor = 0;

//assign clickable objects
let talking = false;
let yapping = false;
const funnyDino = document.getElementById("Oatkylosaurus");
funnyDino.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        if(!sleep)
            dinoPhrase();
        else
            sleepyPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const bookshelf = document.getElementById("Bookcase");
bookshelf.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        bookcasePhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const book1 = document.getElementById("BookA");
book1.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
        console.log("bubble cleared!");
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        bookAPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const book2 = document.getElementById("BookB");
book2.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        bookBPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const book3 = document.getElementById("BookC");
book3.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        bookCPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const book4 = document.getElementById("BookD");
book4.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        bookDPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const book5 = document.getElementById("BookE");
book5.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        bookEPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const book6 = document.getElementById("BookF");
book6.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        bookFPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const oatBowl = document.getElementById("Oatmeal");
oatBowl.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        oatmealPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const bellPepper = document.getElementById("Pepper");
bellPepper.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        pepperPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const freezeBox = document.getElementById("Freezer");
freezeBox.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        freezerPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const icy = document.getElementById("Ice");
icy.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        icePhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const highFan = document.getElementById("MainFan");
highFan.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
        console.log("bubble cleared!");
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        fanPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const doghouse2 = document.getElementById("DogHouse");
doghouse2.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        doghousePhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const fiveGal = document.getElementById("Jug");
fiveGal.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        jugPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const teeshirt = document.getElementById("Shirt");
teeshirt.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        shirtPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});
const trimmedHerbs = document.getElementById("Herbs");
trimmedHerbs.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>";
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        herbsPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>";
        talking = true;
    }
});

//phrase libraries

function dinoPhrase(){
    const dinoWisdom = [
        "Haha, one!",
        "I don't particularly care for having a ball pelted at me.",
        "Huh? Did I say something strange?",
        "My tail doubles as a bowl. Since I only put oats into it, I don't need to wash it, right?",
        "Peppers taste bad. Who takes a bite out of a Bell Pepper?! Why is it me?!",
    ];
    dinoQuote = dinoWisdom[dinoFlavor];
    dinoFlavor ++;
    if(dinoFlavor >= dinoWisdom.length)
        dinoFlavor = 0;
}
function sleepyPhrase(){
    const dinoWisdom = [
        "Spiders...",
        "Spiders?",
        "Spiders!!",
        "No! Don't throw the ball!!!",
        "mmmmmmmmm hork hmmmmmmmmmm",
    ];
    dinoQuote = dinoWisdom[dinoFlavor];
    dinoFlavor ++;
    if(dinoFlavor >= dinoWisdom.length)
        dinoFlavor = 0;
}
function bookcasePhrase(){
    const dinoWisdom = [
        "That's my Bookcase. It can hold a whopping SIX books on it. Cool, huh?",
        "It sure is a Bookcase.",
        "I don't have a particular reason for stacking the books in that order.",
        "I don't like selling my books. I get to brag about what I've read this way, like a rich poser, except actually not!",
        "I can't put anything on top of this without exceeding its weight limit. Bummer, I know.",
    ];
    dinoQuote = dinoWisdom[bookcaseFlavor];
    bookcaseFlavor ++;
    if(bookcaseFlavor >= dinoWisdom.length)
        bookcaseFlavor = 0;
}
function bookAPhrase(){
    const dinoWisdom = [
        "101 Uses For Oats by Unknown Author",
        "You got me this book because you thought I'd like a book about oats. You were right.",
        "Apparently Quick Oats cook faster and have the same fiber content. So why would anyone want Rolled Oats?",
        "If you soak oats in milk and sweet things overnight, it becomes dessert for breakfast! Wow!",
        "Chocolate oat clusters! What a wonderful idea!",
    ];
    dinoQuote = dinoWisdom[bookAFlavor];
    bookAFlavor ++;
    if(bookAFlavor >= dinoWisdom.length)
        bookAFlavor = 0;
}
function bookBPhrase(){
    const dinoWisdom = [
        "Anna Karenina by Leo Tolstoy",
        "This might be my favorite book! Though the antisemitism and racism could be omitted with nothing lost.",
        "I love it when we get a tangent about art appreciation, or crop-harvesting, or beekeeping, because the author was into that at the time!",
        "The way characters absorb lessons and change, and how they stay the same anyway, is so well communicated and beautiful!",
        "I love Levin and Kitty! Their relationship is so cute, and it juxtaposes what Anna and Vronsky are up to so well!",
        "Oblonsky is a sleazebag. He can't keep getting away with this!!!",
    ];
    dinoQuote = dinoWisdom[bookBFlavor];
    bookBFlavor ++;
    if(bookBFlavor >= dinoWisdom.length)
        bookBFlavor = 0;
}
function bookCPhrase(){
    const dinoWisdom = [
        "Treasure Island by Robert Louis Stevenson",
        "It's a high-flying adventure on a desert isle! Lots of moving parts, iconic characters, and scary pirates!",
        "Long John Silver was an interesting character to get to know. Is it respectable to switch sides over and over, just to survive?",
        "I love how, even though the other pirates are just mobs, they're given tons of respect as the most dangerous thing here!",
        "I like when Jim goes on a solo adventure, which drastically turns the tides, but upon returning has to catch up with how much has changed!",
    ];
    dinoQuote = dinoWisdom[bookCFlavor];
    bookCFlavor ++;
    if(bookCFlavor >= dinoWisdom.length)
        bookCFlavor = 0;
}
function bookDPhrase(){
    const dinoWisdom = [
        "The Jungle by Upton Sinclair",
        "I haven't read this book. I just haven't read it yet.",
        "On average it takes me 30 minutes to read 10 pages. The 20-page chapters make this less palatable.",
        "I do plan on reading this soon, but... maybe not SO soon, you know?",
        "I hear that it's an important book. It's in my backlog!",
    ];
    dinoQuote = dinoWisdom[bookDFlavor];
    bookDFlavor ++;
    if(bookDFlavor >= dinoWisdom.length)
        bookDFlavor = 0;
}
function bookEPhrase(){
    const dinoWisdom = [
        "The Anti-Ableist Manifesto by Tiffany Yu",
        "It's like 20% autobiography and 80% advice. It's mostly common sense, but it has lotsa sources, which is SO nice.",
        "Treat disabled people like regular people. Do research into how to best accommodate them in advance.",
        "Rather than representing disabled people as a non-disabled person, put disabled people into positions of power themselves.",
        "Build stuff with disabilities in mind, and those inclusive changes may bring more positives for non-disabled people, too, like ramps!",
        "Challenge yourself to use less offensive language like Retarded or Lame, and find words that mean what you mean instead.",
    ];
    dinoQuote = dinoWisdom[bookEFlavor];
    bookEFlavor ++;
    if(bookEFlavor >= dinoWisdom.length)
        bookEFlavor = 0;
}
function bookFPhrase(){
    const dinoWisdom = [
        "The Art of War by Sun Tzu",
        "It's all about how to WIN in war. It's pretty adaptable to competitive play in fighting games, though, assuming you hate fun.",
        "Keep a light load when traveling, and rely on local resources, guides, and spoils from raids.",
        "Terrain is massively important, and to get to different terrain, you need to know what the enemy intends to do, either by vibes or spies.",
        "The author adores spies, valuing them above all else. They make a strong case, too, as inteligence is everything.",
    ];
    dinoQuote = dinoWisdom[bookFFlavor];
    bookFFlavor ++;
    if(bookFFlavor >= dinoWisdom.length)
        bookFFlavor = 0;
}
function oatmealPhrase(){
    const dinoWisdom = [
        "Boy oh boy, do I love oatmeal.",
        "1, 2, Oatmeal",
        "Eins, Zwei, Haferbrei",
        "Oats are yummy with some cinnamon and salt, topped with whipped cream and rainbow sprinkles!",
        "You can have plain salted oatmeal with some jam on top and it tastes like biscuits and jam!",
    ];
    dinoQuote = dinoWisdom[oatmealFlavor];
    oatmealFlavor ++;
    if(oatmealFlavor >= dinoWisdom.length)
        oatmealFlavor = 0;
}
function pepperPhrase(){
    const dinoWisdom = [
        "Boy oh boy, do I dislike bell peppers.",
        "They're aromatic when raw and they make anything you cook taste like pepper.",
        "Peppers get wrinkly when you keep them too long. It's better than moldy, but that happens too.",
        "Different colors of bell pepper cost different amounts. I don't know why.",
        "They're full of seeds, seeds out the wazoo. You could probably plant a ton more. I don't know how to do that.",
    ];
    dinoQuote = dinoWisdom[pepperFlavor];
    pepperFlavor ++;
    if(pepperFlavor >= dinoWisdom.length)
        pepperFlavor = 0;
}
function freezerPhrase(){
    const dinoWisdom = [
        "It's a Freezer. You can buy then store ice in it.",
        "For something that freezes, it sure does get hot. I bet it costs a lot to run it all hours of the day.",
        "I'm so pampered! I have a freezer IN MY ROOM! Hehehe!",
        "You want a cold drink? Maybe an ice cream? Too bad, only ice in here.",
        "water become ice when it cold too long.",
    ];
    dinoQuote = dinoWisdom[freezerFlavor];
    freezerFlavor ++;
    if(freezerFlavor >= dinoWisdom.length)
        freezerFlavor = 0;
}
function icePhrase(){
    const dinoWisdom = [
        "Some ice. It's crunchy.",
        "Ice doesn't fill my belly on its own, but it prevents my hunger from reaching 0.",
        "It's also fun to crunch some ice!",
        "It hurts to hold ice too long, so I don't put it in my tail-bowl appendage thingy.",
        "See this here? It's an ice tray. Molds the dang water into cubes. Coolest thing I didn't see.",
    ];
    dinoQuote = dinoWisdom[iceFlavor];
    iceFlavor ++;
    if(iceFlavor >= dinoWisdom.length)
        iceFlavor = 0;
}
function fanPhrase(){
    const dinoWisdom = [
        "It's a... ceiling fan. Why is it broken? Because you thrifted it. Do the savings feel good?",
        "The amount this fan cools the room is very minimal. In fact, it might even heat it up because of the movement!",
        "There isn't even a light on this thing. It dangles super low, so I can't get up on my hind legs without risking getting bopped on the head.",
        "Actually it's more likely I'd break the fan by it hitting me. I don't want you telling me I owe you a brand new one.",
        "How many rotations per minute? I am a very busy dinosaur. You figure it out.",
    ];
    dinoQuote = dinoWisdom[fanFlavor];
    fanFlavor ++;
    if(fanFlavor >= dinoWisdom.length)
        fanFlavor = 0;
}
function doghousePhrase(){
    const dinoWisdom = [
        "It's the new DogHouse Mk. II! THANK YOU THANK YOU THANK YOU!!!",
        "This is the hot new toy every kid wants. It generates REAL smoke! Tap it!",
        "Poachers would keep it in a box forever, but that's a mistake: this thing is equipped with a \"Try Me\" button which will cake the inside of the box with soot.",
        "If you shake the box funny, it will go off. You don't even need to tap it hard, meaning getting it home in your car or on a bike might kill the resale value.",
        "Anyway, the real fans know that DogHouses are perfect for smoke signaling your friends! It's the hot new trend for phone-free communication!",
    ];
    dinoQuote = dinoWisdom[bookcaseFlavor];
    bookcaseFlavor ++;
    if(bookcaseFlavor >= dinoWisdom.length)
        bookcaseFlavor = 0;
}
function jugPhrase(){
    const dinoWisdom = [
        "Look at that 5-gallon water jug right there. I mean--",
        "It's unwieldy when empty and too heavy when full. You can't really swing it around like a hammer usually.",
        "If you blow on the top to do the bottle music thing, you'll ruin the water for everyone else.",
        "It doesn't even roll straight thanks to the bottleneck. Funny skew downhill; do you think it would stop when it swings?",
        "I kinda wanna stick my head into it... but I'd get stuck and suffocate. hm...",
    ];
    dinoQuote = dinoWisdom[jugFlavor];
    jugFlavor ++;
    if(jugFlavor >= dinoWisdom.length)
        jugFlavor = 0;
}
function shirtPhrase(){
    const dinoWisdom = [
        "A Tee Shirt reading \"Oats & Me\".",
        "It's my size, but I'm a quadroped, so you wouldn't be able to read the text on it if I wore it.",
        "Not to mention my spines. That would complicate things. Might not be too comfy.",
        "No, no! I love the shirt. Thank you for the thoughtful gift. I will hang it as a display piece.",
        "Please don't be mad at me. Pretend I wear it as pajamas.",
    ];
    dinoQuote = dinoWisdom[shirtFlavor];
    shirtFlavor ++;
    if(shirtFlavor >= dinoWisdom.length)
        shirtFlavor = 0;
}
function herbsPhrase(){
    const dinoWisdom = [
        "This is a plant replica, but its features are muted so as not to provoke legal action, since it is a product being sold for money.",
        "Its name is a reference to an infamous Super Mario Maker level called \"Trimming the Herbs\", significant for the Team 0% campaign.",
        "It was the last non-TAS level to be cleared, and it was controversial: there was a lot of debate on whether or not it was TAS-only.",
        "Eventually the level uploader revealed that, despite being a competition entry when it was first uploaded, the level was indeed TAS'd.",
        "The actual last level became \"The Last Dance\", but that didn't stop streamers from making thousands of attempts, clearing it for closure or clout.",
    ];
    dinoQuote = dinoWisdom[herbsFlavor];
    herbsFlavor ++;
    if(herbsFlavor >= dinoWisdom.length)
        herbsFlavor = 0;
}
