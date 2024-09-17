

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const p = document.getElementById('text');
    p.innerText = alphabet;

    // set bg key
    setBGKeyColorById(alphabet)
}

function play(){
    // Hide Home Screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // Game Loop
    continueGame();

    // ! ----------
    
    // Show PlayGround
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
}
function score(){

    
    const playGround = document.getElementById('play-ground');
    playGround.classList.add('hidden');
   
 
    const scoreScreen = document.getElementById('score-screen');
    scoreScreen.classList.remove('hidden');
}

function reloadPage() {
    location.reload();
  }