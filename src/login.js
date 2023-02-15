import { supabase } from "./bd/supabase";
import { usuarios } from "./bd/usuarios";
import { pintaUsuarioLogeado } from "./pintaUsuarioLogeado";

export const login = async () =>{
  const form_login = document.querySelector('#form-login');
  const usuario = {
      contraseña: form_login.password.value,
      email: form_login.email.value
  }
 
    const user = await usuarios.login(usuario)
    await pintaUsuarioLogeado()
    if(!user){
      alert('no puedo logearme')
    }
}