const container = document.querySelector('div');
const outer = document.createElement('div')


for (let j = 0; j < 16; j++) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    for (let j = 0; j < 16; j++) {
        const col = document.createElement('div');
        col.style.display = 'flex';
        row.style.flexDirection = 'column';
        col.style.border = '1px black solid';
        col.style.height = '30px';
        col.style.width = '30px';
        col.style.backgroundColor = 'white';
        row.appendChild(col);
    }
    row.style.border = '1px black solid';
    row.style.backgroundColor = 'grey';
    container.appendChild(row);
}
