let start = 0;
let end = 0;
let total
//let crono = new Date();

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


function updateCrono(hora, minutos, segundos, milisegundos){
    let valores = [hora, minutos, segundos, milisegundos] //CONTINUAR DAQUI
    end = Date.now();
    total = (end - start);
    console.log(total);
    let cronoMs = 0;
    let cronoS = 0;
    let cronoM = 0;
    let cronoH = 0;
    if(total > (60*60*1000)){
        cronoH = (total/(60*60*1000))
        console.log(cronoH) 
    }
    if(total > (60*1000)){
        cronoM = (total/(60*1000))
        console.log(cronoM) 
    }
    if(total > (1000)){
        cronoS = (total/(1000))
        console.log(cronoS) 
    }
    
    for(let i=0; i < idCrono.length-1; i++)
        document.getElementById(idCrono[i]).innerHTML = valores[i];
}

function relogio(){
    updateClock();
    setInterval("updateClock()", 2)
}

function iniciar(){
    start = Date.now();
    setInterval("updateCrono()", 1)
}


function parar(){
    console.log("entrou PARAR")
    end = Date.now();
    total = (end - start);
    console.log(total);
    let cronoMs = 0;
    let cronoS = 0;
    let cronoM = 0;
    let cronoH = 0;
    if(total > (60*60*1000)){
        cronoH = (total/(60*60*1000))
        console.log(cronoH) 
    }
    if(total > (60*1000)){
        cronoM = (total/(60*1000))
        console.log(cronoM) 
    }
    if(total > (1000)){
        cronoS = (total/(1000))
        console.log(cronoS) 
    }
    
    cronoMs = total




    //ocument.getElementById("display").innerHTML = total.getMilliseconds().toString()
}
