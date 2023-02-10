import { pintaTablaUsuarios } from "./pintaTablaUsuarios.js";
import { insertaUsuario } from "./insertaUsuario.js";

//pintamos tabla usuarios con los usuarios de la bd
document.querySelector('#tabla-usuarios').innerHTML = await pintaTablaUsuarios();

//ingresamos usuario
document.querySelector('#form-registro').addEventListener('submit', async (e)=>{
    e.preventDefault()
    console.log('submit user');
    await insertaUsuario()
    //pintamos tabla usuarios con los usuarios de la bd
    document.querySelector('#tabla-usuarios').innerHTML = await pintaTablaUsuarios();

});
