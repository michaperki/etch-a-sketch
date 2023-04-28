// create a 16x16 grid of square divs
// create a new div element
// add a class of "grid" to the new div element
// append the new div element to the container div
// set the container div's style to display: grid
// set the container div's style to grid-template-columns: repeat(16, 1fr)
// set the container div's style to grid-template-rows: repeat(16, 1fr)
// set the container div's style to grid-gap: 1px
// set the container div's style to background-color: black
// set the container div's style to border: 1px solid black
// set the container div's style to width: 500px
// set the container div's style to height: 500px
// create a function that changes the color of a square to black when the mouse hovers over it
// create a function that changes the color of a square to black when the mouse hovers over it



// stop writing comments and start writing code
const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
const colorButton = document.querySelector('#color');
const blackButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
const eraserButton = document.querySelector('#eraser');
const slider = document.querySelector('#slider');

function createGrid(gridSize) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridGap = '1px';
    container.style.backgroundColor = 'black';
    container.style.border = '1px solid black';
    container.style.width = '500px';
    container.style.height = '500px';
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
    const grid = document.querySelectorAll('.grid');
    grid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
    }
    );
}

function resetGrid() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
}

function colorGrid() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
        });
    }
    );
}

function blackGrid() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
    }
    );
}

function rainbowGrid() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    }
    );
}

function eraserGrid() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'white';
        });
    }
    );
}

function changeGridSize() {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((div) => {
        div.remove();
    });
    createGrid(slider.value);
}

resetButton.addEventListener('click', resetGrid);
colorButton.addEventListener('click', colorGrid);
blackButton.addEventListener('click', blackGrid);
rainbowButton.addEventListener('click', rainbowGrid);
eraserButton.addEventListener('click', eraserGrid);
slider.addEventListener('change', changeGridSize);



createGrid(16);