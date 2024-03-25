

const checkButton = document.getElementById('checNumkHide');
const playAudioButton = document.getElementById('playAudio');
const stopAudioButton = document.getElementById('stopAudio');

function love(){
    checkButton.classList.add('hideCheck');
    playAudioButton.classList.add('design-b');
    stopAudioButton.classList.add('design-b');
    const text = document.getElementById('innterLove');

    for (let i = 1; i <= 1001; i++) {
        console.log( `Happy Birth Day : ${i}`);
        const li = document.createElement('li');
        li.innerText = `Happy Birth Day : ${i}`;
        text.appendChild(li);
    }
    return text ;
};

const playAudio = () => new Audio("").play();
// const playAudio = () => new Audio("./audio/i-love-you.mp3").play();

const stopAudio = () => {
    // let player = document.getElementById('stopAudio');
    // (player.paused == true) ? toggle(0) : toggle(1);

    love();

};

// let player = document.getElementById("radio");
// player.onpause()