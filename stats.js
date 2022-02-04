export const totalLinks = (arrayLinks) => arrayLinks.map((element) => element.href).length;

export const uniqueLinks = (arrayLinks) => {
  const linksSet = new Set ([]);
  arrayLinks.forEach((element) => linksSet.add(element.href));
  return linksSet.size
};

export const brokenOfLinksStats = (arrayOfLinks)=> {
  const broken = arrayOfLinks.filter((element)=>
  element.status<200 || element.status >= 400 || element.message === 'FAIL')
  const totalBroken = broken.length
  return  totalBroken
}

/*const prueba = [
  {
    href: 'https://jestjs.io/',
    text: 'Jest',
    file: 'C:\\Users\\melis\\OneDrive\\Escritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\prueba3.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\melis\\OneDrive\\Escritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Overview',
    text: 'Generalidades del protocolo HTTP - MDN',
    file: 'C:\\Users\\melis\\OneDrive\\Escritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\subcarpeta\\prueba4.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\melis\\OneDrive\\Escritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md',
    status: 400,
    message: 'FAIL'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Mess',
    text: 'Mensajes HTTP - MDN',
    file: 'C:\\Users\\melis\\OneDrive\\Escritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\subcarpeta\\prueba4.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\melis\\OneDrive\\Escritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md',
    status: 400,
    message: 'FAIL'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\melis\\OneDrive\\Escritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\melis\\OneDrive\\Escritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md',
    status: 400,
    message: 'FAIL'
  }
];

console.log('Links Unicos', uniqueLinks(prueba));
console.log('total de Links', totalLinks(prueba));
console.log('Links rotos', brokenOfLinksStats(prueba));*/
