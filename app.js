

const playAudioButton = document.getElementById('playAudio');
const checkButton = document.getElementById('checNumkHide');

function love(){
    playAudioButton.classList.add('design-b');
    checkButton.classList.add('hideCheck');
    const text = document.getElementById('innterLove');
    for (let i = 1; i <= 100; i++) {
        console.log( `i love you : ${i}`);
        const li = document.createElement('li');
        li.innerText = `I Love You : ${i}`;
        text.appendChild(li);
    }
    return text ;
};