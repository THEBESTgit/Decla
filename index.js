// Variables globales
let audio = new Audio('sound/feelit.mp3');
let audioIniciado = false;
let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

// Configuración inicial
audio.loop = true;
audio.preload = 'auto';

// Función para iniciar audio
function iniciarAudio() {
    if (!audioIniciado) {
        audio.play()
            .then(() => {
                audioIniciado = true;
                document.body.removeEventListener(touchEvent, iniciarAudio);
            })
            .catch(error => {
                alert("Toca la pantalla para activar la música 🎵");
            });
    }
}

// Evento único para móviles y desktop
document.body.addEventListener(touchEvent, iniciarAudio, { passive: false });

// Botón SI (mejorado para touch)
const yesBtn = document.querySelector('#yesBtn');
yesBtn.addEventListener('click', function() {
    if (!audioIniciado) iniciarAudio();
    alert('Sabía que ibas a decir que sí ❤️');
});

// Botón NO (adaptado para touch)
const noBtn = document.querySelector('#noBtn');

function moverBoton() {
    const randomX = Math.random() * 80 + 10;  // Entre 10% y 90%
    const randomY = Math.random() * 80 + 10;
    
    noBtn.style.top = `${randomY}%`;
    noBtn.style.left = `${randomX}%`;
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;
}

// Eventos para móvil y desktop
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moverBoton();
});

noBtn.addEventListener('mouseover', moverBoton);

// Optimizar para móviles
document.addEventListener('DOMContentLoaded', function() {
    // Añadir clase táctil al body
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
});