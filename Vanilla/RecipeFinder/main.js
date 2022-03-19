// variables
var keyword = document.querySelector('.keyword');
const resultContainer = document.querySelector('.result-container');
const searchBtn = document.querySelector('.search-btn');

// popup창 : localStorage에 데이터가 있다면 해당id의 레시피 읽기
if(localStorage.getItem('id')){ 
    var id = localStorage.getItem('id');
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
        var mealData=data.meals[0];
        document.querySelector('.popup-header h3').innerText = mealData.strMeal;
        document.querySelector('.popup-img img').setAttribute('src', mealData.strMealThumb);
        document.querySelector('.popup-content p').innerText = mealData.strInstructions;
    })
}


// functions
function search(keyword){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`) // api 요청
    .then(res => res.json()) // propmise 객체로 반환
    .then(data => {
        var i=0
        while(i<data.meals.length){
            var mealData=data.meals[i];
            addResult(mealData.strMeal, mealData.strMealThumb, mealData.idMeal);
            i=i+1;
        }
    }) // 서버에서 주는 json 데이터 읽기 
}

function addResult(name, imgUrl, id){
    var result=document.createElement("div")
    result.classList.add("result")
    
    var mealName=document.createElement("div");
    mealName.classList.add("meal-name");
    var mealNameText=document.createElement("h4");
    mealNameText.innerText= name;
    mealName.appendChild(mealNameText);

    var mealImg=document.createElement("div");
    mealImg.classList.add("meal-img");
    var mealImgUrl=document.createElement("img");
    mealImgUrl.setAttribute('src', imgUrl);
    mealImg.appendChild(mealImgUrl);

    var mealPopupBtn=document.createElement("button");
    mealPopupBtn.classList.add("meal-popup-btn");
    mealPopupBtn.innerText="자세히 보기";
    mealPopupBtn.onclick = function(){
        localStorage.setItem('id', id); // localStorage에 데이터 저장
        window.open('./popup.html',
            'recipe', 
            'left=130, bottom=100, location=no, resizable=no');
    }

    result.appendChild(mealName);
    result.appendChild(mealImg);
    result.appendChild(mealPopupBtn);
    resultContainer.appendChild(result);   
}

function resultsClear(){
    while(resultContainer.hasChildNodes()){
        resultContainer.removeChild(resultContainer.firstChild);
    }
}

function clearLocalStorage(){
    localStorage.removeItem('id');
}

// events
searchBtn.addEventListener('click', e => {
    resultsClear();
    search(keyword.value);
})

keyword.addEventListener('keypress', e => {
    if(e.key === 'Enter'){    // enter를 눌렀을 때  
        resultsClear();
        search(keyword.value);
    }
})