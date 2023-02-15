import { supabase } from "./bd/supabase";
import { usuarios } from "./bd/usuarios";
import { pintaUsuarioLogeado } from "./pintaUsuarioLogeado";

export const logout = async () =>{
  
    await usuarios.logout()
    await pintaUsuarioLogeado()
}