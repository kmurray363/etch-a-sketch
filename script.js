const body = document.querySelector('body');
const gridContainer = document.createElement('div');
gridContainer.classList.add("gridContainer");
body.appendChild(gridContainer);


function createGrid(gridSize){
    for(let y = 0; y < gridSize; y++){
        const row = document.createElement('div');
        row.classList.add(`row`, `y${y}`);
        gridContainer.appendChild(row);
        for(let x = 0; x < gridSize; x++){
            const column = document.createElement('div');
            column.classList.add(`column`, `x${x}`);
            column.onmouseover = () => {
                column.style.backgroundColor = 'black';
            };
            row.appendChild(column);
        };
    };
}

function createClearButton(){
    const clearButton = document.createElement('button');
    clearButton.classList.add('clearButton');
    gridContainer.appendChild('clearButton');
}


createGrid(160);
createClearButton();