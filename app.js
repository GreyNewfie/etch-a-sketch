

function buildGrid(rows, columns) {
    const grid = document.getElementById("grid");

    for (i = 0; i < rows; i++) {
        const row = document.createElement("div");
        grid.append(row);
        row.classList.add("row");

        for (ii = 0; ii < columns; ii++) {
            const col = document.createElement("div");
            row.append(col);
            col.classList.add("square");
            col.addEventListener("mouseover", changeColor);
        }
    }
}

function changeColor(e) {
    e.target.classList.add("changeColor");
}

function clearGrid() {
    let squares = document.querySelectorAll(".square");
    console.log(squares);

    squares.forEach((square) => {
        square.classList.remove("changeColor");
    });
}

const clearButton = document.getElementById("clear-btn");
console.log(clearButton);
clearButton.addEventListener("click", clearGrid);

buildGrid(16, 16);