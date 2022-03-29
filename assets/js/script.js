const startButton = document.getElementById("start-button");
const scoreCounter = document.getElementById("score");
const highScore = document.getElementById("high-score");
const image = document.getElementsByClassName("image");

const icons = ['chicken', 'cow', 'pig', 'sheep'];

let sequence = [];
let playerSequence = [];
let round = 0;

startButton.addEventListener('click', (e) => {
    alert("You clicked start");
    scoreCounter.innerText = "0";
    newSequence();
});



function newSequence () {
    round += 1;
    let sequence = [];
    let newIcon = icons[Math.floor(Math.random() * icons.length)];
    sequence.push(newIcon);
    console.log(sequence);
    showSequence(newIcon);
}

function showSequence(newIcon) {
    console.log(newIcon);
    document.getElementById("$(newIcon)").classList.add("zoom");
    
    
    /*if newIcon == "sheep" {
        document.getElementById('sheep').classList.add('zoom');
    }
    /*if sequence.includes('sheep') {
        document.getElementById('sheep').classList.add('zoom');
    }
    
    /*if sequence === ["sheep"] {
        document.getElementById("sheep").classList.add("zoom");
    }
    
    /* iterate through sequence array and add css */
    /* then playerTurn() */
}


function playerTurn() {
/* adds event listener to icons */
/* test if player sequence matches sequence */
/* if matches score and high score+1

*/
}