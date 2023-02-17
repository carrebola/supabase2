import { juegos } from "./bd/juegos";

export const pintaSelectJuegos = async () =>{
    const res = await juegos.leer()
    let lista = ''
   res.forEach(element => {
    lista+=`<option value="${element.id}">${element.nombre}</option>`
   });
   document.querySelector('#select-juegos').innerHTML = lista
}