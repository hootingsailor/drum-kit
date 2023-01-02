let btn = document.querySelectorAll(".drum");

function handleClick(){
    // alert("Clicked");
    let audio = new Audio("sounds/crash.mp3");
    audio.play();
}

for(let i=0; i<btn.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
} 