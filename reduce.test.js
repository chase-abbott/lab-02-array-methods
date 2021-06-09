import { reduce } from './reduce.js';

describe('reduce', () => {
  it('takes an array of numbers and adds them up', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const parameters = (accumulator, item) => {
      return accumulator + item;
    };
    // const newNumber = array.reduce((acc, value) => acc + value, []);
    const newNumber = reduce(array, parameters, 0);
    expect(newNumber).toBe(21);
  });

  it('changes array of numbers to a string', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const parameters = (accumulator, item) => {
      return `${accumulator}` + `${item}`;
    };
    // const newNumber = array.reduce((acc, value) => acc + value, []);
    const newArray = reduce(array, parameters, '');
    expect(newArray).toBe('123456');
  });

  it('changes array of numbers to an array of strings', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const parameters = (accumulator, item) => {
      return `${item}`;
    };
    // const newNumber = array.reduce((acc, value) => acc + value, []);
    const newArray = reduce(array, parameters, []);
    
    expect(newArray).toEqual(['1', '2', '3', '4', '5', '6']);
  });

  it('changes array of numbers to an object with the key of the original number in array and value of the original number + 1', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const parameters = (accumulator, item) => {
      
      return accumulator[item] = item + 1;
    };
    // const newNumber = array.reduce((acc, value) => acc + value, []);
    const newArray = reduce(array, parameters, {});
    expect(newArray).toEqual({
      1: 2,
      2: 3,
      3: 4,
      4: 5,
      5: 6,
      6: 7
    });
  });
  it('sums the numbers in array without defined initial value', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const parameters = (accumulator, item) => {
      
      return accumulator = accumulator + item;
    };
    // const newNumber = array.reduce((acc, value) => acc + value, []);
    const newArray = reduce(array, parameters);
    expect(newArray).toEqual(21);
  });
});
