import { pintaTablaUsuarios } from "./pintaTablaUsuarios.js";
import { pintaTablaJuegos } from "./pintaTablaJuegos.js";

import { insertaUsuario } from "./insertaUsuario.js";
import { insertaJuego } from "./insertaJuego.js";
//pintamos tabla usuarios con los usuarios de la bd
document.querySelector('#tabla-usuarios').innerHTML = await pintaTablaUsuarios();

console.log('juegos', await pintaTablaJuegos());
document.querySelector('#tabla-juegos').innerHTML = await pintaTablaJuegos();

//ingresamos usuario
document.querySelector('#form-registro').addEventListener('submit', async (e)=>{
    e.preventDefault()
    console.log('submit user');
    await insertaUsuario()
    //pintamos tabla usuarios con los usuarios de la bd
    document.querySelector('#tabla-usuarios').innerHTML = await pintaTablaUsuarios();
    //pintamos tabla usuarios con los juegos de la bd
});

//ingresamos juego
document.querySelector('#form-juego').addEventListener('submit', async (e)=>{
    e.preventDefault()
    console.log('submit juego');
    await insertaJuego()
    //pintamos tabla juegos con los juegos de la bd
    document.querySelector('#tabla-juegos').innerHTML = await pintaTablaJuegos();
});
