/* 
document.getElementById('id') - Acceder a un elemento a través de su id
document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS
document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

/* const title = document.getElementById('title')
title.textContent = 'DOM - Accediendo a nodos' */

/* const paragraph = document.querySelector('.paragraph')
const span = document.getElementById('title').querySelector("span") */

const paragraphs = document.querySelectorAll('.paragraph')

//const paragraphsSpread = [...document.querySelectorAll('.paragraph')]

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

paragraphs[0].style.color = 'red'

//paragraphs.map(p => p.style.color = 'green')

//paragraphsSpread.map(p => p.style.color = 'green')

paragraphsArray.map(p=>p.style.color='blue')


// cuando hacemos la invocacion de una eqtiqueta seleccionada en consola con $0nodetype debemos de tener en cuenta
// que hnos arrojara ciertos numeros que significan algo estos son los tres tipos de datos numeriocs que nos encontraremos :

// 1 significa la seleccion de una etiqueta html o un tipo de nodo elemento($0nodetype)
// 3 significa el contenido que hay dentro de una etiqueta ($0nodetype)  pero en algunas ocaciones para acceder a este debemos de escribir lo siguiente
// $0.childNodes[0].nodeType  
// 8 significa un comentario ($0nodetype)

