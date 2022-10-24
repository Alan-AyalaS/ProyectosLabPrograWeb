var vp = document.getElementById("VillaCalabaza");
var papel = vp.getContext("2d");
var mapa = "/img/mapa.png";

var fondo = {
    url: "./img/mapa.png",
    cargaOk: false
}
var gallina = {
    url: "/img/gallina.png",
    cargaOk: false
};

var vaca = {
    url: "/img/vaca.png",
    cargaOk: false
};

var cerdo = {
    url: "/img/cerdo.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

gallina.imagen = new Image();
gallina.imagen.src = gallina.url;
gallina.imagen.addEventListener("load", cargarGallinas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function dibujar(){

    if(fondo.cargaOk == true){
        papel.drawImage(fondo.imagen, 0 ,0);
    }

    console.log(cantvaca);
    for (var v = 0; v < cantvaca; v++){
        if(vaca.cargaOk){
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5)
            var x = x * 80
            var y = y * 80
            papel.drawImage(vaca.imagen, x, y);
        }
    }

    console.log(cantgallina);
    for (var g = 0; g < cantgallina; g++){
        if(gallina.cargaOk){
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5)
            var x = x * 80
            var y = y * 80
            papel.drawImage(gallina.imagen, x, y);
        }
    }
    
    console.log(cantcerdo);
    for (var c = 0; c < cantcerdo; c++){
        if(cerdo.cargaOk){
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5)
            var x = x * 80
            var y = y * 80
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
}

function cargarFondo(){

    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas(){

    vaca.cargaOk = true;
    dibujar();
}

function cargarGallinas(){

    gallina.cargaOk = true;
    dibujar();
}

function cargarCerdos(){

    cerdo.cargaOk = true;
    dibujar();
}

function aleatorio(min, maxi){

    var res;
    res = Math.floor(Math.random() * (maxi - min +1)) + min;
    return res;

}
var cantvaca = aleatorio (1,25);
var cantgallina = aleatorio (1,25);
var cantcerdo = aleatorio (1-25);