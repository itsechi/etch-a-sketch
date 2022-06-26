const container = document.getElementById('container');
const reset = document.getElementById('reset');
const eraser = document.querySelector('#eraser');
const pencil = document.querySelector('#pencil');
const rainbow = document.querySelector('#rainbow');
const pickColor = document.querySelector('#color');
const shading = document.querySelector('#shading')
const gridSize = document.querySelector('#range');
let gridValue = document.querySelector('.grid-size');
let mode = '';

let isMouseDown = false;
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

gridValue.textContent = `50x50`; // display default size of the grid


// create grid
function createGrid(size) {
  size = gridSize.value;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    container.appendChild(grid);
    grid.addEventListener('mouseover', changeColor);
    grid.addEventListener('mousedown', changeColor);
  }
}
createGrid();


// change grid size depending on the user's choice
gridSize.addEventListener('input', function (e) {
  let currentSize = e.target.value;
  gridValue.textContent = `${currentSize}x${currentSize}`;
  resetGrid();
});


// change color
function changeColor(e) {
  if (e.type == 'mouseover' && !isMouseDown) return;
  if (mode === 'pencil') {
    e.target.classList.add('black');
    e.target.classList.remove('white');
    e.target.style.backgroundColor = null;
    e.target.style.opacity = null;
  } else if (mode === 'rainbow') {
    const green = Math.floor(Math.random() * 250);
    const blue = Math.floor(Math.random() * 250);
    const red = Math.floor(Math.random() * 250);
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    e.target.style.opacity = null;
  } else if (mode === 'erase') {
    e.target.classList.add('white');
    e.target.style.backgroundColor = null;
    e.target.style.opacity = null;
  } else if (mode === 'pickColor') {
    e.target.style.backgroundColor = pickColor.value;
    e.target.style.opacity = null;
  } else if (mode === 'shading') {
    e.target.classList.remove('white');
    e.target.classList.add('black');
    e.target.style.opacity = Number(e.target.style.opacity) + 0.2;
  } else {
    e.target.classList.add('black')
  }
}


// reset grid
reset.addEventListener('click', () => resetGrid());
function resetGrid() {
  container.innerHTML = '';
  createGrid();
}


// erase
eraser.addEventListener('click', () => eraseMode());
function eraseMode() {
  mode = 'erase';
}


// pencil
pencil.addEventListener('click', () => pencilMode());
function pencilMode() {
  mode = 'pencil';
}


// rainbow 
rainbow.addEventListener('click', () => rainbowMode());
function rainbowMode() {
  mode = 'rainbow';
}


// pick a color
pickColor.addEventListener('click', () => pickColorMode());
function pickColorMode() {
  mode = 'pickColor';
}

// shading
shading.addEventListener('click', () => shadeMode());
function shadeMode() {
  mode = 'shading';
}
