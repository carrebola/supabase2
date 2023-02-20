# Supabase
1. Creamos proyecto
2. Creamos repositorio
3. Creamos ramas master y dev
4. A partir de dev creamos rama **interficie**

## Interficie
- Creamos index.html con formularios de login, registro y juegos  y tabla para usuarios y juegos y comentarios

## Creamos cuenta en supabase
- Nos damos de alta y cramos proyecto con nombre **prueba-supabase**
- Creamos tabla usuarios para todos los datos de los usuarios que se quieren registrar (id, nombre, fecha nacimiento, etc)
- Creamos tabla juegos (id, nombre, descripción) con dos juegos
- Creamos tabla comentarios (id, comentario, usuario_id, juego_id) y añadimos 5 comentarios de diferentes usuarios para diferentes juegos (los campos usuario_id y juego_id deben ser de tipo uuid y clave foranea)

### Sistema de autenticación en supabase
- Supabase crea de forma automática una tabla **users** (que no es la tabla **usuarios**) donde guardará los datos de los usuarios que se registren o autentiquen.
- De momento para comenzar enviaremos una invitación a nuestro mail para que tengamos un usuario administrador.
- El sistema enviará un mail a tu cuenta con un enlace. Una vez hayas hecho click estarás regisrado y aparecerás en la bd en users
## API de SUPABASE
- En nuestro proyecto Instalamos supabase
```
npm install --save @supabase/supabase-js

```
- Creamos carpeta con los archivos supabase.js y usuarios.js
## supabase.js
- En este archivo creamos la conexión a la base de datos
```
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mmahdrxsfevbwhcivfzl.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
```
En la variable **supabaseKey** hay que poner la apikey que encontrarás en la configuración de la base de datos

## usuarios.js
- usuarios será un objeto con los métodos necesarios para interacturar  sobre la tabla de usuarios y para hacer login y logout sobre la tabla users. Para ello usaremos la api de supabase. 

## main.js y Funciones principales
Creamos main.js y las funciones que serán llamadas desde main. Estas usarán el objeto usuarios, juegos o comentarios para comunicarse con supabase a través de la api.

  - login(): Para crear una sesión
  - logout(): Para cerrar la sesión
  - pintaUsuarioLogeado(): Captura el mail del user logeado y lo inyecta en la página
  - pintaTablaUsuarios(): Lee usuarios de bd y Pinta tabla
  - registraUsuario(): Crea un usuario en **users** de bd y llama a insertaUsuario()
  - insertaUsuario(): añade los datos de ese usuario en la tabla usuarios
  - insertaJuego(): Inserta un juego en la BD (solo si tienes permisos) 
  - pintaTablaJuegos(): Idem con juegos
  

## Activamos sistema de autenticación basado en email y contraseña
- Desde SUPABASE activamos la autenticación
- Creamos en **usuarios** el método necesario (usando la api de supabase) para poder logearnos
    ```
    login: async (usuario)=>{
        try {
            let { data, error } = await supabase.auth.signInWithPassword({
                email: usuario.email,
                password: usuario.contraseña
            })
            console.log('login ok: ',data.user);
            return data.user.email
        } catch (error) {
            console.log('error al logear en la bd', error);
        }
    },
    logout: async ()=>{
        try {
            let { error } = await supabase.auth.signOut()
            console.log('logout ok');
        } catch (error) {
            console.log('error al cerrar sesion en la bd', error);
        }
    },
    ```
## Politicas de acceso para SUPABASE
- Activamos las politicas de acceso para las tablas usuarios y juegos:
  - Usuarios: 
    - Solo Admin puede leer usuarios
    - Solo Admin puede modificar usuarios (para el campo rol)
    - Solo admin pudede borrar usuarios
    - Los usuarios registrado pueden modificar sus propios datos
  - Juegos
    - Todos pueden leer la tabla juegos
    - Solo usuarios con rol 'editor' pueden añadir juegos
etc...


### Ejemplo de Politica: Solo pueden insertar juegos los usuarios autenticados que tengan rol = editor

```
    (auth.uid() IN ( SELECT usuarios.usuario_id
    FROM usuarios
    WHERE ((usuarios.usuario_id = auth.uid()) AND (usuarios.rol = 'editor'::text)))) 
```

## Funciones supabase para consultas SQL que no podemos cubrir con la api de Javascript
- Primero debemos crear la consulta y probarla en el editor sql de supabase.
  Por ejemplo: De la tabla comentarios queremos todos los comentarios además del nombre del juego al que corresponde y el nombre del usuario que ha hecho el comentario. Para ello hay que cruzar las tablas comentarios, juegos y usuarios.

```
  select  usuarios.nombre as nombre, comentarios.comentario, juegos.nombre   
  as juego from comentarios, usuarios, juegos
  where usuarios.id = comentarios.usuario_id and juegos.id =  juego_id
```
- Ahora que sabemos que la query funciona la integramos en una función que se guardará en supabase en la sección **funciones**. Para ello nos vamos al editor de sql y escribimos:

```
create or replace function comentarios()
returns table(
  nombre text,
  comentario text,
  juegos text)

language sql
as 
$$

select  usuarios.nombre as nombre, comentarios.comentario, juegos.nombre   
  as juego from comentarios, usuarios, juegos
  where usuarios.id = comentarios.usuario_id and juegos.id =  juego_id

$$;
```

- Ahora ya podemos ir a nuestra aplicación y probar la función para ver si devuelve lo que esperamos. En este caso la probamos directamente en el archivo supabase.js:

```
//Prueba función supabase
const { data, error } = await supabase.rpc('comentarios')

console.log('funcion de supabase: ', data, error);
```

Ahora que vemos que funciona podemos integrarla en el objeto **comentarios**
```
    leerDetalle : async ()=>{
        //Lee la tabla comentarios con nombre de usuario y nombre de juego
        const { data, error } = await supabase.rpc('tablaComentarios')
        return { data, error }
    },
```

- Solo falta crear la nueva función **pintaTablaComentariosDetalle** que pinta la tabla con los datos completos
- 