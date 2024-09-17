



function play(){
    // Hide Home Screen
    hideElementById('home-screen')
    showElementById('play-ground')
    // Game Loop
    continueGame();
   
}
// Hide Play Screen
function score(){
    hideElementById('play-ground')
    showElementById('score-screen')
}

function reloadPage() {
    location.reload();
  }