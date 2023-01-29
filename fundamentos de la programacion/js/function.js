/** 
console.log("Hola Mundo")

let numero1 = 3;
let numero2 = 4;

let resultado = numero1+numero2

console.log("El resultado de la suma es: " + resultado)



document.getElementById('boton').onclick = function () {
    console.log('Capturamos el evento click')
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
    
}


document.addEventListener('click', function () {
    console.log("Hola Mundo desde EVENTLINSTENER");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"

})
*/

document.getElementById('boton').addEventListener('click', function () {
    console.log("Hola Mundo desde EVENTLINSTENER");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
})

document.getElementById('boton_color').addEventListener('click', function () {
    document.body.style.backgroundColor = '#FF0002';
    
})


document.getElementById('boton_default').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blueviolet';
    
})

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "yellow";
}