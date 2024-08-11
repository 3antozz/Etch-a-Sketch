// const gridContainer = document.querySelector(".grid-container");
const body = document.querySelector("body");
const changeGridButton = document.querySelector("#change-grid");
const gridToggle = document.querySelector("#grid-toggle");
const clearGrid = document.querySelector("#clear");
const buttonsWrapper = document.querySelector(".buttons-wrapper");
const mainDiv = document.querySelector(".main");
let gridContainer;



createGrid(32);
buttonsEventsHandler();
function createGrid (number) {
    gridContainer = document.createElement("div");
    gridContainer.setAttribute("style", "border-style: solid; border-color: black; border-width: 2px; user-select: none; background-color: white; padding: 1px; width: 500px; max-width: 500px; height: 500px; max-height: 500px; display: flex; flex-direction: column")
    let rowDiv;
    for (let n=1; n <= number; n++) {
        rowDiv = document.createElement("div");
        rowDiv.setAttribute("style", "display: flex; flex: 1 1 auto; justify-content: center; box-sizing: border-box");
        for (let i=1; i <= number; i++){
            let newSquare = document.createElement("span");
            newSquare.setAttribute("style", "box-sizing: border-box; display: flex; flex: 1 1 auto; border-color: black; border-style: solid; border-width: 0.1px; border-color: #eeeeee");
            mainDiv.appendChild(gridContainer);
            rowDiv.appendChild(newSquare);
            gridContainer.appendChild(rowDiv);
            handleMouseEvents(newSquare);
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

function buttonsEventsHandler () {
    buttonsWrapper.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "change-grid":
                let squareNumber = +prompt("how many squares on each side? MAX = 100", 32);
                console.log(squareNumber);
                console.log(typeof squareNumber);

                if (squareNumber > 100) {
                    alert ("Please enter a positive number under 100");
                }
                else if (squareNumber === null || squareNumber <= 0 || squareNumber != squareNumber){
                    alert ("Please enter a positive number under 100");
                    mainDiv.removeChild(gridContainer);
                    createGrid(32);
                }
                else if (1 <= squareNumber <= 100) {
                    mainDiv.removeChild(gridContainer);
                    createGrid(squareNumber);
                }
                break;
        }
    })

    

}

// mousenter