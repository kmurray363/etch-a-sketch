const body = document.querySelector('body');
const clearButton = document.createElement('button');
let gridContainer = document.createElement('div');

clearButton.classList.add('clearButton');
body.appendChild(clearButton);

let counter = 0;

function createGrid(gridSize){
    console.log(counter);
    if(counter = 1){gridContainer.remove()};
    counter = 1;
    gridContainer = document.createElement('div');
    gridContainer.setAttribute('id',"gridContainer");
    body.appendChild(gridContainer);

    for(let y = 0; y < gridSize; y++){
        const row = document.createElement('div');
        row.classList.add(`row`, `y${y}`);
        gridContainer.appendChild(row);
        for(let x = 0; x < gridSize; x++){
            const column = document.createElement('div');
            column.classList.add(`column`, `x${x}`);
            column.style.width = `${960/gridSize}px`;
            column.onmouseover = () => {
                column.style.backgroundColor = 'black';
            };
            row.appendChild(column);
        };
    };
}


clearButton.addEventListener('click',createGrid(prompt('Please enter a grid size.', 100)));