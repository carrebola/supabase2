import { juegos } from "./bd/juegos";

export const insertaJuego = async () =>{
    const form_juego = document.querySelector('#form-juego');
    const juego = {
        nombre: form_juego.nombre.value,
        descripcion: form_juego.descripcion.value,
    }
    await juegos.insertar(juego)
    console.log(juego, 'insertado');
}