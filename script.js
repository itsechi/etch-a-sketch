const container = document.getElementById('container');



// create grid
function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    container.appendChild(grid);
    grid.addEventListener('mouseover', changeColor)
  }
}
createGrid(16);



// change color
function changeColor(e) {
  e.target.classList.add('black');
}
