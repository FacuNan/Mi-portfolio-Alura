import { skillsService } from "../../service/skillService.js";

const estructuraLista = (skill, img, id) => {

    const li = document.createElement('li');
    li.classList.add('skills-li')
    const contenido =
        `<article class="skills-habilidad">
    <i class="fas fa-trash-alt trashIcon icon trashIcon btn btn-outline-danger trash"id='${id}' ></i>
    <a href='http://127.0.0.1:5500/editarSkill.html?id=${id}'><i class='fa fa-pen'></i></a>
    <h1>${skill}</h1>
</article>`

    li.innerHTML = contenido;
    const btn = li.querySelector('.trash');

    console.log(btn)
    btn.addEventListener('click', () => {
        const id = btn.id
        skillsService.eliminarSkill(id).then(respuesta =>{
            console.log(respuesta);
        }).catch(err=>alert('Ocurrio un error'));
    })
    return li

};




const ul = document.querySelector('[data-ul]');

skillsService.listaSkills().then((data) => {
    data.forEach(({ skill, img, id }) => {
        const crearLinea = estructuraLista(skill, img, id);
        ul.appendChild(crearLinea);
    })
}).catch((error) => alert('ocurrio un error'));


