import findIndex from './find-index.js';

describe('findIndex', () => {
  it('gets the index from an array', () => {
    const array = [0, 1, 2, 3, undefined, 4, 5];
    const parameters = (item) => {
      return (item === 5);
    };
    expect(findIndex(array, parameters)).toEqual(7);
  });
});
