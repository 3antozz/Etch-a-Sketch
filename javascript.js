const squaresContainer = document.querySelector(".square-container");
console.log(squaresContainer);
const oneSquare = document.createElement("span");
console.log(oneSquare);
oneSquare.setAttribute("style", "height: 20px; width: 20px; border-style: solid; border-color: black");
squaresContainer.appendChild(oneSquare);