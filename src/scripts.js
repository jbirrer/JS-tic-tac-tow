let firstRow = [4, 5, 6];
let secondRow = [7, 8, 9];
let thirdRow = [10, 11, 12];
let occupied = [];
let scores = [0, 0];
activePlayer = 2;
let empty;
let drawCounter = 0;
let gameRunning = true;

let check = (e) => {
    if (gameRunning == false) return;
    if (occupied.includes(e)) return;
    if (activePlayer === 2) {
        document.querySelector("#" + e).textContent = "X";
        addScore(e);
        activePlayer = 1;
        occupied.push(e);
    } else {
        document.querySelector("#" + e).textContent = "O";
        addScore(e);
        activePlayer = 2;
        occupied.push(e);
    }
    if (
        (firstRow[0] === firstRow[1] && firstRow[1] === firstRow[2]) ||
        (secondRow[0] === secondRow[1] && secondRow[1] === secondRow[2]) ||
        (thirdRow[0] === thirdRow[1] && thirdRow[1] === thirdRow[2]) ||
        (firstRow[0] === secondRow[0] && secondRow[0] === thirdRow[0]) ||
        (firstRow[1] === secondRow[1] && secondRow[1] === thirdRow[1]) ||
        (firstRow[2] === secondRow[2] && secondRow[2] === thirdRow[2]) ||
        (firstRow[0] === secondRow[1] && secondRow[1] === thirdRow[2]) ||
        (thirdRow[0] === secondRow[1] && secondRow[1] === firstRow[2])
    ) {
        gameRunning = false;
        console.log("Winner: Player " + activePlayer);
        scores[activePlayer - 1] += 1;
        document.querySelector(".p" + activePlayer).textContent =
            scores[activePlayer - 1];
        setTimeout(() => {
            clear();
        }, 1000);
    }
    drawCounter += 1;
    if (drawCounter > 8) {
        setTimeout(() => {
            clear();
        }, 1000);
    }
};

let clear = () => {
    firstRow = [4, 5, 6];
    secondRow = [7, 8, 9];
    thirdRow = [10, 11, 12];
    occupied = [];
    drawCounter = 0;
    for (let i = 0; i < 9; i++) {
        document.querySelector(".item" + (i + 1)).textContent = empty;
    }
    gameRunning = true;
};

let addScore = (e) => {
    switch (e) {
        case "aa":
            firstRow[0] = activePlayer;
            break;
        case "ab":
            firstRow[1] = activePlayer;
            break;
        case "ac":
            firstRow[2] = activePlayer;
            break;
        case "ba":
            secondRow[0] = activePlayer;
            break;
        case "bb":
            secondRow[1] = activePlayer;
            break;
        case "bc":
            secondRow[2] = activePlayer;
            break;
        case "ca":
            thirdRow[0] = activePlayer;
            break;
        case "cb":
            thirdRow[1] = activePlayer;
            break;
        case "cc":
            thirdRow[2] = activePlayer;
            break;
    }
};

document.getElementById("aa").addEventListener("click", () => {
    check("aa");
});
document.getElementById("ab").addEventListener("click", () => {
    check("ab");
});
document.getElementById("ac").addEventListener("click", () => {
    check("ac");
});
document.getElementById("ba").addEventListener("click", () => {
    check("ba");
});
document.getElementById("bb").addEventListener("click", () => {
    check("bb");
});
document.getElementById("bc").addEventListener("click", () => {
    check("bc");
});
document.getElementById("ca").addEventListener("click", () => {
    check("ca");
});
document.getElementById("cb").addEventListener("click", () => {
    check("cb");
});
document.getElementById("cc").addEventListener("click", () => {
    check("cc");
});
 
