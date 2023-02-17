
import { pintaTablaUsuarios } from "./pintaTablaUsuarios.js";
import { pintaTablaJuegos } from "./pintaTablaJuegos.js";
import { pintaTablaComentarios } from "./pintaTablaComentarios.js";
import { pintaUsuarioLogeado } from "./pintaUsuarioLogeado.js";
import { pintaSelectJuegos } from "./pintaSelectJuegos.js";
import { insertaUsuario } from "./insertaUsuario.js";
import { insertaJuego } from "./insertaJuego.js";
import { insertaComentario } from "./insertaComentario.js";
import { registraUsuario } from "./registraUsuario.js";
import { login } from "./login.js";
import { logout } from "./logout.js";



//pintamos tabla usuarios con los usuarios de la bd
pintaTablaUsuarios()
//pintamos la tabla juegos
pintaTablaJuegos();
//pintamos el usuario logeado
pintaUsuarioLogeado()
//pintamos la tabla de comentarios
pintaTablaComentarios()

//pintamos la lista de juegos en select
pintaSelectJuegos()

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
    await pintaTablaJuegos();
});

//ingresamos comentario
document.querySelector('#form-comentarios').addEventListener('submit', async (e)=>{
    e.preventDefault()
    await insertaComentario()
    //pintamos tabla juegos con los juegos de la bd
    await pintaTablaComentarios();
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


