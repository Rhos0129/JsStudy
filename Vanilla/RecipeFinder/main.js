// variables
var keyword = document.querySelector('.keyword');
const resultContainer = document.querySelector('.result-container');
const searchBtn = document.querySelector('.search-btn');
const resultText = document.querySelector('.result-text');
var modal = document.querySelector("#modal");
var modalCloseBtn = document.querySelector("#modal-closeBtn");

// functions
function search(keyword){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`) // api 요청
    .then(res => res.json()) // propmise 객체로 반환
    .then(data => {
        var mealData=data.meals;
        if(mealData){
            resultText.innerHTML='';
            mealData.forEach(meal => addResult(meal.strMeal, meal.strMealThumb, meal.idMeal));
        } else{
            resultText.innerHTML="<h3> 검색결과가 없습니다. </h3>";
        }
    }
    ) // 서버에서 주는 json 데이터 읽기 
}

function openModal(id){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
        var mealData=data.meals[0];        
        document.querySelector('.modal-header h3').innerText = mealData.strMeal;
        document.querySelector('.modal-img img').setAttribute('src', mealData.strMealThumb);
        document.querySelector('.modal-content p').innerText = mealData.strInstructions;

        modal.classList.remove('hidden');
        modal.classList.add('show');
    })

}

function addResult(name, imgUrl, id){
    html=`
    <div class="result">
        <div class="meal-name">
            <h4>${name}</h4>
        </div>
        <div class="meal-img">
            <img src="${imgUrl}" alt="">
        </div>
        <button class="meal-modal-btn" onclick="openModal(${id})";>자세히 보기</button>
    </div>`;
    resultContainer.innerHTML+=html
}

function resultsClear(){
    while(resultContainer.hasChildNodes()){
        resultContainer.removeChild(resultContainer.firstChild);
    }
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

modalCloseBtn.addEventListener("click", e => {
    modal.classList.remove('show');
    modal.classList.add('hidden');
})