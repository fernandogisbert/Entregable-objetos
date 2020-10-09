"use strict";

// creo una clase Libro con las propiedades título, autor, año, género.

class Book {

    constructor(_tittle, _autor, _year, _gender){
        this.tittle = _tittle,
        this.autor = _autor,
        this.year = _year,
        this.gender = _gender
    }
}

    // creo un método que devuelva la información del libro

Book.prototype.newMethod = function () {

    return this.tittle + ' ' + this.autor + ' ' + this.year + ' ' + this.gender;

};
 

// Hago una instacia para cada libro y los guardo en una array 

let libro1 = new Book(prompt('Libro1 : Introduce título'), prompt('Libro1 : Introduce autor'), prompt('Libro1 : Año de publicación'), prompt('Libro1 : Clasifica el libro en "aventuras, terror o fantasía"'));
let libro2 = new Book(prompt('Libro2 : Introduce título'), prompt('Libro2 : Introduce autor'), prompt('Libro2 : Año de publicación'), prompt('Libro2 : Clasifica el libro en "aventuras, terror o fantasía"'));
let libro3 = new Book(prompt('Libro3 : Introduce título'), prompt('Libro3 : Introduce autor'), prompt('Libro3 : Año de publicación'), prompt('Libro3 : Clasifica el libro en "aventuras, terror o fantasía"'));


var library = [ libro1, libro2, libro3 ];


// VALIDACIONES //

// no puede haber campos vacíos

function alertAll () {
    alert('Debes rellenar todos los campos');
}


if((libro1.tittle && libro1.autor && libro1.year && libro1.gender) == ""){
    alertAll();
}else if((libro2.tittle && libro2.autor && libro2.year && libro2.gender) == ""){
    alertAll();
}else if((libro3.tittle && libro3.autor && libro3.year && libro3.gender) == ""){
    alertAll();
};



// El año debe tener 4 cifras

function alertYear1 () {
    alert('el año de publicación de cada libro debe tener 4 cifras');
}

function anoCuatroLetras() {

    library.forEach(element => {

        if(element.year.length > 4){
            alertYear1();
        }else if(element.year.length < 4){
            alertYear1();
        }
    });
};

anoCuatroLetras();

// El género debe ser aventuras, terror o fantasía

function generosValidate () {

    library.forEach(element => {

        if(element.gender == "aventuras" || element.gender == "terror" || element.gender == "fantasía") {
            console.log("El género es correcto")
        }else{
            alert("El género deber ser aventuras , terror o fantasía")
        };
    });
};

generosValidate();




///////////////////////////////////////// FUNCIONES ////////////////////////////////////////////////////////////

// mostrar librería completa

function showLibrary() {

    var completeCollection = [];

    library.forEach(element => {
        completeCollection.push(element.newMethod());
    });
    console.log(completeCollection);
}


// Ordenar autores alfabéticamente


function order() {
    // creo un array vacio
    var newLibrary = [];
    library.forEach(element => {
        // le añado cada autor al array vacio
        newLibrary.push(element.autor); 
    });
    // ordeno el array vacío
    console.log(newLibrary.sort());
};



// Sacar en comun libros con el mismo género 

function genero(parametroGenero){
    //  recorro cada elemento del array librería
    library.forEach(libro => {
        // console.log(libro.gender);
        // si el parámetro de la funcion es igual al género 
        if(parametroGenero == libro.gender){
        // me imprimes la array con los libros del mimo género
            console.log(libro);
        } 
    });
};


