export const help = `
                                         █▀▄▀█ █▀▀▄ █   █ █▄  █ █ ▄▀ █▀▀
                                         █ ▀ █ █  █ █   █ █ ▀▄█ █▀▄  ▀▀█
                                         ▀   ▀ ▀▀▀  ▀▀▀ ▀ ▀   ▀ ▀  ▀ ▀▀▀
                                                     By Lindsay

     ╔═════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
     ║                                                  SINTAXIS BASICA                                            ║
     ╠═══════════════════╦═════════════════════════════════════════════════════════════════════════════════════════╣
     ║                   ║ Muestra los links econtrados con su respectivo texto y ruta.                            ║
     ║   mdLinks <ruta>  ║ Ejemplo:                                                                                ║
     ║                   ║ mdLinks C:\\Users\\melis\\EScritori\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\prueba2.md║
     ╚═══════════════════╩═════════════════════════════════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                         SINTAXIS CON OPCIONES                                                          ║
╠═══════════════════════════╦════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
║                           ║ Muestra los links econtrados con su respectivo texto, ruta, status y mensaje del status.                   ║
║ mdLinks <ruta> --validate ║ Ejemplo:                                                                                                   ║
║                           ║ mdLinks C:\\Users\\melis\\EScritori\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\prueba2.md --validate        ║
╠═══════════════════════════╬════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
║                           ║ Muestra el total de links encontrados y la cantidad de links unicos.                                       ║
║  mdLinks <ruta> --stats   ║ Ejemplo:                                                                                                   ║
║                           ║ mdLinks C:\\Users\\melis\\EScritori\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\prueba2.md --stats           ║
╠═══════════════════════════╬════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
║    mdLinks <ruta>         ║ Muestra el total de links encontrados, la cantidad de links unicos y la cantidad de links rotos.           ║
║  --stats --validate       ║ Ejemplo:                                                                                                   ║
║                           ║ mdLinks C:\\Users\\melis\\EScritori\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\prueba2.md --stats --validate║
╚═══════════════════════════╩════════════════════════════════════════════════════════════════════════════════════════════════════════════╝

* NOTA: LA RUTA PUEDE SER RELATIVA O ABSOLUTA`;
