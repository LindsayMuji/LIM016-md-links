/*import { fileExist, getLinks, findMdFile } from '../api.js';

describe('Path exists', () => {
  it('Should be a function', () => {
      expect(typeof fileExist).toBe('function');
  });
  it('Should return true if path exists', () => {
      expect(fileExist('api.js')).toBeTruthy;
  });
  it('Should return false if path does not exists', () => {
      expect(fileExist('false-example')).toBeFalsy;
  })
});

// FUNCTION GET MD FILE TEST
describe('Get .md File', () => {
  it('Should be a function', () => {
    expect(typeof findMdFile).toBe('function');
  });
  it('Should return an array of .md file', () => {
    const routeCarpeta1 = 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1';
    const arrFileMd1 = [
      'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\subcarpeta\\prueba4.md',
      'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\prueba3.md'
    ];
    expect(findMdFile(routeCarpeta1)).toEqual(arrFileMd1);
  });
  it('Debería retornar en un arreglo la ruta ingresada', () => {
    const routeFile1 = 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\prueba3.md';
    const routeFile2 = ['C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta1\\prueba3.md'];
    expect(findMdFile(routeFile1)).toEqual(routeFile2);
  });
});


describe('links info', () => {
  it('Should be a function', () => {
      expect(typeof getLinks).toBe('function');
  });
  it('Should return an array of objects with information for each link', () => {
      const output = [
          {
              href: 'https:\\es.wikipedia.org\wiki\Markdown',
              text: 'Markdown',
              file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md'
          },
          {
              href: 'https://www.amazon.com/error',
              text: 'Amazon',
              file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md'
          },
          {
              href: 'https://www.google.com/',
              text: 'Google',
              file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md'
          },
          {
              href: 'https://jestjs.io/docs/ecmascript-modules',
              text: 'HolaJest',
              file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md'
          },
          {
              href: 'https://www.revistacomunicar.com/',
              text: 'Revista Comunicar',
              file: 'C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md'
          }

      ]
      expect(getLinks((findMdFile('C:\\Users\\melis\\OneDrive\\EScritorio\\MDLinks\\LIM016-md-links\\CarpetaPrueba\\Carpeta2\\prueba2.md')))).toEqual(output);
  })
})*/
