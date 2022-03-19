// variables
const container = document.querySelector(".image-container");
const startButton = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");

const tileCount = 16;
let tiles = [];

const dragged = {
    el: null,
    class: null, // 타일 생성시 부여한 className
    index: null // 섞인 후 타일의 위치
}

let gamePlaying = false;


// functions

// 타일 섞기
function setGame(){
    isPlaying = true;
    container.innerHTML = "";
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
        li.setAttribute('data-index', i);
        li.setAttribute('draggable', 'true');
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

// 타일이 올바른 위치에 있는지 확인하기
function checkStatus(){
    const currentList = [...container.children];
    const unMatchedList = currentList.filter((child, index) => Number(child.getAttribute('data-index')) !== index ) // 한줄이므로 return도 생략
    if(unMatchedList.length === 0){
        gameText.getElementsByClassName.display="block";
        gamePlaying = false;
    } 
}


// events

// Drag & Drops : li에서 drag설정을 해야 깔끔하게 잘 된다.
container.addEventListener('dragstart', e => { // 택한 타일 설정
    if(!isPlaying) return;
    const obj=e.target // 옮기려고 택한 타일
    dragged.el = obj;
    dragged.class = obj.className;
    dragged.index = [ ...obj.parentNode.children].indexOf(obj); // indexOf()는 대상이 배열이여야 한다. 원래는 배열형태의 Object이므로 es6문법으로 강제로 배열로 변경
})
container.addEventListener('dragover', e => {
    e.preventDefault() // drop이벤트가 발생할 수 있도록 기본동작 막기
})
container.addEventListener('drop', e => { 
    if(!isPlaying) return;
    const obj=e.target; // 옮길 위치의 타일
    
    if(obj.className !== dragged.class){ // 타일을 옮기면 내부코드 실행
        let originPlace;
        let isLast = false;

        console.log({dragged})
    
        if(dragged.el.nextSibling){
            originPlace = dragged.el.nextSibling; // 타일을 변경하면 원래위치의 타일은 뒤로 밀리므로!
        } else {
            originPlace = dragged.el.previousSibling; // 마지막 타일을 택하면 다음타일이 없으므로.. 앞타일을 저장
            isLast = true;
        }

        const droppedIndex = [ ...obj.parentNode.children].indexOf(obj);
        dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el); // Drag한 타일을 Drop한 위치 앞, 뒤에 넣기 -> 타일이 뒤로 한칸이 밀린다.
        isLast ? originPlace.after(obj) : originPlace.before(obj); // Drag한 타일과 Drop할 위치의 타일의 위치만 바꾼다.
    }
    checkStatus();
})

// Start버튼 
startButton.addEventListener('click', () => {
    setGame();
})