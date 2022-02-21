const ids = ["hora", "min", "seg"];
let valores = [0, 0, 0]
let agora = new Date();
let hora = 0;
let minutos = 0;
let segundos = 0;


function updateClock(){
    let agora = new Date();
    hora = agora.getHours();
    minutos = agora.getMinutes();
    segundos = agora.getSeconds();
    valores = [hora, minutos, segundos]
    for(let i=0; i < ids.length; i++)
        document.getElementById(ids[i]).innerHTML = valores[i];
}

function relogio(){
    updateClock();
    setInterval("updateClock()", 2)
}

