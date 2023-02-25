let gridColor = "black";

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
            col.addEventListener("mouseover", (e) => {
                let element = e.target;
                element.style.backgroundColor = gridColor;
            });
        }
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
        } else {
            gridColor = newColor;
        }
    });
});

buildGrid(16, 16);