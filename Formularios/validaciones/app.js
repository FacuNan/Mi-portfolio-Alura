import { valida } from "./validacionContacto.js";


const inputs = document.querySelectorAll("input");
inputs.forEach(input => {

   input.addEventListener('blur', (input) => {
      valida(input.target)

   })
});




const mensajes = document.querySelector('textarea');

mensajes.addEventListener('blur', (input) => {
   valida(input.target)
})

