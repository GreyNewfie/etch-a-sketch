const grid = document.getElementById("grid");
let gridColor = "black";

function buildGrid(rows, columns) {
    for (i = 0; i < rows; i++) {
        const row = document.createElement("div");
        grid.append(row);
        row.classList.add("row");

        for (ii = 0; ii < columns; ii++) {
            const col = document.createElement("div");
            row.append(col);
            col.classList.add("square");
            col.addEventListener("mouseover", (e) => {
                let element = e.target;
                element.style.backgroundColor = gridColor;
            });
        }
    }
}

function resetGridSize(rows, columns) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    if (rows && columns) {
        buildGrid(rows, columns);
    } else {
        buildGrid(newGridSize, newGridSize);
    }
}

function clearGrid() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", clearGrid);

const colorButtons = document.querySelectorAll(".color-btn");

colorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const colorPicked = e.target.textContent.toLowerCase();
        const newColor = colorPicked.replace(/ /g,'');
        if (newColor === "softorange") {
            gridColor = "#F8CBA6";
        } else if (newColor === "lightblue") {
            gridColor = "#ECF9FF"
        } else {
            gridColor = newColor;
        }
    });
});

//Adjusts grid size based on range input when a new size is selected
const input = document.querySelector("input");
const output = document.getElementById("selected-size");

let newGridSize = input.value;
output.textContent = `${newGridSize} x ${newGridSize}`;

input.addEventListener("input", (e) => {
    newGridSize = e.target.value;
    output.textContent = `${input.value} x ${input.value}`;
    resetGridSize(newGridSize, newGridSize);
});

buildGrid(newGridSize, newGridSize);