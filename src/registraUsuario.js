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
  const user = await usuarios.registrar(usuario)
  usuario.id = user.id
  await usuarios.insertar(usuario)
  console.log('usuario insertado?');
  pintaTablaUsuarios()
}
