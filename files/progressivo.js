let startC = 0;
let endC = 0;
let total = 0;
let cronoH = 0;
let cronoM = 0;
let cronoS = 0;
let cronoMs = 0; 

let rodando = false;
const idCrono = ["cronoH", "cronoM", "cronoS", "cronoMs"];

function updateCrono(){ //MUDAR LOGICA PARA INCREMENTAR TA DANDO 65 SEGUNDOS
    endC = Date.now();
    total = (endC - startC);


    cronoH = Math.trunc(total/(60*60*1000))
    total = total - cronoH*60

    
   
    cronoM = Math.trunc(total/(60*1000))
    total = total - cronoM*60

    

    cronoS = Math.trunc(total/(1000))
    total = total - cronoS*1000
 
    cronoMs = total;

    let valoresP = [cronoH, cronoM, cronoS, cronoMs]

    for(let i=0; i < idCrono.length; i++)
        document.getElementById(idCrono[i]).innerHTML = valoresP[i];
}

function iniciar(){
    if(!rodando){
        startC = Date.now();
        myInterval = setInterval("updateCrono()", 1)
    }
    rodando =  true;
}


function parar(){
    clearInterval(myInterval);
    rodando = false;
}


function reiniciar(){
    if(!rodando){
        valoresP = [0, 0, 0, 0]
        for(let i=0; i < idCrono.length; i++)
            document.getElementById(idCrono[i]).innerHTML = 0;
    }
}
