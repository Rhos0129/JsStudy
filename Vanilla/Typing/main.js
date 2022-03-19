// variables
const GAME_TIME=20;

let score = 0;
let time = GAME_TIME;
let words = [];
let isPlaying=false;
let timeInterval;
let checkInterval;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay=document.querySelector('.score');
const timeDisplay=document.querySelector('.time');
const button=document.querySelector('.button');

// events
init();


// functions
function init(){
    buttonChange('게임 로딩중..');
    getWords();
    wordInput.addEventListener('input', checkMatch);
}

function countDown(){
    timeDisplay.innerText=time;
    if(!isPlaying){
        clearInterval(timeInterval);
    }
    time > 0 ? time-- : isPlaying = false;
}

function buttonChange(text){
    button.innerText=text;
    if(text==='게임시작'){
        button.classList.remove('loading');
        wordInput.disabled = true;
        wordDisplay.innerText='???';        
    } else{
        button.classList.add('loading');
        wordInput.disabled = false;
        wordInput.value='';
    }
}

// 게임플레이 설정
function run(){ 
    if(isPlaying) return //중복실행이 안되도록
    isPlaying=true;
    time = GAME_TIME;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    getRandomWord()
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    buttonChange('게임중');
    wordInput.focus();
}

// 단어 가져오기 (api 이용)
function getWords(){    
    axios.get('https://random-word-api.herokuapp.com/word?number=50')
        .then(function(response){
            response.data.forEach((word) => { //단어 길이 짧은 것만
                if(word.length < 10){
                    words.push(word);
                }
            })
            buttonChange('게임시작');
        })
        .catch(function(error){
            console.log(error);
        })
    }

// 단어일치여부 확인 후 점수 올리기
function checkMatch(){
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        wordInput.value='';
        if(!isPlaying) return; //게임 중이 아니면 점수가 안오르도록
        score++;
        scoreDisplay.innerText=score;
        getRandomWord();
    }
}

// 게임상태 확인
function checkStatus(){
    if(!isPlaying && time === 0){
        buttonChange("게임시작");
        clearInterval(checkInterval);
    }
}

function getRandomWord(){
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerText = words[randomIndex];
}