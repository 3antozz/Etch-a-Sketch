const gridContainer = document.querySelector(".grid-container");
const body = document.querySelector("body");



createGrid(100);
function createGrid (number) {
    let rowDiv;
    for (let n=1; n <= number; n++) {
        rowDiv = document.createElement("div");
        rowDiv.setAttribute("style", "display: flex; flex: 1 1 auto; justify-content: center; box-sizing: border-box");
        for (let i=1; i <= number; i++){
            let newSquare = document.createElement("span");
            newSquare.setAttribute("style", "box-sizing: border-box; display: flex; flex: 1 1 auto; border-color: black; border-style: solid; border-width: 0.5px");
            rowDiv.appendChild(newSquare);
            gridContainer.appendChild(rowDiv);
        }
    };

}
