import { supabase } from "./supabase.js";
export const usuarios = {
    leer : async ()=>{
        let { data: users, error } = await supabase
        .from('users')
        .select('*')
        console.log(users, error);
        return users
    },
    insertar : async (usuario)=>{
        const { data, error } = await supabase
        .from('users')
        .insert([
          { nombre: usuario.nombre, contraseña: usuario.contraseña, email: usuario.email },
        ])
      
    }
}