let rawString = "OOOOOOOOOGGGWWWBBBYYYGGGWWWBBBYYYGGGWWWBBBYYYRRRRRRRRR";
let stickerarray = rawString.split("");
const colors = ["orange-face", "green-face", "white-face", "blue-face", "yellow-face", "red-face"];

const board = document.getElementById("rubiks-board");

board.addEventListener('click', stickerChange);

function stickerChange(event){
    const clickedElement = event.target;
    if(!clickedElement.classList.contains('sticker')){
        return;
    }

    let index = colors.indexOf(clickedElement.classList.item(1));
    if(index == 5){
        clickedElement.classList.replace(clickedElement.classList.item(1), colors[0]);
    }
    else{
        clickedElement.classList.replace(clickedElement.classList.item(1), colors[index+1]);
    }

    let color;
    switch(clickedElement.classList.item(1)){
        case "orange-face":
            color = "O";
            break;
        case "green-face":
            color = "G";
            break;
        case "white-face":
            color = "W";
            break;
        case "blue-face":
            color = "B";
            break;
        case "yellow-face":
            color = "Y";
            break;
        case "red-face":
            color = "R";
            break;
    }
    stickerarray[clickedElement.dataset.index] = color;
}

function solveTheCube(){
    document.getElementById("solutionDisplay").innerText = "processing..."

    let userScramble = stickerarray.join("");

    let url = "http://localhost:8080/api/Solve?scramble=" + encodeURIComponent(userScramble);

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("solutionDisplay").innerText = data;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("solutionDisplay").innerText = "Server Error";
        });
}