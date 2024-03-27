const gridContainer = document.getElementById("grid-container");
var gridSize = 16;

for (let i = 0; i < (gridSize * gridSize); i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    gridContainer.appendChild(pixel);
}