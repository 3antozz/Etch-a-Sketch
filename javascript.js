// const gridContainer = document.querySelector(".grid-container");
const body = document.querySelector("body");
const changeGridButton = document.querySelector("#change-grid");
const gridToggle = document.querySelector("#grid-toggle");
const clearGrid = document.querySelector("#clear");
const buttonsWrapper = document.querySelector(".buttons-wrapper");
const mainDiv = document.querySelector(".main");
let gridContainer;



createGrid(40);
changeGrid();
function createGrid (number) {
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
        element.style.backgroundColor = "red";
    })


    document.addEventListener("mousedown", (e) => {
        isMouseDown = true;    
    })
        document.addEventListener("mouseup", (e) => {
        isMouseDown = false;
    })
        element.addEventListener("mouseenter", (e) => {
            if (isMouseDown) {
                element.style.backgroundColor = "red";
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
            mainDiv.removeChild(gridContainer);
            createGrid(32);
        }
        else if (1 <= squareNumber <= 80) {
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

            case "clear":
                square.style.backgroundColor = "white";
                break;
        
        }

    })

    

}

// mousenter