function playMusic(id){
    $("#btnPlay"+id).css("display", "none");
    $("#btnPause"+id).css("display", "block");
}
function pauseMusic(id){
    $("#btnPlay"+id).css("display", "block");
    $("#btnPause"+id).css("display", "none");
}
//funcion que carga el spectro
function cargar() {
    for (let i = 0; i < arreglo.length; i++) {
        cargarCanciones(i)
        espectro(i+1,arreglo[i][0], arreglo[i][1]);
    }
}

function espectro(id, contenedor, media){
    var Spectrum = WaveSurfer.create({
        container: '#'+contenedor,
        progressColor: "#65EEB7",
        barWidth: 3,
        width: 300,
        height: 60,
        maxCanvasWidth: 300,
        responsive: true 
    });

    var buttons = {
        play: document.getElementById("btnPlay"+id),
        pause: document.getElementById("btnPause"+id),
        stop: document.getElementById("btnStop"+id)
    };

    // Handle Play button
    buttons.play.addEventListener("click", function(){
            Spectrum.play();

            // Enable/Disable respectively buttons
        }, false);

        // Handle Pause button
        buttons.pause.addEventListener("click", function(){
            Spectrum.pause();

            // Enable/Disable respectively buttons
        }, false);


        // Handle Stop button
        /*buttons.stop.addEventListener("click", function(){
            Spectrum.stop();

            // Enable/Disable respectively buttons
            buttons.pause.disabled = true;
            buttons.play.disabled = false;
            buttons.stop.disabled = true;
        }, false);*/

    playFalco = true;
    Spectrum.on('ready', function () {
        playFalco = true;
    });

    Spectrum.load(media);
}