// const gridContainer = document.querySelector(".grid-container");
const body = document.querySelector("body");
const changeGridButton = document.querySelector("#change-grid");
const gridToggle = document.querySelector("#grid-toggle");
const clearGrid = document.querySelector("#clear");
const buttonsWrapper = document.querySelector(".buttons-wrapper");
const mainDiv = document.querySelector(".main");
const redButton = document.querySelector("#red-color");
const gridToggleButton = document.querySelector("#grid-toggle");
const rngToggleButton = document.querySelector("#rng-colors");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");
const transparencyButton = document.querySelector("#transparent-toggle");
const colorPicker = document.querySelector("#color-picker");
const colorBoxWrapper = document.querySelector(".color-box-wrapper");
const colorBox1 = document.querySelector("#box1");
const colorBox2 = document.querySelector("#box2");
const colorBox3 = document.querySelector("#box3");
gridToggleButton.classList.add("grid-selected");
redButton.classList.add("selected");
let gridContainer;
let rngToggle = false;
let redToggle = true;
let eraserToggle = false;
let opacityToggle = false;
let instructionsTxt;
// let rngColors = false;



createGrid(30);
changeGrid();
storeRecentColors();
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

    element.addEventListener("mousedown", (e) => {
        if (redToggle) {
            if (opacityToggle) {
                let squareOpacity = +element.style.opacity;
                squareOpacity += 0.1;
                element.style.opacity = squareOpacity;
            }
            if (!opacityToggle) {
                element.style.opacity = "";
            }
            element.style.backgroundColor = colorPicker.value;
        }
        else if (rngToggle){
            if (opacityToggle) {
                // element.style.opacity = 0;
                let squareOpacity = +element.style.opacity;
                squareOpacity += 0.1;
                element.style.opacity = squareOpacity;
            }
            if (!opacityToggle) {
                element.style.opacity = "";
            }
            element.style.backgroundColor = getRandomColor();
        }
        else if (eraserToggle) {
            element.style.backgroundColor = "white";
            element.style.opacity = "";
        }
    })



    element.addEventListener("click", (e) => {
        if (redToggle) {
            if (opacityToggle) {
                let squareOpacity = +element.style.opacity;
                squareOpacity += 0.1;
                element.style.opacity = squareOpacity;
            }
            if (!opacityToggle) {
                element.style.opacity = "";
            }
            element.style.backgroundColor = colorPicker.value;
        }
        else if (rngToggle){
            if (opacityToggle) {
                // element.style.opacity = 0;
                let squareOpacity = +element.style.opacity;
                squareOpacity += 0.1;
                element.style.opacity = squareOpacity;
            }
            if (!opacityToggle) {
                element.style.opacity = "";
            }
            element.style.backgroundColor = getRandomColor();
        }
        else if (eraserToggle) {
            element.style.backgroundColor = "white";
            element.style.opacity = "";
        }
    })


    document.addEventListener("mousedown", (e) => {
        clearButton.classList.remove("selected");
        isMouseDown = true;    
    })
        document.addEventListener("mouseup", (e) => {
            isMouseDown = false;
    })
        element.addEventListener("mouseenter", (e) => {
            if (isMouseDown) {
                if (redToggle) {
                    if (opacityToggle) {
                        let squareOpacity = +element.style.opacity;
                        squareOpacity += 0.1;
                        element.style.opacity = squareOpacity;
                    }
                    if (!opacityToggle) {
                        element.style.opacity = "";
                    }
                    element.style.backgroundColor = colorPicker.value;
                }
                else if (rngToggle){
                    if (opacityToggle) {
                        let squareOpacity = +element.style.opacity;
                        squareOpacity += 0.1;
                        element.style.opacity = squareOpacity;
                    }
                    if (!opacityToggle) {
                        element.style.opacity = "";
                    }
                    element.style.backgroundColor = getRandomColor();
                }
                else if (eraserToggle) {
                    element.style.backgroundColor = "white";
                    element.style.opacity = "";
                }

            }
    })
}

function changeGrid () {
    changeGridButton.addEventListener("click", (e) => {
        let squareNumber = +prompt("How many squares on each side? MAX = 80");
        if (squareNumber > 80) {
            alert ("Please enter a positive number under 80");
        }
        else if (squareNumber === null || squareNumber <= 0 || squareNumber != squareNumber){
            alert ("Please enter a positive number under 80");
        }
        else if (1 <= squareNumber <= 80) {
            mainDiv.removeChild(instructionsTxt);
            mainDiv.removeChild(gridContainer);
            createGrid(squareNumber);
        }
})
}


function buttonsEventsHandler (square) {
    let transparencyToggle = false;
    let gridToggle = true;
    buttonsWrapper.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "grid-toggle":
                if (gridToggle) {
                    square.style.borderStyle = "none";
                    gridToggle = false;
                    gridToggleButton.classList.remove("grid-selected");
                    break;
                }
                if (!gridToggle){
                    square.style.borderStyle = "solid";
                    gridToggle = true;
                    gridToggleButton.classList.add("grid-selected");
                    break;
                }

            case "transparent-toggle":
                if (transparencyToggle) {
                    transparencyToggle = false;
                    transparencyButton.classList.remove("grid-selected");
                    opacityToggle = false;
                    break;
                }

                if (!transparencyToggle) {
                    transparencyToggle = true;
                    transparencyButton.classList.add("grid-selected");
                    opacityToggle = true;
                    break;
                }


            case "red-color":
                redToggle = true;
                rngToggle = false;
                eraserToggle = false;
                redButton.classList.add("selected");
                rngToggleButton.classList.remove("selected");
                eraserButton.classList.remove("selected");
                clearButton.classList.remove("selected");
                break;

            case "rng-colors":
                rngToggle = true;
                redToggle = false;
                eraserToggle = false;
                rngToggleButton.classList.add("selected");
                redButton.classList.remove("selected");
                eraserButton.classList.remove("selected");
                clearButton.classList.remove("selected");
                break;
            
            case "eraser":
                eraserToggle = true;
                redToggle = false;
                rngToggle = false;
                eraserButton.classList.add("selected");
                redButton.classList.remove("selected");
                rngToggleButton.classList.remove("selected");
                clearButton.classList.remove("selected");
                break;


            case "clear":
                square.style.opacity = "";
                square.style.backgroundColor = "white";
                clearButton.classList.add("selected");
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
    function storeRecentColors() {
        let box1Hex = "#ff0000";
        let box2Hex = "#5d00ff";
        let box3Hex = "#00ff2f";
        colorBox1.style.backgroundColor = box1Hex;
        colorBox2.style.backgroundColor = box2Hex;
        colorBox3.style.backgroundColor = box3Hex;
        colorPicker.addEventListener("change", () => {
            console.log(colorBox3.style.backgroundColor = colorBox2.style.backgroundColor);
            box3Hex = box2Hex;
            console.log(colorBox2.style.backgroundColor = colorBox1.style.backgroundColor);
            box2Hex = box1Hex;
            box1.style.backgroundColor = colorPicker.value;
            box1Hex = colorPicker.value;
        })

        colorBoxWrapper.addEventListener("click", (element) => {
            switch (element.target.id) {

                case "box1":
                    colorPicker.value = box1Hex;
                    break;
                case "box2":
                    colorPicker.value = box2Hex;
                    break;
                case "box3":
                    colorPicker.value = box3Hex;
                    break;
            } 
        })


    }











// mousenter
            // let squareOpacity = +element.style.opacity;
            // squareOpacity += 0.1;
            // console.log(element.style.opacity = squareOpacity);