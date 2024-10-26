window.onload = function() {
    var audio = document.getElementById('miCancion');
    audio.volume = 0.5; // Ajusta el volumen aquí (0.0 a 1.0)
    audio.play().catch(function(error) {
        console.log('Error al intentar reproducir el audio:', error);
    });
};
