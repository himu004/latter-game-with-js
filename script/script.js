document.addEventListener("keyup", (event) => {
  const playerPressed = event.key;

  // Get The pressed Latter
let pointInt = 0;
  const currentAlphabetElement = document.getElementById("text");

  const currentAlpha = currentAlphabetElement.innerText.toLowerCase();


  if (playerPressed === currentAlpha) {
    const point = document.getElementById("point");
    pointInt = parseInt(point.innerText);
    pointInt = pointInt + 1;
    point.innerText = pointInt;

    //    New Round
    removeBgById(currentAlpha);
    continueGame();
  } else {
    const life = document.getElementById("life");
    let lifeInt = parseInt(life.innerText);
    lifeInt = lifeInt - 1;

    life.innerText = lifeInt;

    if (lifeInt <= 0) {
        document.getElementById('text').innerText = 'Game Over';
        life.innerText = 0;
    }
    
  }
});

function play() {
  // Hide Home Screen
  hideElementById("home-screen");
  showElementById("play-ground");
  
//   const life = document.getElementById("life");
//   life.innerText = 5;
//   const point = document.getElementById("point");
//   point.innerText = 0;
  

  // Game Loop
  continueGame();
}
// Hide Play Screen
function score() {
  hideElementById("play-ground");
  showElementById("score-screen");
  const totalPoint = document.getElementById("total-point");
  totalPoint.innerText = point.innerText
  
}
// Play Again 
function playAgain() {
    location.reload();
}
