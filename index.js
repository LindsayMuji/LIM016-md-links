
import * as fs from 'fs';
import * as path from 'path';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import { marked } from 'marked';
import { clear } from 'console';

let fileRoute = 'C://Users//melis//OneDrive//EScritorio//MDLinks//LIM016-md-links//Carpeta Prueba';

// check if the route exist?
let fileExist = fs.existsSync(fileRoute) ? console.log("El archivo EXISTE!") : console.log("El archivo NO EXISTE!");

// convert route in absolute
let absoluteRoute = path.isAbsolute(fileRoute) ? fileRoute : path.resolve(fileRoute);
console.log(absoluteRoute);

//check if it is a File
let file = fs.lstatSync(fileRoute).isFile() ? console.log("Es un Archivo") : console.log("No es un archivo");

//check if it is a Directory
const verifyFile = (fileRoute) => {
  let isDirectory = fs.lstatSync(fileRoute);
  const listDirectory = isDirectory.isFile();
  return listDirectory;
}
verifyFile(fileRoute);

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
const result = directoryList(fileRoute);
console.log('Directory List', result);

// extract Md file and display an array

const findMdFile = (arrMd) => {
  let arrayMdFile = [];
  arrayMdFile = arrMd.filter(e => path.extname(e) === '.md');
  return arrayMdFile;
};
const result1 = findMdFile(result);
console.log('filter Md files', result1);

//Read Files and display an array
let arrayReadFile = [];
result1.forEach((file) => {
  let fileContent = fs.readFileSync(file, 'utf-8');
  arrayReadFile.push(fileContent);
})
console.log('Read Files', arrayReadFile);

//Convert Md file to HTML











