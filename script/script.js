
document.addEventListener('keyup', (event) => {
    const playerPressed = event.key;

    // Get The pressed Latter

    const currentAlphabetElement = document.getElementById('text');

    const currentAlpha = currentAlphabetElement.innerText.toLowerCase();

    if (playerPressed === currentAlpha) {
       console.log('Pointed');
       
    }
    else{
        console.log('lost');
    }
})


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


// Reload The Whole Game
function reloadPage() {
    location.reload();
  }