import { informacionPerfil } from "../../service/service-perfil.js";



const infoHTML = (id, nombre, apellido, descripcion) => {

    const li = document.querySelector('[data-li]');
    const btn = ` <li ><a href="http://127.0.0.1:5500/Perfil(Html)/editarPerfil.html?id=${id}"><i class='fa fa-pen'></i></a></li>`


    li.innerHTML = btn;



    const contenido = `<h1>Mi nombre es ${nombre} ${apellido}</h1>
<p>${descripcion}</p>`
    const biografia = document.querySelector('[data-biografia]');

    biografia.innerHTML = contenido

    return biografia
}

const fotoPerfil = (id, img) => {
    const dataPerfil = document.querySelector('[data-foto-perfil]')
    const imagen = `<img class="informacion-fotoPerfil_img"
    src="${img}">`
    dataPerfil.innerHTML = imagen
    return dataPerfil
}

informacionPerfil.infoPerfil().then((data) => {
    data.forEach(({ id, img }) => {
        fotoPerfil(id, img)
    })
})

informacionPerfil.infoPerfil().then((data) => {
    data.forEach(({ id, nombre, apellido, descripcion }) => {
        infoHTML(id, nombre, apellido, descripcion);
    })
})