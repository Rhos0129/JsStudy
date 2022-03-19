// variables
let score = 0;
let time = 5;
let isPlaying=false;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay=document.querySelector('.score');
const timeDisplay=document.querySelector('.time');

// events
wordInput.addEventListener('input', () => {
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        score++;
        scoreDisplay.innerText=score;
        wordInput.value='';
    }
})

setInterval(countDown, 1000);

// functions
function countDown(){
    time > 0 ? time-- : isPlaying = false;
    timeDisplay.innerText=time;
}
