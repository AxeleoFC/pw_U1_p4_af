
function resultado(params) {
    document.getElementById('labelResultado').innerHTML=document.getElementById('labelResultado').innerHTML+params;
}
function transformarInt(idCampo) {
    return parseInt(document.getElementById(idCampo).value)
}
function funsion(fun) {
    resultado(fun(transformarInt('idNum1'),transformarInt('idNum2')));
}


function eliminarElemento() {
    document.getElementById('ideliminar').remove();
    console.log(document.getElementById('ideliminar'))
    console.log('ideliminar')
}
function insertarElemento() {
    document.getElementById('elemento').innerHTML='<strong>Importante</string>';
}