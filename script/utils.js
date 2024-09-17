

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0 -25

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    return alphabet;
    
}

function setBGKeyColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}