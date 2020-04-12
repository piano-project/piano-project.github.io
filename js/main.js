function aPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/A.mp3";
    audio.play();
}

function sPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/S.mp3";
    audio.play();
}

function dPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/D.mp3";
    audio.play();
}

function fPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/F.mp3";
    audio.play();
}

function gPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/G.mp3";
    audio.play();
}

function hPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/H.mp3";
    audio.play();
}

function jPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/J.mp3";
    audio.play();
}

function wPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/W.mp3";
    audio.play();
}

function ePressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/E.mp3";
    audio.play();
}

function tPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/T.mp3";
    audio.play();
}

function yPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/Y.mp3";
    audio.play();
}

function uPressed() {
    let audio = document.createElement("AUDIO");
    audio.src = "audio/U.mp3";
    audio.play();
}


document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        aPressed();
    }
    if (event.code == "KeyS") {
        sPressed();
    }
    if (event.code == "KeyD") {
        dPressed();
    }
    if (event.code == "KeyF") {
        fPressed();
    }
    if (event.code == "KeyG") {
        gPressed();
    }
    if (event.code == "KeyH") {
        hPressed();
    }
    if (event.code == "KeyJ") {
        jPressed();
    }
    if (event.code == "KeyW") {
        wPressed();
    }
    if (event.code == "KeyE") {
        ePressed();
    }
    if (event.code == "KeyT") {
        tPressed();
    }
    if (event.code == "KeyY") {
        yPressed();
    }
    if (event.code == "KeyU") {
        uPressed();
    }
});