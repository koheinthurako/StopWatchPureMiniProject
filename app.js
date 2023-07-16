const container = document.querySelector(".container");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const millisec = document.querySelector(".millisec");

document.addEventListener('DOMContentLoaded', function() {
    container.classList.add("loadingAnimation");
});

let hr = m = ms = s = 0;
let playTime;

play.addEventListener('click', playProgram);
pause.addEventListener('click', pauseProgram);
stop.addEventListener('click', stopProgram);

function playProgram() {
    pause.classList.remove("active");
    play.classList.add("active");
    clearInterval(playTime);
    
    playTime = setInterval( _ => {
        ms += 1;
        ms < 10 ? millisec.innerText = "0" + ms : millisec.innerText = ms;

        if(ms == 100) {
            s += 1;
            s < 10 ? sec.innerText = "0" + s : sec.innerText = s;
            ms = 0;
            millisec.innerText = ms;
        }

        if(s == 60) {
            m += 1;
            m < 10 ? min.innerText = "0" + m : min.innerText = m;
            s = 0;
            sec.innerText = "0" + s;
        }

        if(m == 60) {
            hr += 1;
            hour.innerText = hr;
            m = 0;
            min.innerText = "0" + m;
        }
    }, 10);
}

function pauseProgram() {
    play.classList.remove("active");
    pause.classList.add("active");
    clearInterval(playTime);
}

function stopProgram() {
    play.classList.remove("active");    
    if(!pause.classList.contains("active")) pause.classList.add("active");
    clearInterval(playTime);
    hr = m = s = ms = 0;
    hour.innerText = "0" + hr;
    min.innerText = "0" + m;
    sec.innerText = "0" + s;
    millisec.innerText = "0" + ms;
}