let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let colores = ["Rojo", "Azul", "Verde", "Amarillo"];
numbers.forEach(function(color) {
    if (color % 3 === 0) {
        console.log(color);
    }
});

//elementos invertidos con reverse

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = list.reverse();
console.log(result);

//array invertido con ciclo for

function reversar(lista) {
    for (let i = lista.lenght - 1; i >= 0; i--) {
        console.log(lista[i])
    }
}

//sumar un array
//Inicializamos una variable sum como 0 para almacenar el resultado y usamos el ciclo for para visitar cada elemento y agregarlos a la suma del array.

const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);