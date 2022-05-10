
//BOTON DE UNION
function uniao() {

    // Mensaje de informacion
    
    //Obtener elementos de conjuntos
    let ent = document.getElementById('entrada')
    let ent1 = document.getElementById('entrada1')
    let respuni = document.getElementById('resp')


    //Almacenamiento de los valores de entrada
    let str = [];                           //Varible que guarda los valores como vector
    let str1 = [];                          //Variable que guarda los valores como string
    str1 = ent.value + ',' + ent1.value;    //Uniendo las entradas como una cadena
    str = str1.split(",");                  //Almacenar las entradas unidas como un vector

    //Eliminación de números repetidos cuando la unión ya se ha realizado
    for (c = 0; c < str.length; c++) {
        for (i = c + 1; i < str.length; i++) {
            if (str[c] == str[i])
                str.splice(i, 1);
        }
    }

    //Impresión de resultados de la unión
    respuni.innerHTML = `A U B = {${str}}`;
}



//BOTON DE INTERSECCION
function inter() {

    //Obtener elementos de conjuntos
    let ent = document.getElementById('entrada')
    let ent1 = document.getElementById('entrada1')
    let respinter = document.getElementById('resp')

    //Variables utilizadas para almacenar datos y tratarlos
    let Cint = [];
    let str = [];
    let str1 = [];
    str = ent.value.split(",");
    str1 = ent1.value.split(",");

    //Comparación de elementos de cadena y almacenamiento de los mismos si está en ambos conjuntos
    for (c = 0; c < str.length; c++) {
        for (i = 0; i < str1.length; i++) {
            if (str[c] === str1[i]) {
                Cint.push(str[c]);
            }
        }
    }
    //Eliminación de números repetidos cuando la unión ya se ha realizado
    for (c = 0; c < Cint.length; c++) {
        for (i = c + 1; i < Cint.length; i++) {
            if (Cint[c] == Cint[i])
                Cint.splice(i, 1);
        }
    }
    //Impresión de resultados de intersección
    respinter.innerHTML = `A ∩ B = {${Cint}}`;
}


//BOTON DE DIFERENCIA
function difer() {
    //Obtener elementos de conjuntos
    let ent = document.getElementById('entrada')
    let ent1 = document.getElementById('entrada1')
    let respdifer = document.getElementById('resp')


    //Variables utilizadas para almacenar datos y procesarlos.
    let Cdife = [];
    let str = [];
    let str1 = [];
    str = ent.value.split(",");
    str1 = ent1.value.split(",");

    //Almacenamiento de elementos
    control = false;
    for (c = 0; c < str.length; c++) {
        for (i = 0; i < str1.length; i++) {
            if (str[c] == str1[i]) {			//Comparación de elementos en la posición C
                control = false;				//Si hay un elemento igual en str1, se establece en falso
                i = str.length;
            } else {
                control = true;					//Si el elemento está solo en el primer conjunto, se establece en verdadero
            }
        }
        if (control == true) {
            Cdife.push(str[c]);					//Elevar el elemento al conjunto de respuestas si la variable es verdadera
        }
    }
    //Eliminación de números repetidos cuando la unión ya se ha realizado
    for (c = 0; c < Cdife.length; c++) {
        for (i = c + 1; i < Cdife.length; i++) {
            if (Cdife[c] == Cdife[i])
                Cdife.splice(i, 1);
        }
    }
    respdifer.innerHTML = `A - B = {${Cdife}}`;
}


//BOTON DE COMPLEMENTO
function complemento() {
    //Recebendo elementos dos conjuntos
    let ent = document.getElementById('entrada')
    let ent1 = document.getElementById('entrada1')
    let respdifer = document.getElementById('resp')


    //Variables utilizadas para almacenar datos y procesarlos.
    let Cdife = [];
    let str = [];
    let str1 = [];
    str = ent.value.split(",");
    str1 = ent1.value.split(",");

    //Almacenamiento de elementos
    control = false;
    for (c = 0; c < str.length; c++) {
        for (i = 0; i < str1.length; i++) {
            if (str[c] == str1[i]) {			//Comparación de elementos en la posición C
                control = false;				//Si hay un elemento igual en str1, se establece en falso
                i = str.length;
            } else {
                control = true;					//Si el elemento está solo en el primer conjunto, se establece en verdadero
            }
        }
        if (control == true) {
            Cdife.push(str[c]);					//Elevar el elemento al conjunto de respuestas si la variable es verdadera
        }
    }
    //Eliminación de números repetidos cuando la unión ya se ha realizado
    for (c = 0; c < Cdife.length; c++) {
        for (i = c + 1; i < Cdife.length; i++) {
            if (Cdife[c] == Cdife[i])
                Cdife.splice(i, 1);
        }
    }
    respdifer.innerHTML = `A' = {${Cdife}}`;
}
