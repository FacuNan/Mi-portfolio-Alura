const button= document.querySelector('.button')

button.addEventListener('click', ()=>{
    const input = document.querySelector('.informacion').value;
    const lista = JSON.parse(localStorage.getItem('informacion')) || [];
    const objeto = {
        input
    }
     lista.push(objeto);
    localStorage.setItem('informacion', JSON.stringify(lista));


});


const info= JSON.parse(localStorage.getItem('informacion'))||[];

console.log(info);

info.forEach((nombre)=>{
console.log(nombre) 
const informacion= document.querySelector('.parrafo');

})


