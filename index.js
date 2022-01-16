/*module.exports = () => {
  // ...
};*/
import * as fs from 'fs';
import * as path from 'path';

let fileRoute = 'C://Users//melis//OneDrive//EScritorio//MDLinks//LIM016-md-links//Carpeta Prueba';

// check if the route exist?
let fileExist = fs.existsSync(fileRoute) ? console.log("El archivo EXISTE!") : console.log("El archivo NO EXISTE!");
// convert route in absolute
let absoluteRoute = path.isAbsolute(fileRoute) ? fileRoute : path.resolve(fileRoute);
console.log(absoluteRoute);

//check if it is a Directory
const verifyFile = (fileRoute) => {
  let isDirectory = fs.lstatSync(fileRoute);
  const listDirectory = isDirectory.isFile();
  //Read Directory
  return listDirectory;
}
//Read Directory
const directoryList = (fileRoute) => {
  let arrayFile = [];
  if (verifyFile(fileRoute)) {
    arrayFile.push(fileRoute);
  } else {
    const readDirectory = fs.readdirSync(fileRoute);

    readDirectory.forEach(eleFile => {
      const route = path.join(fileRoute, eleFile);
      arrayFile = arrayFile.concat(directoryList(route))
    })
  }
  return arrayFile;
}

console.log(directoryList(fileRoute));

const validateExtension = (arrayFile) => path.extname(arrayFile) === '.md';
console.log(validateExtension(arrayFile));


/*const searchFilesMd = arrayFile =>{
  arrayFile.filter((route) => {
    return path.extname(route) === '.md';
  });
}
  console.log(searchFilesMd(fileRoute));
//recorrer directorio y convertir en ruta absoluta de cada archivo

//check if it is a File
/*let file = fs.lstatSync(fileRoute).isFile() ? console.log("Es un Archivo") : console.log("No es un archivo");
console.log(file);
//Read File
function readfile(callback) {
  fs.readFile(fileRoute, "utf-8", function (error, data) {
    if (error) throw error
    callback(data)
  })
}
readfile(function (data) {
  console.log(data)
})*/


/*function filewalker(fileRoute, (err, data)) {
  if (err) {
    throw err;
  }
  console.log(data);
});*/
