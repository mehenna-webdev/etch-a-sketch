const container = document.querySelector('.gridContainer');
const gridSizeSlider = document.querySelector('.sizeSlider');
const gridSizeLabel = document.querySelector('.gridSizeValue');

function createGrid (size) {
    container.classList.add(size);
    let count = 0;
    switch (size) {
        case 'small':
            count = 64 * 64;
            break;
        case 'medium':
            count = 32 * 32;
            break;
        case 'large':
            count = 16 * 16;
            break;
        default:
            count = 16 * 16;
            break; 
    }
    for (let i = 0; i < count ; i++) {
        const item = document.createElement('div');
        item.classList.add('gridItem', size);
        container.appendChild(item);
    }
}
createGrid('large');
function addEventListeners () {
    let mouseDown;
    document.addEventListener('mousedown', () => {
        mouseDown = true;
    });
    document.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    document.addEventListener('mousemove', (e) => {

        if (!mouseDown) return;
        document.addEventListener('dragstart', (e) => e.preventDefault());
        const x = e.clientX;
        const y = e.clientY;
        const gridItems = document.querySelectorAll('.gridItem');
        gridItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
                item.classList.add('hovered');
            }
        });
    });
    
}
addEventListeners();

function gridSizeChange () {
    const gridSizeValues = {
        0: 'large',
        1: 'medium',
        2: 'small'
    };
    const gridLabelValues = {
        0: '16 x 16',
        1: '32 x 32',
        2: '64 x 64'
    };
    document.addEventListener('change', (e) => {
        const value = e.target.value;
        const size = gridSizeValues[value];
        container.innerHTML = '';
        container.classList.remove('small', 'medium', 'large');
        createGrid(size);
        gridSizeLabel.innerText = gridLabelValues[value];

    });
    
}
gridSizeChange();