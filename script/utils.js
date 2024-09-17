
function hideElementById(elementId) {
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden');
}

function showElementById(elementId) {
    const playGround = document.getElementById(elementId);
    playGround.classList.remove('hidden');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0 -25

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    return alphabet;
    
}

function continueGame() {
    const alphabet = getARandomAlphabet();

    const p = document.getElementById('text');
    p.innerText = alphabet;

    // set bg key
    setBGKeyColorById(alphabet)
}

function setBGKeyColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function removeBgById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

