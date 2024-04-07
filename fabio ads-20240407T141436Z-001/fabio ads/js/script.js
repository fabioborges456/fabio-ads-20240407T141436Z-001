const minutesEL=document.querySelector("#minutes")
const secondsEL=document.querySelector("#seconds")
const millisecondsEL=document.querySelector("#milliseconds")
const startBtn=document.querySelector("#startBtn")
const pauseBtn=document.querySelector("#pauseBtn")
const resumeBtn=document.querySelector("#resumeBtn")
const resetBtn=document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pausetimer)
resumeBtn.addEventListener("click",resumetimer)
resetBtn.addEventListener("click",resetTimer)


function startTimer(){

    interval = setInterval(() => {

     if(!isPaused){
         milliseconds += 10;

        if(milliseconds === 1000){
          seconds++;
          milliseconds = 0;

        }
       
        if(seconds === 60){
        minutes ++;
        seconds = 0;

        }

        minutesEL.textContent =formatTime (minutes);
        secondsEL.textContent =formatTime (seconds);
        millisecondsEL.textContent =formatMillseconds (milliseconds);
     }   

    }, 10);
    
    startBtn.style.display = "none";
    pauseBtn.style.display ="block";
}

function pausetimer(){
   isPaused =true;
   pauseBtn.style.display ="none";
   resumeBtn.style.display ="block";

}

function resumetimer(){
    isPaused = false;
    pauseBtn.style.display ="block";
    resumeBtn.style.display ="none";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds =0;

  minutesEL.textContent = "00";
  secondsEL.textContent = "00";
  millisecondsEL.textContent ="000";


  startBtn.style.display ="block";
  pauseBtn.style.display ="none";
  resumeBtn.style.display ="none";
  

}



function formatTime(time){
     return time < 10 ? `0${time}` : time;
}
function formatMillseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}