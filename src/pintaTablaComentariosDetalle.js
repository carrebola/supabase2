import { comentarios } from "./bd/comentarios";
export const pintaTablaComentariosDetalle = async ()=>{

   
    const data = await comentarios.leerDetalle()
    console.log(data);
    let tabla = `
    <table id="tabla-juegos" class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Juego</th>
                <th>Usuario</th>
                <th>Comentario</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
    `
    data.forEach(elemento => {
        tabla+=`
        <tr>
            <td>${elemento.id}</td>
            <td>${elemento.juegos}</td>
            <td>${elemento.nombre}</td>
            <td>${elemento.comentario}</td>
            <td><img src="/icons/edit-2.svg"></td>
            <td><img src="/icons/trash-2.svg"></td>
        </tr>
        `
    });

    tabla+=`
        </tbody>
    </table>
    `
    document.querySelector('#tabla-comentarios').innerHTML = tabla

}