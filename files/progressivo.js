let startC = 0;
let inicio = 0;
let endC = 0;
let total = 0;
let cronoH = 0;
let cronoM = 0;
let cronoS = 0;
let cronoMs = 0;
let resto = 0;

let rodando = false;
const idCrono = ["cronoH", "cronoM", "cronoS", "cronoMs"];

function updateCrono(){
    endC = Date.now();
    cronoMs = endC - startC + resto;
    resto = 0;
    calcula();
}

function calcula(){
    if(cronoMs > 999){
        cronoMs -= 1000;
        cronoS ++;
        startC = endC;
        if(cronoS > 59){
            cronoS = 0;
            cronoM ++;
            if(cronoM > 59){
                cronoM = 0;
                cronoH ++;
            }
        }
    }
    let valoresP = [cronoH, cronoM, cronoS, cronoMs]
    for(let i=0; i < idCrono.length; i++)
        document.getElementById(idCrono[i]).innerHTML = valoresP[i];
}



function iniciar(){
    if(!rodando){
        startC = Date.now();
        inicio = startC;
        myInterval = setInterval("updateCrono()", 1)
    }
    rodando =  true;
}


function parar(){
    resto = cronoMs;
    clearInterval(myInterval);
    // if(rodando)
    //     corrige();
    rodando = false;
    
}


function reiniciar(){
    if(!rodando){
        valoresP = [0, 0, 0, 0]
        for(let i=0; i < idCrono.length; i++)
            document.getElementById(idCrono[i]).innerHTML = 0;
    }
    startC = 0;
    endC = 0;
    total = 0;
    cronoH = 0;
    cronoM = 0;
    cronoS = 0;
    cronoMs = 0;
    resto = 0;
}

// function corrige(){
//     total = Date.now() - inicio;
//     cronoH = Math.trunc(total/(60*60*1000))
//     total = total - cronoH*(60*60*1000)
//     cronoM = Math.trunc(total/(60*1000))
//     total = total - cronoM*(60*1000)
//     cronoS = Math.trunc(total/(1000))
//     total = total - cronoS*(1000)
//     cronoMs = total;
//     let valoresP = [cronoH, cronoM, cronoS, cronoMs]
//     for(let i=0; i < idCrono.length; i++)
//         document.getElementById(idCrono[i]).innerHTML = valoresP[i];
// }