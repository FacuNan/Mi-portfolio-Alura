const verificarUsuario=()=>{
return fetch ('https://json-server-96pg.onrender.com/usuario').then((respuesta)=>respuesta.json())
}

const usuarioRegistrado=(id, email, username, password, confirmarPassword, registro)=>{
    return fetch(`https://json-server-96pg.onrender.com/usuario/${id}`, {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({id, email, username, password, confirmarPassword, registro})
    }).then((respuesta)=> console.log(respuesta))
}

export const serviceUsuario ={
    verificarUsuario,
    usuarioRegistrado
}
