// variables
const container = document.querySelector(".image-container");
const startButton = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");

const tileCount = 16;
let tiles = [];

setGame();


// functions

// 타일 섞기
function setGame(){
    tiles = createImageTiles();
    tiles.forEach(tile => container.appendChild(tile));
    setTimeout(() => {
        container.innerHTML = "";
        shuffle(tiles).forEach(tile => container.appendChild(tile));
    }, 2000)
}

// 타일 생성하기 : 반복문 대신 배열 이용
function createImageTiles(){
    const tempArray=[]; 
    Array(tileCount).fill().forEach((_, i) => {
        const li = document.createElement("li");
        li.setAttribute('date-index', i);
        li.classList.add(`list${i}`); // Template String >> 백틱` + ${변수명}
        tempArray.push(li);
    })
    return tempArray;
}

// 순서 섞기
function shuffle(array){
    let index = array.length -1;
    while(index > 0){
        const randomIndex = Math.floor(Math.random()*(index+1));
        [array[index], array[randomIndex]]=[array[randomIndex],array[index]];
        index--;
    }
    return array;
}
