

const infoPerfil = () => {
    return fetch('https://json-server-96pg.onrender.com/perfil').then((respuesta) => respuesta.json());
}

const detallesPerfil = (id) => {
    return fetch(`https://json-server-96pg.onrender.com/perfil/${id}`).then((respuesta) => respuesta.json());
}

const actualizarPerfil = (id, nombre, apellido, img, descripcion) => {
    return fetch(`https://json-server-96pg.onrender.com/perfil/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, nombre, apellido, img, descripcion })
    }).then((respuesta)=> console.log(respuesta))
}


export const informacionPerfil = {
    infoPerfil,
    detallesPerfil,
    actualizarPerfil
}