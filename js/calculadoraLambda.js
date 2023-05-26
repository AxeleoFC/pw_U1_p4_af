const resultado=(params) =>document.getElementById('labelResultado').innerHTML=params;
const transformarInt=(idCampo) => parseInt(document.getElementById(idCampo).value);
const funsion=(fun) =>resultado(fun(transformarInt('idNum1'),transformarInt('idNum2')));
const insertarElemento=()=>document.getElementById('elemento').innerHTML='<strong>Importante</string>';

function eliminarElemento() {
    document.getElementById('ideliminar').remove();
    //metodo para proyectar en consola
    console.log(document.getElementById('ideliminar'));
    console.log('ideliminar');
}

const conceptosJS=()=>{
    ///Tipos de variables y como declararlas////
    //var->ya no es comunmente utilizado
    var variable1='Axel';
    var variable2=1;
    //let->más utilizado
    let variable3='Leo';
    let variable4=12;
    //const->para constantes
    const variable5='Flores';
    const variable6=28;
    console.log(variable1+' '+variable3+' '+variable5);

    //Declaracion de arreglos
    const diasSemanas=['Lunes','Martes','Miercoles'];
    console.log(diasSemanas);
    console.log(diasSemanas[0]);
    diasSemanas.push('Jueves');
    diasSemanas.push('Viernes');
    console.log(diasSemanas);

    const diasFinSemana=['Sabado','Domingo'];
    console.log(diasSemanas.concat(diasFinSemana));
    diasCompletos=diasSemanas.concat(diasFinSemana);
    console.log(diasCompletos);

    for (const dia of diasCompletos) {
        console.log(dia);
    }

    ////Declaracion de objetos////
    //Para declarar valores en JS se utiliza Json
    const persona={
        nombre:"Axel",
        apellido:"Flores",
        edad: 23,
        ciudad: "Quito"
    }
    const persona2={
        nombre:"Leo",
        apellido:"Campaña",
        edad: 22,
        ciudad: "Quito",
        vehiculo: {
            marca:"Toyota",
            modelo:"Prius",
            anio:1989
        }
    }
    console.log(persona);
    console.log(persona2);

    ////Desestructuracion de arreglos////
    //es la descomposicion/descomponer en partes de un elemnto JS
    const dias2=['Lunes','Martes','Miercoles','Jueves','viernes'];
    const [dia1, dia2,dia3,dia4]=dias2;
    console.log(dia2);

    const [d1, d2,d3,d4,d5]=['Lunes','Martes','Miercoles','Jueves','viernes'];
    console.log(d5);

    ////Desestructuracion de objetos////
    const persona3={
        nombre:"Axel",
        apellido:"Flores",
        edad: 22,
        ciudad: "Quito"
    }
    const {nombre,ciudad}=persona3;
    console.log(nombre);
    console.log(ciudad);

    const persona4={
        nombre:"Leo",
        apellido:"Campaña",
        edad: 22,
        ciudad: "Quito",
        vehiculo: {
            marca:"Toyota",
            modelo:"Prius",
            anio:1989
        }
    }
    const {vehiculo}=persona4;
    console.log(vehiculo);
    const {marca,modelo}=vehiculo;
    console.log(marca);
}