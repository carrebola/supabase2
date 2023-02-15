import { usuarios } from "./bd/usuarios.js";

export const pintaUsuarioLogeado = async ()=> {
    
    const user = await usuarios.leerUsuarioLogeado()
    let email = 'anonimo'
    if(user) {
         email = user.email
         document.querySelector('#btn-logout').classList.remove('d-none');
     }
     else{
        document.querySelector('#btn-logout').classList.add('d-none');

     }
     
    document.querySelector('#usuarioLogeado').innerHTML = email
    

}

