
import * as fs from 'fs';
import * as path from 'path';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import { marked } from 'marked';
import fetch from 'node-fetch';

//let fileRoute = 'C://Users//melis//OneDrive//EScritorio//MDLinks//LIM016-md-links//CarpetaPrueba';
// check if the route exist?
export let fileExist = (fileRoute) => fs.existsSync(fileRoute);

// convert route in absolute
export let absoluteRoute =(fileRoute) => path.resolve(fileRoute);


//check if it is a File
//let isfile  = fs.lstatSync(fileRoute).isFile();

//check if it is a Directory
const verifyFile = (fileRoute) => {
  let isDirectory = fs.lstatSync(fileRoute);
  const listDirectory = isDirectory.isFile();
  return listDirectory;
}
//verifyFile(fileRoute);

//Read Directory
export const directoryList = (fileRoute) => {
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
//const arrDir = directoryList(fileRoute);
//console.log('Directory List', result);

// extract Md file and display an array

export const findMdFile = (arrMd) => {
  let arrayMdFile = arrMd.filter(e => path.extname(e) === '.md');

  return arrayMdFile;
};
//console.log(findMdFile(arrDir));
//const arrayMd = findMdFile(arrDir);
//console.log('filter Md files', arrayMd);

//Find Links and display an array
export const getLinks = (arrMdFile) => {
  let arrayLinks = [];
  arrMdFile.forEach((mdRoute) => {
    //Read Files
    let fileContent = fs.readFileSync(mdRoute, 'utf-8');
    //Convert Md file to HTML
    const htmlFileContent = marked.parse(fileContent);
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

//console.log('Array of Links', getLinks(arrayMd));

//Validate link
export const validateLinks = (objectLinks) => {
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
    .catch((error) => {
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

/*validateLinks(getLinks(arrayMd))
.then((res) => console.log(res))
.catch((error) => console.log(error));*/



