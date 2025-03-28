window.addEventListener('load', () => {
    start();
});

let includeClicked = false;

function start(){
    const amountOfRows = 10;
    const amountofCols = 10;
    for(let row = 0; row < amountOfRows; row++){
        for(let col = 0; col < amountofCols; col++){
            makeSquare(row, col);
        }
    }
    document.querySelector('input').addEventListener('change', () => {
        includeClicked = !includeClicked;
    });
}

function makeSquare(row, col){
    let square = document.createElement('div');
    square.dataset.row = row;
    square.dataset.col = col;
    square.addEventListener('click', () =>{
        toggleAdjacentSquares(row, col);
    });
    square.addEventListener('mouseenter', () =>{
        toggleSquare(row, col)
    });
    square.addEventListener('mouseleave', () =>{
        toggleSquare(row, col)
    });
    if((row % 2 === 0 && col % 2 === 0) || (row % 2 === 1 && col % 2 === 1)) {
        square.classList.add('white');
    } else {
        square.classList.add('black');
    }
    square.addEventListener('mousedown', dragStart);


    const container = document.getElementById('container');

    container.append(square);
}

function toggleAdjacentSquares(row, col) {
    const adjacent = [
        {row: row-1, col: col},    // up
        {row: row, col: col+1},    // right
        {row: row+1, col: col},    // down
        {row: row, col: col-1}     // left
    ];
    if(includeClicked){
        toggleSquare(row, col);
    }
    
    
    
    adjacent.forEach(pos => {
        if (isValidPosition(pos.row, pos.col)) {
            toggleSquare(pos.row, pos.col);
        }
    });
}
function isValidPosition(row, col) {
    return row >= 0 && row < 10 && col >= 0 && col < 10;
}

function toggleSquare(row, col) {
    const square = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    square.classList.toggle('active');
}


const square = document.getElementById('square');
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

square.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === square) {
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, square);
    }
}

function dragEnd() {
    isDragging = false;
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate(${xPos}px, ${yPos}px)`;
}