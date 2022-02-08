import { mdLinks } from '../mdLinks.js';

const mdFilePath = 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\subcarpeta\\prueba4.md';
const invalidPath = 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\prueba4.md';
const unvalidatedLinks = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Overview',
    text: 'Generalidades del protocolo HTTP - MDN',
    file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\subcarpeta\\prueba4.md'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Mess',
    text: 'Mensajes HTTP - MDN',
    file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\subcarpeta\\prueba4.md'
  }
];

const validatedLinks = [
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Overview',
    text: 'Generalidades del protocolo HTTP - MDN',
    file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\subcarpeta\\prueba4.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Mess',
    text: 'Mensajes HTTP - MDN',
    file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\subcarpeta\\prueba4.md',
    status: 404,
    ok: 'FAIL'
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
