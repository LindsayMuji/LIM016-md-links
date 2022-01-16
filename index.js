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

