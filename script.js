const container = document.getElementById('container');
const reset = document.getElementById('reset');
const erases = document.querySelector('#eraser');
const pencil = document.querySelector('#pencil');
const rainbow = document.querySelector('#rainbow');
const pickColor = document.querySelector('#color');
const shading = document.querySelector('#shading')
const gridSize = document.querySelector('#range');
let gridValue = document.querySelector('.grid-size');
let mode = '';

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
    grid.addEventListener('mouseover', changeColor)
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
  e.target.classList.add('black');
}

// reset grid
reset.addEventListener('click', () => resetGrid());
function resetGrid() {
  container.innerHTML = '';
  createGrid();
}


