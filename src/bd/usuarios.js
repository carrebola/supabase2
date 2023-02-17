import { supabase } from "./supabase.js";
export const usuarios = {
    leer : async ()=>{
        let { data: users, error } = await supabase
        .from('usuarios')
        .select('*')
        return users
    },
    leerId : async (id)=>{
        let { data: users, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('id', id)
        return users
    },    insertar : async (usuario)=>{
        try {
            const { data, error } = await supabase
            .from('usuarios')
            .insert([
            { usuario_id: usuario.id, nombre: usuario.nombre, contraseña: usuario.contraseña, email: usuario.email },
            ])
            console.log('usuario insertado correctamente');
        } catch (error) {
            console.log('error al insertar usuario', error);
        }
    },
    registrar: async (usuario)=>{ 
        try {
            //Registro de usuario en supabase
            let { data, error } = await supabase.auth.signUp({
                email: usuario.email,
                password: usuario.contraseña
            })
            console.log('registrado el usuario en supabase: ', data);
            return data.user
        } catch (error) {
            console.log('error de registro: ',error);
        }
    },
    login: async (usuario)=>{
        try {
            let { data, error } = await supabase.auth.signInWithPassword({
                email: usuario.email,
                password: usuario.contraseña
            })
            console.log('login ok: ',data.user);
            return data.user.email
        } catch (error) {
            console.log('error al logear en la bd', error);
        }
    },
    logout: async ()=>{
        try {
            let { error } = await supabase.auth.signOut()
            console.log('logout ok');
        } catch (error) {
            console.log('error al cerrar sesion en la bd', error);
        }
    },
    leerUsuarioLogeado: async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser()
            console.log('user logeadao', user);
            return user
        } catch (error) {
            console.log('error al leer usuario logeado de la bd', error);
        }
    },
    leerUsuarioLogeadoId: async (uuid) => {
        try {
            let { data: data, error } = await supabase
            .from('usuarios')
            .select('id')
            .match({usuario_id: uuid})
            console.log(data);
            return data[0].id
           
        } catch (error) {
            console.log('error al leer usuario logeado de la bd', error);
        }
    }
    
}