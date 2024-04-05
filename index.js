// using play() method

function playaudio1() {
    var audio = new Audio("crash.mp3");
    audio.play();
}
document.querySelector(".w").addEventListener("click", playaudio1);

function playaudio2() {
    var audio = new Audio("kick-bass.mp3");
    audio.play(); 
}
document.querySelector(".a").addEventListener("click", playaudio2);

function playaudio3() {
    var audio = new Audio("snare.mp3");
    audio.play();
}
document.querySelector(".s").addEventListener("click", playaudio3);

function playaudio4() {
    var audio = new Audio("tom-1.mp3");
    audio.play();
}
document.querySelector(".d").addEventListener("click", playaudio4);

function playaudio5() {
    var audio = new Audio("tom-2.mp3");
    audio.play();
}
document.querySelector(".j").addEventListener("click", playaudio5);

function playaudio6() {
    var audio = new Audio("tom-3.mp3");
    audio.play();
}
document.querySelector(".k").addEventListener("click", playaudio6);

function playaudio7() {
    var audio = new Audio("tom-4.mp3");
    audio.play();
}
document.querySelector(".l").addEventListener("click", playaudio7);