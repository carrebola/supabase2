
import { pintaTablaUsuarios } from "./pintaTablaUsuarios.js";
import { pintaTablaJuegos } from "./pintaTablaJuegos.js";
import { pintaUsuarioLogeado } from "./pintaUsuarioLogeado.js";
import { insertaUsuario } from "./insertaUsuario.js";
import { registraUsuario } from "./registraUsuario.js";
import { login } from "./login.js";
import { logout } from "./logout.js";



//pintamos tabla usuarios con los usuarios de la bd
pintaTablaUsuarios()
//pintamos la tabla juegos
document.querySelector('#tabla-juegos').innerHTML = await pintaTablaJuegos();

//pintamos el usuario logeado
pintaUsuarioLogeado()

//ingresamos usuario
document.querySelector('#form-registro').addEventListener('submit', async (e)=>{
    e.preventDefault()
    await registraUsuario()
});

//ingresamos juego
document.querySelector('#form-juego').addEventListener('submit', async (e)=>{
    e.preventDefault()
    await insertaJuego()
    //pintamos tabla juegos con los juegos de la bd
    document.querySelector('#tabla-juegos').innerHTML = await pintaTablaJuegos();
});

//login
document.querySelector('#form-login').addEventListener('submit', async (e)=>{
    e.preventDefault()
    await login()
});

//logout
document.querySelector('#btn-logout').addEventListener('click', async (e)=>{
    await logout()
});


