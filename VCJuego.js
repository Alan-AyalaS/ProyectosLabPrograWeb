var dragValue;

function move(id){
    var gallina = document.getElementById("gallina");
    var vaca = document.getElementById("vaca");
    var cerdo = document.getElementById("cerdo");
    
    gallina.style.position = "absolute";
    gallina.onmousedown = function () {
        dragValue = gallina;
    }

    vaca.style.position = "absolute";
    vaca.onmousedown = function () {
        dragValue = vaca;
    }

    cerdo.style.position = "absolute";
    cerdo.onmousedown = function () {
        dragValue = cerdo;
    }
    
}

document.onmouseup = function (e) {
    dragValue = null;
}
document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

    dragValue.style.left = x + "px";
    dragValue.style.top = y + "px";
}

/*function allowDrop(ev) {
    ev.preventDefault();
}

function drag () {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    if (arreglo == ""){
        var data = ev.dataTransfer.getData("text");
        arreglo = data;
        ev.target.appendChild(document.getElementById(data));
    }
}*/