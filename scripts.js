const container = document.getElementById('container');
const clear = document.getElementById('clearGrid');
const input = document.querySelector('input');
const gridSizeText = document.getElementById('grid-size');
const randomColorButton = document.getElementById('rand-color');

console.log(gridSizeText)

console.log(randomColorButton)

function getSize() {
    return Number(input.value);
}

function clearGrid() {
    container.innerHTML = '';
    createGrid()
}

clearGrid();


clear.addEventListener('click', clearGrid)
input.addEventListener('input', (e) => {
    clearGrid();
});


function randomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`
}


function createGrid() {
    for (let j = 0; j < getSize(); j++) {
        gridSizeText.innerText = getSize();
        let heightWidth = 480 / getSize();
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.classList.add('row');
        for (let j = 0; j < getSize(); j++) {


            const col = document.createElement('div');

            col.classList.add('col');
            col.style.display = 'flex';
            row.style.flexDirection = 'column';
            col.style.height = `${heightWidth}px`;
            col.style.width = `${heightWidth}px`;
            col.addEventListener('mouseover', (e) => {
                col.style.backgroundColor = 'black';
                randomColorButton.addEventListener('click', (e) => {
                    col.style.backgroundColor = randomColor();
                })
            })


            row.appendChild(col);


        }
        row.childNodes[0].style.borderTop = '2px black solid';
        row.lastChild.style.borderBottom = '2px black solid';
        container.appendChild(row);
    }
    container.childNodes[0].style.borderLeft = '2px black solid';
    container.lastChild.style.borderRight = '2px black solid';

}

