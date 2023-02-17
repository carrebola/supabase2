import { supabase } from "./supabase.js";
export const juegos = {
    leer : async ()=>{
        let { data: data, error } = await supabase
        .from('juegos')
        .select('*')
        return data
    },
    insertar : async (juego)=>{
        try {
            const { data, error } = await supabase
            .from('juegos')
            .insert([
                { nombre: juego.nombre, descripcion: juego.descripcion},
            ])
            return {data, error}
        } catch (error) {
            return {data, error}
        }
      
    }
}