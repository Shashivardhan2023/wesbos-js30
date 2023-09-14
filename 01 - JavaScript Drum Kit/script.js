function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; // TODO: Display "Invalid Key!" if a different key is pressed.

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function revertTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
    key.addEventListener('transitionend', revertTransition);
});

window.addEventListener('keydown', playSound);