let nopeAudio;
let imouttahereAudio;
let imouttahereInterval;

function runJavaScript(){
    // Stop the previous nope and imouttahere audio if they are playing
    if (nopeAudio) {
        nopeAudio.pause();
        nopeAudio.currentTime = 0;
    }
    if (imouttahereAudio) {
        imouttahereAudio.pause();
        imouttahereAudio.currentTime = 0;
    }
    // Clear the previous intervals if they exist
    if (imouttahereInterval) {
        clearInterval(imouttahereInterval);
    }

    let chosencolor = (prompt("Enter your favorite color:")); 
    if (chosencolor.toLowerCase() === "blue"){
        alert("YUP!!!");
        document.getElementById("resultImage").src = "pics/sonic.png";
        document.getElementById("resultImage").style.display = "block";
        document.getElementById("resultImage").classList.remove("translate-left", "translate-down"); //excludes centering the image
        let audio = new Audio('sounds/yea.mp3');
        audio.play();
    } else {
        alert("NOPE!!!");
        document.getElementById("resultImage").src = "pics/thatsnogood.gif";
        document.getElementById("resultImage").style.display = "block";
        document.getElementById("resultImage").classList.add("translate-left", "translate-down"); //centers the gif
        setTimeout(function() {
            nopeAudio = new Audio('sounds/nope.mp3');
            nopeAudio.volume = 0.6; // Set volume to 60%
            nopeAudio.play();
        }, 100); // plays nope.mp3 after 0.1 seconds

        setTimeout(function() {
            imouttahereAudio = new Audio('sounds/imouttahere.mp3');
            imouttahereAudio.play();
            imouttahereInterval = setInterval(function() {
                imouttahereAudio.play();
            }, 5400); // repeats imouttahere.mp3 every 5.4 seconds
        }, 2100); // plays imouttahere.mp3 after 2.1 seconds
    }
}