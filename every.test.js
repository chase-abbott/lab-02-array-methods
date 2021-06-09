import every from './every.js';
describe('every', () => {
  it('returns true if all callback values are true', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const parameters = (item) => {
      return typeof item === 'number';
    };

    expect(every(array, parameters)).toBeTruthy();
  });
  it('returns false if one or more callbacks are ot true', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const parameters = (item) => {
      return item === 6;
    };

    expect(every(array, parameters)).toBeFalsy();
  });
});
