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
- usuarios será un objeto con los metodos necesarios para hacer un crud sobre la bd de users
