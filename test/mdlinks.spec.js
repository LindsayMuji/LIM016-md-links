import { mdLinks } from '../mdLinks.js';

const mdFilePath = 'C://Users//melis//OneDrive//EScritorio//MDLinks//LIM016-md-links//CarpetaPrueba//Carpeta1//prueba3.md';
const invalidPath = 'C://Users//melis//OneDrive//EScritorio//MDLinks//LIM016-md-links//CarpetaPrueba//prueba1.md';
const unvalidatedLinks = [
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md'
  }
];

const validatedLinks = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Mess',
    text: 'Mensajes HTTP - MDN',
    file: 'C:\\Users\\melis\\OneDrive\\Escritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\subcarpeta\\prueba4.md',
    status: 400,
    ok: 'FAIL'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\melis\\OneDrive\\Escritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md',
    status: 200,
    ok: 'OK'
  },
];

// TEST FOR THE MDLINKS FUNCTION
describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('It should return an array of objects with unvalidated Links',
    () => mdLinks(mdFilePath, { validate: false }).then(e => expect(e).toEqual(unvalidatedLinks)));
  it('It should return an array of objects with validated Links',
    () => mdLinks(mdFilePath, { validate: true }).then(e => expect(e).toEqual(validatedLinks)));
  it('It should return an error message',
    () => mdLinks(invalidPath, { validate: true }).catch(e => expect(e).toEqual(new Error('The Path does not Exist'))));
});
