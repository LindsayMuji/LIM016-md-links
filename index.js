/*module.exports = () => {
  // ...
};*/
import * as fs from 'fs';
import * as path from 'path';

let fileRoute='C://Users//melis//OneDrive//EScritorio//MDLinks//LIM016-md-links//Carpeta Prueba';

// check if the route exist?
let fileExist = fs.existsSync(fileRoute)? console.log("El archivo EXISTE!"):console.log("El archivo NO EXISTE!");
// convert route in absolute
let absoluteRoute = path.isAbsolute(fileRoute) ? path.resolve(fileRoute) : fileRoute
console.log(absoluteRoute);
//check if it is a Directory
let isDirectory = fs.lstatSync(fileRoute).isDirectory();
  console.log(isDirectory);
//Read Directory
let readDirectory = fs.readFile(fileRoute,{encoding:"utf-8"})? console.log(readDirectory):console.log(error.message);
//check if it is a File
let file = fs.lstatSync(fileRoute).isFile();
  console.log(file);
