var buttonsArray = document.querySelectorAll(".drum");

for (var i = 0; i < buttonsArray.length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var audio = new Audio("./sounds/kick-bass.mp3")
        audio.play()
    })
}

