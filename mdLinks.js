import {fileExist, absoluteRoute, directoryList, findMdFile, getLinks, validateLinks} from "./api.js";


  export const mdLinks = (path, options) => new Promise((resolve, reject) => {
    let pathAbsolute;
    if (fileExist(path)) {
      pathAbsolute = absoluteRoute(path);
      const arrDirectory = directoryList(pathAbsolute);
      const arrFileMd = findMdFile(arrDirectory);
      const arrayFindLinks = getLinks(arrFileMd);
      if (options.validate) {
        resolve(validateLinks(arrayFindLinks).then((response) => response));
      } else {
        resolve(arrayFindLinks);
      }
    } else reject(new Error('The Path does not exist'));
  });
   /*mdLinks('./CarpetaPrueba', { validate: false })
      .then(res => console.log(res))
      .catch(err => console.log(err));*/
