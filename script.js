var numberOfButtons = $(".drum").length;

for (var i=0; i<numberOfButtons; i++) {
    $(".drum")[i].addEventListener("click", function() {
         var key = this.innerHTML;
        key = key.substring(3, 4);
        playSound(key);
        addAnimation(key);
    });
 
}

$(document).on("keypress", function(event) {
    $("h1").text(event.key.toUpperCase());
    var keyPressed = event.key;
    keyPressed = keyPressed.toUpperCase();
    playSound(keyPressed);
    addAnimation(keyPressed);
});

function playSound(key) {
    switch (key) {
        case "A" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "S" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "D" :
            var tom3 = new Audio("sounds/tom-3.mp3"); 
            tom3.play();
            break;
        case "F" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "J" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "K" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "L" :
            var kickBase = new Audio("sounds/kick-bass.mp3");
            kickBase.play();
            break;                    
        default:
            console.log(key);
            break;
    }
}

function addAnimation(keypress) {
    document.querySelector("." + keypress).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + keypress).classList.remove("pressed");
    }, 100);
}


$(".title").on("mouseover", function() {
    playSound("A");
    setTimeout(function() {
        playSound("S")
        setTimeout(function() {
            playSound("D");
            setTimeout(function() {
                playSound("F");
                setTimeout(function() {
                    playSound("J");
                    setTimeout(function() {
                        playSound("K");
                        setTimeout(function() {
                            playSound("L");
                        }, 300);
                    }, 300);
                }, 300);
            }, 300);
        }, 300);
    }, 300);
});


