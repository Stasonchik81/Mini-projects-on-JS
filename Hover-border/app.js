const board =document.querySelector('#board');
const SQUARES_NUM = 594;
const COLORS =  ['aquamarine','blueviolet','chocolate','darkcyan','khaki']

for (let index = 0; index < SQUARES_NUM; index++) {
    let square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', ()=>{
        changeColor(square);
    })

    square.addEventListener('mouseleave', ()=>{
        removeColor(square);
    })

    board.append(square);
    
}
function changeColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const idx = Math.floor(Math.random()*COLORS.length);
    return COLORS[idx];
    
}
