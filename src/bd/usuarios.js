import { supabase } from "./supabase.js";
export const usuarios = {
    //Devuelve todos los campos de la tabla usuarios
    leer : async ()=>{
        let { data: users, error } = await supabase
        .from('usuarios')
        .select('*')
        return users
    },
    //Devuelve todos los campos del usuario con id 
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
    //Registra en users el usuario con los datos del objeto **usuario**
    registrar: async (usuario)=>{ 
        
            //Registro de usuario en supabase
            let { data, error } = await supabase.auth.signUp({
                email: usuario.email,
                password: usuario.contraseña
            })
            console.log(data, error);
            return {data,error}
    },
    //Login del usuario que le pasamos {email, contraseña}	
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
    //logout del usuario logeado
    logout: async ()=>{
        try {
            let { error } = await supabase.auth.signOut()
            console.log('logout ok');
        } catch (error) {
            console.log('error al cerrar sesion en la bd', error);
        }
    },
    //recupera datos del usuario logeado
    leerUsuarioLogeado: async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser()
            console.log('user logeadao', user);
            return user
        } catch (error) {
            console.log('error al leer usuario logeado de la bd', error);
        }
    },
    //Devuelve los datos del usuario de la tabla usuarios con uuid (si el usuario está registrado) 
    leerUsuarioRegistradoId: async (uuid) => {
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
    }, 
}