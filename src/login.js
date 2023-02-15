import { supabase } from "./bd/supabase";
import { usuarios } from "./bd/usuarios";

export const login = async () =>{
  const form_login = document.querySelector('#form-login');
  const usuario = {
      contraseña: form_login.password.value,
      email: form_login.email.value
  }
 
    const user = await usuarios.logear(usuario)
    console.log('El email del user logeado es: ', user)
}