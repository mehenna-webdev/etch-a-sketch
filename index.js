const container = document.querySelector('.gridContainer');
const resizeBtn = document.getElementById('resizeBtn');
const containerSize = 480; // px

function clearContainer() {
    container.innerHTML = '';
}

function fillContainer(squaresPerSide) {
    clearContainer();
    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSize = (containerSize - (squaresPerSide + 1)) / squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.style.width = `${squareSize}px`;
        gridItem.style.height = `${squareSize}px`;
        container.appendChild(gridItem);
    }
    addHoverEffect();
}

function addHoverEffect() {
    const gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            let darkness = item.getAttribute('data-darkness');
            if (!darkness) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                item.setAttribute('data-base-color', `${r},${g},${b}`);
                item.setAttribute('data-darkness', 1);
                item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else {

                let darkLevel = parseInt(darkness);
                if (darkLevel < 10) {
                    darkLevel++;
                    const [r, g, b] = item.getAttribute('data-base-color').split(',').map(Number);
                    const factor = (10 - darkLevel) / 10;
                    const newR = Math.floor(r * factor);
                    const newG = Math.floor(g * factor);
                    const newB = Math.floor(b * factor);
                    item.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
                    item.setAttribute('data-darkness', darkLevel);
                }
            }
        });
    });
}



fillContainer(16);


resizeBtn.addEventListener('click', () => {
    let input = prompt("Enter number of squares per side (1–100):");
    const num = parseInt(input);
    if (isNaN(num) || num < 1 || num > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        fillContainer(num);
    }
});
