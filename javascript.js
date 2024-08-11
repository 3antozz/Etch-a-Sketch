// const gridContainer = document.querySelector(".grid-container");
const body = document.querySelector("body");
const changeGridButton = document.querySelector("#change-grid");
const gridToggle = document.querySelector("#grid-toggle");
const clearGrid = document.querySelector("#clear");
const buttonsWrapper = document.querySelector(".buttons-wrapper");
const mainDiv = document.querySelector(".main");
let gridContainer;
let rngToggle = false;
let redToggle = true;
let eraserToggle = false;
let instructionsTxt;
// let rngColors = false;



createGrid(40);
changeGrid();
function createGrid (number) {
    instructionsTxt = document.createElement("div");
    instructionsTxt.textContent = "Click & Drag \n to Draw!";
    instructionsTxt.classList.add("instructions");
    gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    let rowDiv;
    for (let n=1; n <= number; n++) {
        rowDiv = document.createElement("div");
        rowDiv.classList.add("one-row");
        for (let i=1; i <= number; i++){
            let newSquare = document.createElement("span");
            newSquare.classList.add("one-square");
            mainDiv.appendChild(gridContainer);
            mainDiv.appendChild(instructionsTxt);
            rowDiv.appendChild(newSquare);
            gridContainer.appendChild(rowDiv);
            handleMouseEvents(newSquare);
            buttonsEventsHandler(newSquare);
        }
    };
}

function handleMouseEvents(element) {
    let isMouseDown;

    element.addEventListener("click", (e) => {
        if (redToggle) {
            element.style.backgroundColor = "red";
        }
        else if (rngToggle){
            element.style.backgroundColor = getRandomColor();
        }
        else if (eraserToggle) {
            element.style.backgroundColor = "white";
        }
    })


    document.addEventListener("mousedown", (e) => {
        isMouseDown = true;    
    })
        document.addEventListener("mouseup", (e) => {
        isMouseDown = false;
    })
        element.addEventListener("mouseenter", (e) => {
            if (isMouseDown) {
                if (redToggle) {
                    element.style.backgroundColor = "red";
                }
                else if (rngToggle){
                    element.style.backgroundColor = getRandomColor();
                }
                else if (eraserToggle) {
                    element.style.backgroundColor = "white";
                }

            }
    })
}

function changeGrid () {
    changeGridButton.addEventListener("click", (e) => {
        let squareNumber = +prompt("how many squares on each side? MAX = 80");
        if (squareNumber > 80) {
            alert ("Please enter a positive number under 80");
        }
        else if (squareNumber === null || squareNumber <= 0 || squareNumber != squareNumber){
            alert ("Please enter a positive number under 80");
            mainDiv.removeChild(instructionsTxt);
            mainDiv.removeChild(gridContainer);
            createGrid(32);
        }
        else if (1 <= squareNumber <= 80) {
            mainDiv.removeChild(instructionsTxt);
            mainDiv.removeChild(gridContainer);
            createGrid(squareNumber);
        }
})
}


function buttonsEventsHandler (square) {
    let gridToggle = true;
    buttonsWrapper.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "grid-toggle":
                if (gridToggle) {
                    square.style.borderStyle = "none";
                    gridToggle = false;
                    break;
                }
                if (!gridToggle){
                    square.style.borderStyle = "solid";
                    gridToggle = true;
                    break;
                }

            case "red-color":
                redToggle = true;
                rngToggle = false;
                eraserToggle = false;
                break;

            case "rng-colors":
                rngToggle = true;
                redToggle = false;
                eraserToggle = false;
                break;
            
            case "eraser":
                eraserToggle = true;
                redToggle = false;
                rngToggle = false;
                break;


            case "clear":
                square.style.backgroundColor = "white";
                break;
        }
    })
    }
    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}

// mousenter