const startButton = document.getElementById("start-button");
const scoreCounter = document.getElementById("score");
const icons = ['chicken', 'cow', 'pig', 'sheep'];

let sequence = [];
let playerSequence = [];
let click = -1;
let score = 0;
let highScore = 0;


$(".image").click(function(playerClicked) {
    click++;
    let icon = playerClicked.target.id;
    /*playSound(icon);*/
    checkSequence(icon);
});

function checkSequence(icon) {
    playerSequence.push(icon);
    if(icon == sequence[click]) {
        if(playerSequence.length == sequence.length) {
            setTimeout(function() {
                playerSequence = [];
                click = -1;
                newSequence();
            }, 1500); 
        }
    }else {
        alert("GAME OVER, click start to try again");
            playerSequence = [];
            sequence = [];
            if (score > highScore) {
                highScore = score;
                $("#high-score").text(score);
            }
            score = 0;
            click = -1;
    }
}

startButton.addEventListener('click', (e) => {
    scoreCounter.innerText = "0";
    sequence = [];
    playerSequence = [];
    if(score <= 0) {
    newSequence();
    }
});

/*This function generates a new icon and inserts it into the sequence */
function newSequence() {
    score++;
    $("#score").text(score);

    let newIcon = icons[Math.floor(Math.random() * icons.length)];
    sequence.push(newIcon);
    /*playSound(newIcon);*/
    showSequence(newIcon);
};

/*function playSound(newIcon) {
    let sound = `assets/audio/${newIcon}.mp3`;
    let audio = new Audio(sound);
    audio.play();
} */

/*This function gets the element id corresponding to the randomly generated icon name 
and adds CSS styling to it*/
function showSequence(newIcon) {
    console.log(newIcon);
    document.getElementById(newIcon).classList.add("zoom");
    setTimeout(function () {
        document.getElementById(newIcon).classList.remove("zoom");
    }, 350);
};

function playerTurn() {
    for (let image of document.getElementsByClassName("image")) {
        let listener = image.addEventListener('click', (e) => {
            let playerClick = e.target.getAttribute("id");
            playerSequence.push(playerClick);
            console.log(playerSequence);
            sequenceTest();
        });
    };

};
