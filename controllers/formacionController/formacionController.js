import { informacionProyectos } from "../../service/formacionService.js"

const crearFormacion = (id, img, formacion)=>{

    const formaciones = document.createElement('li');
    
    formaciones.classList.add('formacion__lista__cursos');
    const contenido = `
    <div class="formacion__lista__cursos__item">
    <i class="fas fa-trash-alt trashIcon icon trashIcon btn btn-outline-danger trash"id='${id}' ></i>
    <a href='http://127.0.0.1:5500/Formularios/Edicion/editarFormacion.html?id=${id}'><i class='fa fa-pen'></i></a>
        <img src="${img}" alt=""
            width="100px ">
        <h1>${formacion}</h1>
    </div>
    `
formaciones.innerHTML=contenido

const btn = formaciones.querySelector(".trash")

btn.addEventListener('click', ()=>{
    const id = btn.id
    informacionProyectos.eliminarFormacion(id).then(()=>{
        window.location.href = 'http://127.0.0.1:5500/index.html'
    })
})
return(formaciones)
}
const listaProyectos = document.querySelector('[data-lista]');
informacionProyectos.listaFormacion().then((data)=>{
    data.forEach(({id, img, formacion})=>{
        const agregar= crearFormacion(id, img, formacion);
        listaProyectos.appendChild(agregar)
        
    })
})




