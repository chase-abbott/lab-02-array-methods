import filter from './filter.js';

describe('filter', () => {
  it('filters the array', () => {
    const array = ['chase', 'sally', 4, 'kevin', true, undefined, 'chauncey'];

    const parameters = (item) => {
      return item[0] === 'c';
    };

    const newArray = filter(array, parameters);

    expect(newArray).toEqual(['chase', 'chauncey']);
  });
});
