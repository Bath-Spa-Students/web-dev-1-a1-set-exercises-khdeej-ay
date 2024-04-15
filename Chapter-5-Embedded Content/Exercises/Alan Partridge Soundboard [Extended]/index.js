// ALAN PATRIDGE SOUNDBOARD | FURTHER EXTENSION 
// EXTERNAL JAVASCRIPT FILE 

// function that converts text to speech
function textToSpeech() {
    // gets the elemnets with the textToSpeech id
    var msg = document.getElementById("textToSpeech").value;
    var speech = new SpeechSynthesisUtterance();
    // sets english as the language
    speech.lang = "en-US";
    // gets the message
    speech.text = msg;
    // sets volume
    speech.volume = 1;
    // set sthe rate
    speech.rate = 1;
    // sets the pitch
    speech.pitch = 1;
    // text is spoken using the speech synthesis web API
    speechSynthesis.speak(speech);
}

// Function that plays the "Ahha" audio
function aha() {
    var audio = document.getElementById("ah-ha");
    audio.play();
}

// Function that plays the "Back Of The Net" audio
function backOfTheNet() {
    var audio = document.getElementById("back-of-the-net"); 
    audio.play();
}

// Function that plays the "Bang Out Of Order" audio
function bangOutOfOrder() {
    var audio = document.getElementById("bang-out-of-order");
    audio.play();
}

// Function that plays the "Beep" audio | self-insert
function beep() {
    var audio = document.getElementById("beep");
    audio.play();
}

// Function that plays the "Dan" audio
function dan() {
    var audio = document.getElementById("dan");
    audio.play();
}

// Function that plays the "Email Of The Evening" audio
function emailOfTheEvening() {
    var audio = document.getElementById("email-of-the-evening"); 
    audio.play(); 
}

// Function that plays the "Hello Patridge" audio
function helloPatridge() {
    var audio = document.getElementById("hello-patridge");
    audio.play();
}

// Function that plays the "I Ate A Scotch Egg" audio
function iAteAScotchEgg() {
    var audio = document.getElementById("i-ate-a-scotch-egg");
    audio.play();
}

// Function that plays the "I'm Confused" audio
function imConfused() {
    var audio = document.getElementById("im-confused");
    audio.play();
}

// Function that plays the "Boom" audio
function boom() {
    var audio = document.getElementById("boom");
    audio.play();
}

// Function that plays the "Cardinal" audio
function cardinal() {
    var audio = document.getElementById("cardinal"); 
    audio.play();
}

// Function that plays the "Guitar Riff" audio
function guitarRiff() {
    var audio = document.getElementById("guitarRiff");
    audio.play();
}

// Function that plays the "Mouse Click" audio | self-insert
function mouseClick() {
    var audio = document.getElementById("mouseClick");
    audio.play();
}

// Function that plays the "Notification" audio
function notification() {
    var audio = document.getElementById("notification");
    audio.play();
}

// Function that plays the "Pop" audio
function pop() {
    var audio = document.getElementById("pop"); 
    audio.play(); 
}

// Function that plays the "Trap" audio
function trap() {
    var audio = document.getElementById("trap");
    audio.play();
}

// Function that plays the "Whoosh" audio
function whoosh() {
    var audio = document.getElementById("whoosh");
    audio.play();
}

// Function that plays the "Wow" audio
function wow() {
    var audio = document.getElementById("wow"); 
    audio.play();
}
