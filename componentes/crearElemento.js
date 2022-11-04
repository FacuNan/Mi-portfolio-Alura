import deleteIcon from "./delete.js";


const crearSeccion = ('click', () => {
    const dataInput = document.querySelector('[data-input]');
    const item = document.createElement('li');
    item.classList.add('skills-li')
    const contenido = `<article class="skills-habilidad">
    <h1>${dataInput.value}</h1>
</article>`;

    const ul = document.querySelector('.skills-ul')
    item.innerHTML = contenido

    ul.appendChild(item);
    item.appendChild(deleteIcon())


})

export default crearSeccion