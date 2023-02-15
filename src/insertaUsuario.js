import { usuarios } from "./bd/usuarios";

export const insertaUsuario = async () =>{
    const form_registro = document.querySelector('#form-registro');
    const usuario = {
        nombre: form_registro.nombre.value,
        contraseña: form_registro.password.value,
        email: form_registro.email.value
    }
    await usuarios.insertar(usuario)
    console.log(usuario, 'insertado');
}