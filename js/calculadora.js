let numero=0;
let total=""
let primero=false

const ingresar=(idnumero, params) =>document.getElementById(idnumero).innerHTML=document.getElementById(idnumero).innerHTML+params;
const transformarFloat=(idCampo) => parseFloat(document.getElementById(idCampo).innerHTML);
const funsion=(fun) =>ingresar(fun(numero,transformarFloat('numeroid')));
const borrar=(idnumero) =>document.getElementById(idnumero).innerHTML="";

function res() {
    calculo(total);
    document.getElementById('numeroid').innerHTML="= "+numero;
}

function calculo(val) {
    if(!primero){
        numero=transformarFloat('numeroid');
        total=val
        primero=true
        borrar('resultadoid')
        ingresar('resultadoid', numero+total);
    }else{
        borrar('resultadoid')
        ingresar('resultadoid', numero+total+transformarFloat('numeroid'));
        if(total=="+"){
            numero+=transformarFloat('numeroid');
            console.log(numero);
            total=val
        }else if(total=="-"){
            numero-=transformarFloat('numeroid');
            total=val;
        }else if(total=="x"){
            numero*=transformarFloat('numeroid');
            total=val
        }else if(total=="/"){
            numero=numero/transformarFloat('numeroid');
            total=val;
        }
    }
    borrar('numeroid');
}