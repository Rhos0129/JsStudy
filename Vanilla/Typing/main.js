// variables
const GAME_TIME=5;

let score = 0;
let time = GAME_TIME;
let isPlaying=false;
let timeInterval;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay=document.querySelector('.score');
const timeDisplay=document.querySelector('.time');
const button=document.querySelector('.button');

// events
wordInput.addEventListener('input', () => {
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        score++;
        scoreDisplay.innerText=score;
        wordInput.value='';
    }
})

buttonChange('게임시작')

// functions
function countDown(){
    timeDisplay.innerText=time;
    if(!isPlaying){
        clearInterval(timeInterval);
    }
    time > 0 ? time-- : isPlaying = false;
}

function buttonChange(text){
    button.innerText=text;
    text==='게임시작' ? button.classList.remove('loading'): button.classList.add('loading');
}

function run(){ 
    isPlaying=true;
    time = GAME_TIME;
    timeInterval = setInterval(countDown, 1000);
}
