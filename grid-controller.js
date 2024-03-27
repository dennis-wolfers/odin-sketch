const gridContainer = document.getElementById("grid-container");
var gridSize = 16;

for (let i = 0; i < (gridSize * gridSize); i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", function() {
        this.classList.add("touched");
    });
    gridContainer.appendChild(pixel);
}

function newGrid() {
    gridSize = prompt("Enter grid size");
    gridSize = gridSize < 101 ? gridSize : 100;
    const pixelSize = 960/gridSize;
    gridContainer.innerHTML = "";
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        pixel.addEventListener("mouseover", function() {
            this.classList.add("touched");
        });
        gridContainer.appendChild(pixel);
    }
}