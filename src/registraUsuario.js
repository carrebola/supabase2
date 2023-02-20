import { supabase } from "./bd/supabase";
import { usuarios } from "./bd/usuarios";
import { pintaTablaUsuarios } from "./pintaTablaUsuarios";

export const registraUsuario = async () =>{
  const form_registro = document.querySelector('#form-registro');
  const usuario = {
      nombre: form_registro.nombre.value,
      contraseña: form_registro.password.value,
      email: form_registro.email.value
  }
  try {
    console.log(usuario);
    const { data, error } = await usuarios.registrar(usuario)
  usuario.id = data.user.id
  await usuarios.insertar(usuario)
  console.log('usuario insertado?');
  pintaTablaUsuarios()
  } catch (error) {
    console.log('error al insertar', error.message);
  }
  
}
