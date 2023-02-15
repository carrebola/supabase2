import { juegos } from "./bd/juegos";
export const pintaTablaJuegos = async ()=>{

   
    const data = await juegos.leer()

    let tabla = `
    <table id="tabla-juegos" class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
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
            <td>${elemento.nombre}</td>
            <td>${elemento.descripcion}</td>
            <td><img src="/icons/edit-2.svg"></td>
            <td><img src="/icons/trahs-2.svg"></td>
        </tr>
        `
    });

    tabla+=`
        </tbody>
    </table>
    `
    return tabla
}