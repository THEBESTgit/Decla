// Variables globales para control del audio
let audio = new Audio('sound/feelit.mp3');
let audioIniciado = false;

// Configurar audio (una sola vez)
audio.loop = true;

// Función para iniciar audio (controlada)
function iniciarAudio() {
    if (!audioIniciado) {
        audio.play()
            .then(() => {
                audioIniciado = true;
                document.body.removeEventListener('click', iniciarAudio);
            })
            .catch(() => {
                alert("¡Haz clic en 'Aceptar' y luego en la página!");
            });
    }
}

// Evento único para el audio (en todo el cuerpo)
document.body.addEventListener('click', iniciarAudio);

// Botón SI
const yesBtn = document.querySelector('#yesBtn');
yesBtn.addEventListener('click', function() {
    alert('Sabía que ibas a decir que sí ❤️');
});

// Botón NO
const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover', function() {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    
    noBtn.style.top = `${randomY}%`;
    noBtn.style.left = `${randomX}%`;
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;
    
    // Bonus: Efecto de vibración para más diversión
    noBtn.style.transition = 'all 0.1s ease';
    setTimeout(() => {
        noBtn.style.transition = '';
    }, 100);
});