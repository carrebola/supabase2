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


    const users = await usuarios.leerUsuarios()

    let tabla = `
    <table id="tabla-usuarios" class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
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
        </tr>
        `
    });

    tabla+=`
        </tbody>
    </table>
    `
    return tabla
}