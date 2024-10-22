let sketchpadHTML = document.querySelector('.sketchpad');
let changeGridHTML = document.querySelector('#change-grid')

for (let i = 0; i < 256; i++) {
  const pixelHTML = document.createElement('div');
  sketchpadHTML.appendChild(pixelHTML);
  pixelHTML.classList.add('pixel')
  pixelHTML.style.width = `${32}px`;
  pixelHTML.style.height = `${32}px`;
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let pixelsHTML = document.querySelectorAll('.pixel');

pixelsHTML.forEach(pixel => {
  pixel.addEventListener('mousedown', turnBlack);
  pixel.addEventListener('mouseover', turnBlack);
});
changeGridHTML.addEventListener('click', changeGrid);

let currentGridSize = 16;

function changeGrid() {
  let amount = prompt("Select Grid Size: (Min: 1, Max: 100)", currentGridSize);
  if (amount == null) {
    amount = 16;
  } else {
    amount = parseInt(amount, 10);
  }
  if (1 <= amount && amount <= 100) {
  } else {
    amount = 16;
  }
  currentGridSize = amount;

  let grid = amount ** 2;
  let size = 512 / amount;

  const oldPixelsHTML = document.querySelectorAll('.pixel');
  oldPixelsHTML.forEach(e => e.remove());

  for (let i = 0; i < grid; i++) {
    const pixelHTML = document.createElement('div');
    sketchpadHTML.appendChild(pixelHTML);
    pixelHTML.classList.add('pixel')
    pixelHTML.style.width = `${size}px`;
    pixelHTML.style.height = `${size}px`;
  }

  let pixelsHTML = document.querySelectorAll('.pixel');

  pixelsHTML.forEach(pixel => {
    pixel.addEventListener('click', turnBlack);
    pixel.addEventListener('mouseover', turnBlack);
  });

}

function turnBlack(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  e.target.classList.add('black');
}
