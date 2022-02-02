
import * as fs from 'fs';
import * as path from 'path';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import { marked } from 'marked';
import fetch from 'node-fetch';

//let fileRoute = 'C://Users//melis//OneDrive//EScritorio//MDLinks//LIM016-md-links//CarpetaPrueba';
let fileRoute = process.argv[2];
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
const arrayMd = findMdFile(result);
console.log('filter Md files', arrayMd);

//Find Links and display an array
const getLinks = (arrMdFile) => {
  let arrayLinks = [];
  arrMdFile.forEach((mdRoute) => {
    //Read Files
    let fileContent = fs.readFileSync(mdRoute, 'utf-8');
    console.log('Read File', fileContent);
    //Convert Md file to HTML
    const htmlFileContent = marked.parse(fileContent);
    console.log('HTML File', htmlFileContent);
    //Get Links
    const dom = new JSDOM(htmlFileContent);
    const filterATags = dom.window.document.querySelectorAll('a');
    filterATags.forEach(element => {
      arrayLinks.push({
        href: element.href,
        text: (element.textContent).slice(0, 50),
        file: mdRoute
      });
    });
  });
  return arrayLinks
};

console.log('Array of Links', getLinks(arrayMd));

//Validate link
const validateLinks = (objectLinks) => {
  const arrayValidate = objectLinks.map((element) => {
    return fetch(element.href)
    .then((response) => {
      if (response.status>=200 && response.status<=299){
        return {
          href: element.href,
          text: element.text,
          file: element.file,
          status: response.status,
          ok: 'OK',
        };
      }else{
        return {
          href: element.href,
          text: element.text,
          file: element.file,
          status: response.status,
          ok: 'FAIL',
        };
      }
    })
    .catch(() => {
      return{
        href: element.href,
          text: element.text,
          file: element.file,
          status: 'Fail Status',
          ok: 'FAIL',
      }
    });
  });
  return Promise.all(arrayValidate);
}

console.log('Validation', validateLinks(getLinks(arrayMd)));

