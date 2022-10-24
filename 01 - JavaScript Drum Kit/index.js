const keys = document.querySelectorAll('.key');

const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if(!audio) return; //stop the function is pressed other keys
    audio.volume = 0.1;
    audio.currentTime = 0; //restart the audio
    audio.play();
    console.log(key);
    key.classList.add('playing');
}

const removeTransition = (e) => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
})

window.addEventListener('keydown', playSound);
