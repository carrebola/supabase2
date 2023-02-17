import { comentarios } from "./bd/comentarios";
import { usuarios } from "./bd/usuarios";

export const insertaComentario = async () =>{
    const formComentarios = document.querySelector('#form-comentarios');
    const usuarioLogeado = await usuarios.leerUsuarioLogeado()
    let uuid = null
    if(usuarioLogeado){
        uuid = usuarioLogeado.id
    }else{
        const uuid = null
    } 
    console.log('usuarioLogeado', uuid);

    const userId =  await usuarios.leerUsuarioLogeadoId(uuid)
    const comentario = {
        usuarioId: userId,
        juegoId: formComentarios.juego.value,
        texto: formComentarios.texto.value,
    }
    console.log('comentario', comentario);
    const res = await comentarios.insertar(comentario)
    
    if(res.error){
        alert('No se ha podio insertar el comentario. No tienes permisos'+ res.error.message)
    }
    else{
        console.log('comentario insertado')
    }
    
    
    
}