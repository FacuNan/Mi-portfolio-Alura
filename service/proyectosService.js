const listaProyectos = () => {
    return fetch('http://localhost:3000/proyectos').then((respuesta) => respuesta.json())
}

const crearProyectos = (titulo, descripcion, url, img) => {
    return fetch('http://localhost:3000/proyectos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({titulo, descripcion, url, img, id: uuid.v4()})
    })
}

const eliminarProyecto = (id)=>{
    return fetch(`http://localhost:3000/proyectos/${id}`,{
        method:'DELETE'
    })
}

const obtenerProyecto = (id)=>{
    return fetch(`http://localhost:3000/proyectos/${id}`).then((respuesta)=> respuesta.json())
}

const actualizarInformacion = (titulo, descripcion, url, img, id)=>{
    return fetch(`http://localhost:3000/proyectos/${id}`, {
        method:'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({titulo, descripcion, url, img, id})
    })
}


export const serviceInformacion = {
    listaProyectos,
    crearProyectos, 
    eliminarProyecto,
    obtenerProyecto,
    actualizarInformacion
}