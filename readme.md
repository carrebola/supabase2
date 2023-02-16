# Supabase
1. Creamos proyecto
2. Creamos repositorio
3. Creamos ramas master y dev
4. A partir de dev creamos rama **interficie**

## Interficie
- Creamos index.html con formularios de login, registro y juegos  y tabla para usuarios y juegos y comentarios

## Creamos cuenta en supabase
- Nos damos de alta y cramos proyecto con nombre **prueba-supabase**
- Creamos tabla users e **invitamos a dos usuarios**
- Creamos tabla juegos con dos juegos
- Creamos tabla comentarios y añadimos 5 comentarios de diferentes usuarios para diferentes juegos

## API de SUPABASE
-Instalamos supabase con npm i 
```
npm install --save @supabase/supabase-js

```
- Creamos carpeta con los archivos supabase.js y usuarios.js
## supabase.js
En este archivo creamos la conexión a la base de datos
```
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mmahdrxsfevbwhcivfzl.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
```
En la variable supabaseKey hay que poner la apikey que encontrarás en la configuración de la base de datos

## usuarios.js
- usuarios será un objeto con los metodos necesarios para hacer un crud sobre la bd de users. Para ello usaremos la api de supabase. 

## main.js y Funciones principales
Creamos main.js y las funciones que serán llamadas desde main. Estas usarán el objeto usuarios, juegos o comentarios para comunicarse con supabase a través de la api.

  - login(): Para crear una sesión
  - logout(): Para cerrar la sesión
  - pintaUsuarioLogeado(): Captura el mail del user logeado y lo inyecta en la página
  - insertaJuego(): Inserta un juego en la BD (solo si tienes permisos) 
  - pintaTablaUsuarios(): Lee usuarios de bd y Pinta tabla
  - pintaTablaJuegos(): Idem con juegos
  - registraUsuario(): Crea un usuario en **users** de bd y llama a insertaUsuario()
  - insertaUsuario(): añade los datos de ese usuario en la tabla usuarios

## Activamos sistema de autenticación basado en email y contraseña
- Desde SUPABASE activamos la autenticación
- usamos en **usuarios** la api para poder logearnos
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