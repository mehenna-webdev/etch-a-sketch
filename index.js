const container = document.querySelector('.gridContainer');

function fillContainer (){
    const count = 16 * 16; // 16x16 grid
    for (let i = 0; i < count; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        container.appendChild(gridItem);
    }
}
fillContainer();

function addHoverEffect() {
    const gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
        });
    });
}
addHoverEffect();