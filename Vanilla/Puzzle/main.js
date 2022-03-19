// Varialbes
const container = document.querySelector(".image-container");
const startButton = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");

const tileCount = 16;

// li 넣기 : 반복문 대신 배열 이용
Array(tileCount).fill().forEach((_, i) => {
    const li = document.createElement("li");
    li.setAttribute('date-index', i);
    li.classList.add(`list${i}`); // Template String >> 백틱` + ${변수명}
    container.appendChild(li);
})
