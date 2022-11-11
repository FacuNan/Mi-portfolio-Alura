import { skillsService } from "../../service/skillService.js";


const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const skill = document.querySelector('[data-skill]');
    const img = document.querySelector('[data-img]');


    skillsService.detallesClientes(id).then((perfil) => {
        skill.value = perfil.skill;
        img.value = perfil.img
        console.log(url)

    })
}

obtenerInformacion();
const formulario = document.querySelector('[data-form]');

formulario.addEventListener('click', (evento)=>{
evento.preventDefault();
const url = new URL(window.location);
const id = url.searchParams.get('id');
const skill = document.querySelector('[data-skill]').value;
const img = document.querySelector('[data-img]').value;

skillsService.actualizarSkill(skill, img, id).then(()=>{
    window.location.href = './index.html'
});

})