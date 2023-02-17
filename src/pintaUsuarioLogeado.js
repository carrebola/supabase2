import { usuarios } from "./bd/usuarios.js";

export const pintaUsuarioLogeado = async ()=> {
    
    const user = await usuarios.leerUsuarioLogeado()
    let email = 'anonimo'
    if(user) {
         email = user.email
         document.querySelector('#btn-logout').classList.remove('d-none');
        
         document.querySelector('#home').classList.add('d-none');
         document.querySelector('#admin').classList.remove('d-none');


     }
     else{
        document.querySelector('#btn-logout').classList.add('d-none');
        document.querySelector('#col-login').classList.remove('d-none');
        document.querySelector('#home').classList.remove('d-none');
        document.querySelector('#admin').classList.add('d-none');


     }
     
    document.querySelector('#usuarioLogeado').innerHTML = email
    

}

