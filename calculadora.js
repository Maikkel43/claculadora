var array = [];
function calcular() {
    //aqui se evaluan los numeros ingresados sin antes pasarlos a enteros con parseint
    const numero1 = parseInt(document.getElementById("d1").value);
    const numero2 = parseInt(document.getElementById("d2").value);
    let resultado = 0;

    //se evalua con una condicional cuando se selecciona la opcion suma, checked nos ayuda a saber si esta seleccionada o no
    if(document.getElementById("suma").checked){
        resultado = document.getElementById("resultado").innerHTML = numero1 + numero2;
    }
    if(document.getElementById("resta").checked){
        resultado = document.getElementById("resultado").innerHTML = numero1 - numero2;
    }
    if(document.getElementById("multi").checked){
        resultado = document.getElementById("resultado").innerHTML = numero1 * numero2;
    }
    if(document.getElementById("div").checked){
        resultado = document.getElementById("resultado").innerHTML = numero1 / numero2;
    }
//cada valor obtenido por cada operacion sera almacenado en el array
    array.push(resultado);
};

function verResultados(){
    //el ciclo va a recorrer el array para imprimir luego los elemntos dentro de el
    for(i = 0; i < array.length; i++){
        //se la a imprimir en un espacio de la tabla que ya habia designado para eso
        document.getElementById("muestras").innerHTML = array;
    }
};
function reiniciar(){
    //restablece los selectores de operacion osea los radios
    document.getElementById("suma").checked = false;//al ver que esta seleccionada la opcion con el cheked se deselecciona con false
    document.getElementById("resta").ckecked = false;
    document.getElementById("multi").checked = false;
    document.getElementById("div").checked = false;

    //se restablecen los campos de entrada
    document.getElementById("d1").value = "";
    document.getElementById("d2").value = "";

    //restablecemos el array
    array = [];

    //se restablece los resultados, osea el campo donde se muestran los resultados
    document.getElementById("muestras").innerHTML = "";

    //se restablece el resultado
    document.getElementById("resultado").innerHTML = "";
}