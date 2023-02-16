import { usuarios } from "./bd/usuarios";
export const pintaTablaUsuarios = async ()=>{

    // ejemplos de array con datos
    // let usuarios = [
    //     {
    //         id:1,
    //         nombre: 'aa',
    //         contraseña: 1234,
    //         email: 'aa@mail.com'
    //     },
    //     {
    //         id:2,
    //         nombre: 'bb',
    //         contraseña: 1234,
    //         email: 'bb@mail.com'
    //     },
    // ]


    const users = await usuarios.leer()

    let tabla = `
    <table id="tabla-usuarios" class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
    `
    users.forEach(elemento => {
        tabla+=`
        <tr>
            <td>${elemento.id}</td>
            <td>${elemento.nombre}</td>
            <td>${elemento.email}</td>
            <td>${elemento.rol}</td>
            <td><img src="./icons/edit-2.svg"></td>
            <td><img src="./icons/trash-2.svg"></td>
        </tr>
        `
    });

    tabla+=`
        </tbody>
    </table>
    `
    document.querySelector('#tabla-usuarios').innerHTML = tabla
}