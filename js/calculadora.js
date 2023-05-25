function resultado(params) {
    document.getElementById('labelResultado').innerHTML=document.getElementById('labelResultado').innerHTML+params;
}
function transformarInt(idCampo) {
    return parseInt(document.getElementById(idCampo).value)
}

function sumar(num1, num2) {
    return num1+num2;
}
function sumarNumeros() {
    var num1=transformarInt('idNum1');
    var num2=transformarInt('idNum2');
    resultado(sumar(num1,num2));
}
function restar(num1, num2) {
    return num1-num2;
}
function restarNumeros() {
    var num1=transformarInt('idNum1');
    var num2=transformarInt('idNum2');
    resultado(restar(num1,num2));
}
function multiplicar(num1, num2) {
    return num1*num2;
}
function multiplicarNumeros() {
    var num1=transformarInt('idNum1');
    var num2=transformarInt('idNum2');
    resultado(multiplicar(num1,num2));
}
function dividir(num1, num2) {
    return num1/num2;
}
function dividirNumeros() {
    var num1=transformarInt('idNum1');
    var num2=transformarInt('idNum2');
    resultado(dividir(num1,num2));
}

function eliminarElemento() {
    document.getElementById('ideliminar').remove;
}
function insertarElemento() {
    document.getElementById('elemento').innerHTML='<strong>Importante</string>';
}