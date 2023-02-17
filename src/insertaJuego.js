import { juegos } from "./bd/juegos";

export const insertaJuego = async () =>{
    const form_juego = document.querySelector('#form-juego');
    const juego = {
        nombre: form_juego.nombre.value,
        descripcion: form_juego.descripcion.value,
    }
    const res = await juegos.insertar(juego)
    console.log('data',res.data);
    console.log('error',res.error);
    if(res.error){
        alert('No se ha podio insertar el juego. No tienes permisos')
    }
    else{
        console.log('juego insertado')
    }
    
    
    
}