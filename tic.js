let boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newgame-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerx player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = () => {
    turnO =true;
    enableBoxes();
    msgcontainer.classList.add("hide");

};

boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            Box.innerText = "O";
            turnO = false;
        } else {
            Box.innerText = "X";
            turnO = true;

        }
        Box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = () => {
    for (let Box of boxes) {
        Box.disabled = true;


    }
};

const enableBoxes = () => {
    for(let Box of boxes){
        Box.disabled = false;
        Box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

};



const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }

}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);































