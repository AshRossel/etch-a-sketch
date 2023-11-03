function createGrid(gridSize) {
    const squaresQuantity = gridSize * gridSize; 
    const container = document.querySelector('.container');

    // Clean the container if you reuse the function
    container.replaceChildren();

    let squarePixels = 960 / gridSize - 2;

    // Add squares in the container
    for (let i = 0; i < squaresQuantity; i++) {
      const square = document.createElement("div");
      square.style.cssText = `border: 1px solid gray; 
      height: ${squarePixels}px; width: ${squarePixels}px`;
      container.appendChild(square);
    }
}

function startDrawing() {
    const container = document.querySelector('.container');
    const squares = container.querySelectorAll('div');
    squares.forEach((square) => {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'black';
        })
    })
}

function chooseGridSize() {
    const btn = document.querySelector('.gridsize-button');
    btn.addEventListener('click', function() {
        let gridSize;
        do 
        {
            gridSize = Number(prompt('Choose a number up to 100'));
        }
        while(gridSize > 100);

        createGrid(gridSize);
        startDrawing();
    })
}

chooseGridSize();