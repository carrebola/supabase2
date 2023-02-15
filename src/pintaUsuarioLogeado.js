import { usuarios } from "./bd/usuarios.js";

export const pintaUsuarioLogeado = async ()=> {
    
    const email = await usuarios.leerUsuarioLogeado().email || 'anónimo'
    document.querySelector('#usuarioLogeado').innerHTML = email

}

