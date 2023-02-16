import { usuarios } from "./bd/usuarios";
import { pintaTablaUsuarios } from "./pintaTablaUsuarios.js";

export const insertaUsuario = async () =>{
    const form_registro = document.querySelector('#form-registro');
    const usuario = {
        nombre: form_registro.nombre.value,
        contraseña: form_registro.password.value,
        email: form_registro.email.value,
        rol: 'registrado'
    }
    await usuarios.insertar(usuario)
    pintaTablaUsuarios()

}