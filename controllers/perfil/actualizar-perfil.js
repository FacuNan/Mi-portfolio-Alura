import { informacionPerfil } from "../../service/service-perfil.js";

const detallesInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get('id');
  const nombre = document.querySelector('[data-nombre]')
  const apellido = document.querySelector('[data-apellido]');
  const imagen = document.querySelector('[data-imagen');
  const descripcion = document.querySelector('[data-descripcion]');


  informacionPerfil.detallesPerfil(id).then((perfil) => {
    nombre.value = perfil.nombre
    apellido.value = perfil.apellido
    imagen.value = perfil.img
    descripcion.value = perfil.descripcion
  })

}

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('click', (event) => {
  event.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get('id');
  const nombre = document.querySelector('[data-nombre]').value
  const apellido = document.querySelector('[data-apellido]').value;
  const imagen = document.querySelector('[data-imagen').value;
  const descripcion = document.querySelector('[data-descripcion]').value;

  informacionPerfil.actualizarPerfil(id, nombre, apellido, imagen, descripcion).then(()=>{
    window.location.href = "http://127.0.0.1:5500/index.html"
  })
})


console.log(detallesInformacion());

