import map from './map.js';



describe('map', () => {
  it('takes an array and creates a new array with each value incremented by one', () => {
    const array = [1, 2, 3, 4, 5, undefined, 7];

    const parameters = (item) => {
      return item + 1;
    };
    // const newArray = array.map(item => item + 1);
    const newArray = map(array, parameters);
    expect(newArray).toEqual([2, 3, 4, 5, 6, undefined, 8]);
    expect(array).toEqual(array);
  });

  it('takes in an array and turns all values to true', () => {
    const array = [1, 2, 3, 4, 5, undefined,  7];
    const parameters = (item) => {
      item = true;
      return item;
    };
    const newArray = map(array, parameters);
    expect(newArray).toEqual([true, true, true, true, true, undefined, true]);
  });
});
