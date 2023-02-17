import { supabase } from "./supabase.js";
export const comentarios = {
    leer : async ()=>{
        let { data: comentarios, error } = await supabase
        .from('comentarios')
        .select('*')
        console.log('comentarios con todo', comentarios);
        return comentarios
    },
    insertar : async (comentario)=>{
        const { data, error } = await supabase
        .from('comentarios')
        .insert([
          { comentario: comentario.texto, juego_id: comentario.juegoId, usuario_id: comentario.usuarioId},
        ])
        return {data, error}
      
    }, 
   
}