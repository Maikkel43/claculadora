var array = [];
function calcular() {
    //aqui se evaluan los numeros ingresados sin antes pasarlos a enteros con parseint
    const numero1 = parseInt(document.getElementById("d1").value);
    const numero2 = parseInt(document.getElementById("d2").value);
    //verifica que las etradas sean numeros
    if(isNaN(numero1) || isNaN(numero2)){
        document.getElementById("resultado").textContent = "operacion invalida";
        return;
    }
    let resultado = 0;

    //se evalua con una condicional cuando se selecciona la opcion suma, checked nos ayuda a saber si esta seleccionada o no
    if(document.getElementById("suma").checked) resultado = numero1 + numero2;
    if(document.getElementById("resta").checked) resultado = numero1 - numero2;
    if(document.getElementById("multi").checked) resultado = numero1 * numero2;
    if(document.getElementById("div").checked)  resultado = numero1 / numero2;

    //se almacena el resultado en una variable y se muestra en las casilla de resultados
    document.getElementById("resultado").textContent = resultado;

    //se limpian las casillas de entrada de valores 
    limpiarCasillas();
    
//cada valor obtenido por cada operacion sera almacenado en el array
    array.push(resultado);
    
};

//funcion para limpiar las casillas de los valores 
function limpiarCasillas(){
    document.getElementById("d1").value = "";
    document.getElementById("d2").value = "";
};


function verResultados(){
    //el ciclo va a recorrer el array para imprimir luego los elemntos dentro de el
    /*for(i = 0; i < array.length; i++){
        //se la a imprimir en un espacio de la tabla que ya habia designado para eso
        document.getElementById("muestras").innerHTML = array;
    }*/

    //en lugar del ciclo vamos a unir el rreglo separando cada elemento por una coma para poder mostrarlo y el codigo sea mas optimixado
    document.getElementById("muestras").textContent = array.join(', ');
};
function reiniciar(){
    //restablece los selectores de operacion osea los radios
    document.getElementById("suma").checked = false;//al ver que esta seleccionada la opcion con el cheked se deselecciona con false
    document.getElementById("resta").checked = false;
    document.getElementById("multi").checked = false;
    document.getElementById("div").checked = false;

    //se restablecen los campos de entrada
    document.getElementById("d1").value = "";
    document.getElementById("d2").value = "";

    //restablecemos el array
    array = [];

    //se restablece los resultados, osea el campo donde se muestran los resultados
    document.getElementById("muestras").textContent = "";

    //se restablece el resultado
    document.getElementById("resultado").textContent = "";
}