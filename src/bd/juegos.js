import { supabase } from "./supabase.js";
export const juegos = {
    leer : async ()=>{
        let { data: data, error } = await supabase
        .from('juegos')
        .select('*')
        return data
    },
    insertar : async (juego)=>{
        const { data, error } = await supabase
        .from('juegos')
        .insert([
          { nombre: juego.nombre, descripcion: juego.descripcion},
        ])
      
    }
}