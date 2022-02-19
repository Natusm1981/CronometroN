let startC = 0;
let endC = 0;
let total
let cronoMs = 0;
let cronoS = 0;
let cronoM = 0;
let cronoH = 0;
let resto = 0;
let parando = false;

const ids = ["hora", "min", "seg"];
const idCrono = ["cronoH", "cronoM", "cronoS", "cronoMs"];


function updateClock(){
    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();
    let valores = [hora, minutos, segundos]
    for(let i=0; i < ids.length; i++)
        document.getElementById(ids[i]).innerHTML = valores[i];
}


function updateCrono(){
    endC = Date.now();
    total = (endC - startC);


    cronoH = Math.trunc(total/(60*60*1000))
    total = total - cronoH*60

    
   
    cronoM = Math.trunc(total/(60*1000))
    total = total - cronoM*60

    

    cronoS = Math.trunc(total/(1000))
    total = total - cronoS*1000
 
    cronoMs = total;

    let valores = [cronoH, cronoM, cronoS, cronoMs]
    for(let i=0; i < idCrono.length; i++)
        document.getElementById(idCrono[i]).innerHTML = valores[i];
}

function relogio(){
    updateClock();
    setInterval("updateClock()", 2)
}

function iniciar(){
    startC = Date.now();
    myInterval = setInterval("updateCrono()", 1)
}


function parar(){
    clearInterval(myInterval);
}
