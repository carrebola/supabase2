// vite.config.js
import { resolve } from "path";

export default {
    root: resolve(__dirname, './src'),
    build: {
        rollupOptions: {
            /*
                Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
                interna de Rollup de Vite.
            */
            input: {
                main: resolve(__dirname, 'src/index.html'),
                
            },
            output: {
                dir: resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
                format: 'es', //Formato de ES modules
            },
        },
        outDir: resolve(__dirname, 'dist'),
        //minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
    },
}