const container = document.getElementById('container');
const button = document.querySelector('button');

for (let j = 0; j < 16; j++) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.style.display = 'flex';
        row.style.flexDirection = 'column';
        // col.style.border = '1px black solid';
        col.style.height = '30px';
        col.style.width = '30px';
        col.addEventListener('mouseover', (e) => {
            col.style.backgroundColor = 'red';
        })
        // col.style.backgroundColor = 'white';
        row.appendChild(col);

        button.addEventListener('click', (e) => {
            col.style.backgroundColor = 'white';
        })
    }
    row.childNodes[0].style.borderTop = '2px black solid';
    row.lastChild.style.borderBottom = '2px black solid';
    container.appendChild(row);
}
container.childNodes[1].style.borderLeft = '2px black solid';
container.lastChild.style.borderRight = '2px black solid';

