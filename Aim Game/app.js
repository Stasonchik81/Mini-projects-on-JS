const startBtn = document.querySelector('#start_game');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const counter = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event =>{
    if(event.target.classList.contains('time-btn'))
    {
       time = parseInt(event.target.getAttribute('data-time')); 
    }
    startGame();
})
board.addEventListener('click', event =>{
    if(event.target.classList.contains('circle')){
        score++;
        event.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    screens[1].classList.add('up');
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    
}
function decreaseTime() {
    if(time<=0){
        finishGame();
    }
    else{
        let current = --time;
        if(current<10){
            current=`0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    counter.innerHTML = `00:${value}`;
}

function finishGame(){
    board.innerHTML=`<h1>Счёт: <span class='primary'>${score}</span></h1>`;
    counter.parentNode.classList.add('hide');
}

function createRandomCircle() {
    let circle = document.createElement('div');
    let size = getRandomNum(10, 30);
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNum(0+size, width-size);
    const y = getRandomNum(0+size, height-size);

    circle.classList.add('circle');
    circle.style.height = `${size}px`;
    circle.style.width = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.backgroundColor = `rgb(${getRandomNum(50, 250)}, ${getRandomNum(50, 250)}, ${getRandomNum(50, 250)})`;

    board.append(circle);
}

function getRandomNum(max, min) {
    return Math.round(Math.random()*(max-min)+min);
    
}
