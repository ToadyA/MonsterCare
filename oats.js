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
        document.getElementById("sleep").style.backgroundColor = "#0d1ebd";
    }
    if(sleepiness >= 100 && !sleep){
        console.log("Too weary! He fell asleep on his own...");
        sleepiness = 100;
        sleep = true;
        document.getElementById("sleep").style.backgroundColor = "#0d1ebd";
    }
    if(sleepiness <= 0 && sleep){
        console.log("UP AND AT 'EM! IT'S MORNING!");
        sleep = false;
        sleepiness = 0;
        document.getElementById("sleep").style.backgroundColor = "#3c4ac4";
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
        {transform: "translateX(-100%) translateY(-30%)"},
        {transform: "translateX(-200%) translateY(0%)"},
        {transform: "translateX(-300%) translateY(200%)"},
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
        if(wiggles >= 81)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylo_reading.png' height='600px' width='600px'>";
        else if(wiggles >= 36)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/OatkyloFull.png' height='400px' width='400px'>";
        else if(wiggles >= 9)
            document.getElementById("Oatkylosaurus").innerHTML = "<img src='images/dino/Oatkylobaby.png' height='250px' width='250px'>";
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
        {transform: "translate(0%, 10%)"},
        {transform: "translate(-100%, 100%)"},
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
    }
    else{
        puffing = false;
        puff.stop();
    }
        
});
//fan animation
//shirt animation
//jug animation

///Store

//16 items to buy, length of 13 without foodstuffs. false means it's stocked, true means you've bought it.
let store = [false,false,false,false,false,false,false,false,false,false,false,false,false];

let shopping = false;
const shop = document.getElementById("Cart");
shop.addEventListener("click", () =>{
    if(!shopping){
        console.log("oh memories.");
        shopping = true;
        document.getElementById("mart").style.display = "block";
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
const buyOatmeal = document.getElementById("OatmealX");
buyOatmeal.addEventListener("click", () =>{
    if(moolah >= 19){
        grub(-19);
        oatStock ++;
        console.log("Thank you for your purchase of one serving of oats!");
    }
    else
        console.log("brokie. get lost.");
});
const buyPepper = document.getElementById("PepperX");
buyPepper.addEventListener("click", () =>{
    if(moolah >= 99){
        grub(-99);
        pepperStock ++;
        console.log("Thank you for your purchase of one Orange Bell Pepper!");
    }
    else
        console.log("brokie. get lost.");
});
let freezy = false;     //you cannot buy ice without a freezer
const buyIce = document.getElementById("IceX");
buyIce.addEventListener("click", () =>{
    if(freezy && moolah >= 1){
        grub(-1);
        iceStock += 10;
        console.log("Thank you for your purchase of a buncha ice chunks!");
    }
    else if (!freezy)
        console.log("Where are you going to put all that ice? Think!");
    else if(moolah < 1)
        console.log("MEGA brokie! Wow! I feel bad for you! But... no ice for you. get lost.");
});
const buyFreezer = document.getElementById("FreezerX");
buyFreezer.addEventListener("click", () =>{
    if(store[7] == false && moolah >= 1849){
        freezy = true;
        store[7] = true;
        grub(-1849);
        document.getElementById("FreezerX").style.display = "none";
        document.getElementById("Freezer").style.display = "block";
        console.log("Thank you for your purchase of one Freezer!");
    }
    else if(moolah < 1849)
        console.log("brokie. get lost.");
});
const buyFan = document.getElementById("FanX");
buyFan.addEventListener("click", () =>{
    if(store[8] == false && moolah >= 899){
        store[8] = true;
        grub(-899);
        document.getElementById("FanX").style.display = "none";
        document.getElementById("Fan").style.display = "block";
        console.log("Thank you for your purchase of one Ceiling Fan!");
    }
    else if(moolah < 899)
        console.log("brokie. get lost.");
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

///Right-Clicking the Furniture
let dinoQuote = "Yeah, I default-texted you. What of it?"
let dinoFlavor = 0;
let bookshelfFlavor = 0;
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
let doghouseFlavor = 0;
let jugFlavor = 0;
let shirtFlavor = 0;
let herbsFlavor = 0;
let ballFlavor = 0;

let talking = false;
const funnyDino = document.getElementById("Oatkylosaurus");
funnyDino.addEventListener("contextmenu", (e) => {
    if(talking){
        talking = false;
        document.getElementById("speechBubble").style.display = "none";
        document.getElementById("speechBubble").innerHTML="<p></p>"
        console.log("bubble cleared!");
    }
    else{
        document.getElementById("speechBubble").style.display = "block";
        console.log("talking about himself again. Big shocker.");
        dinoPhrase();
        document.getElementById("speechBubble").innerHTML="<p>" + dinoQuote +"</p>"
        talking = true;
    }
});
function dinoPhrase(){
    console.log("fetching a quote at index " + dinoFlavor);
    const dinoWisdom = [
        "This is my first non-default quote.",
        "Haha, one!",
        "I don't particularly care for having a ball pelted at me.",
        "Spiders.",
        "Spiders?",
        "Spiders!!",
        "Huh? Did I say something strange?",
        "This is the last quote in sequence.",
    ];
    dinoQuote = dinoWisdom[dinoFlavor];
    console.log("the quote: " + dinoWisdom[dinoFlavor]);
    dinoFlavor ++;
    if(dinoFlavor >= dinoWisdom.length)
        dinoFlavor = 0;
    console.log("dinoFlavor updated: " + dinoFlavor);
}
function bookAPhrase(){
    const dinoWisdom = [
        "Book A...",
        "It's the oats book.",
        "...",
        "That's all I have to say about that.",
        "What? I need to read more of it to form an opinion.",
    ];
    dinoQuote = dinoWisdom[bookAFlavor];
    bookAFlavor ++;
    if(bookAFlavor >= dinoWisdom.length)
        bookAFlavor = 0;
}

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
let quickMan = false;       //remembers your mistake(s)
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
shell.addEventListener("click", () =>{
    setTimeout(() => {
        document.getElementById("debris").style.display = "none";
    }, 990);
    if(sorty){
        quickMan = true;
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
    }, 200);
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
            if(!quickMan){
                rollSort.play();
                document.getElementById("oat").innerHTML = "<img src='images/work/RollOat.png' width='50px' height='50px'>";
                setTimeout(() => {
                    grub(9);
                }, 490);
            }
            else{
                quickSort.play();
                document.getElementById("oat").innerHTML = "<img src='images/work/QuickOat.png' width='50px' height='50px'>";
                setTimeout(() => {
                    grub(2);
                    document.getElementById("oat").innerHTML = "<img src='images/work/RollOat.png' width='50px' height='50px'>";
                }, 490);
            }
            sorty = false;
            quickMan = false;
            document.getElementById("debris").style.display = "block";
            console.log("Sorty restored to false and debris has returned.");
        }
        else
            console.log("You disappoint me, soldier. Punish: " + punish);
        
    }, 1000);
    
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
