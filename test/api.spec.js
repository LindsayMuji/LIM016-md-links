import { fileExist, } from '../api.js';

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
