const listaProyectos = ()=>{
    return fetch('http://localhost:3000/proyectos').then((respuesta)=> respuesta.json())
}


export const serviceInformacion ={
    listaProyectos
}