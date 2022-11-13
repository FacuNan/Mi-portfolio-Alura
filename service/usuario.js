const verificarUsuario=()=>{
return fetch ('http://localhost:3000/usuario').then((respuesta)=>respuesta.json())
}

const usuarioRegistrado=(id, email, username, password, confirmarPassword, registro)=>{
    return fetch(`http://localhost:3000/usuario/${id}`, {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({id, email, username, password, confirmarPassword, registro})
    }).then((respuesta)=> console.log(respuesta))
}

export const serviceUsuario ={
    verificarUsuario,
    usuarioRegistrado
}
