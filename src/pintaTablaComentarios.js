import { comentarios } from "./bd/comentarios";
export const pintaTablaComentarios = async ()=>{

   
    const data = await comentarios.leer()
    let tabla = `
    <table id="tabla-juegos" class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>ID juego</th>
                <th>ID usuario</th>
                <th>Descripcion</th>
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
            <td>${elemento.juego_id}</td>
            <td>${elemento.usuario_id}</td>
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