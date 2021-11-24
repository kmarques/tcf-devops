const calculatrice = require('./calculatrice');

describe('+ operand', () => {
  test('positive + positive', () => {
    expect(calculatrice(1, '+', 1)).toBe(2);
  });
  test('negative + positive', () => {
    expect(calculatrice(-1, '+', 1)).toBe(0);
  });
  test('negative + negative', () => {
    expect(calculatrice(-1, '+', -1)).toBe(-2);
  });
});

describe('- operand', () => {
  test('positive - positive', () => {
    expect(calculatrice(1, '-', 1)).toBe(0);
  });
  test('negative - positive', () => {
    expect(calculatrice(-1, '-', 1)).toBe(-2);
  });
  test('negative - negative', () => {
    expect(calculatrice(-1, '-', -1)).toBe(0);
  });
});

describe('* operand', () => {
  test('positive * positive', () => {
    expect(calculatrice(1, '*', 1)).toBe(1);
  });
  test('negative * positive', () => {
    expect(calculatrice(-1, '*', 1)).toBe(-1);
  });
  test('negative * negative', () => {
    expect(calculatrice(-1, '*', -1)).toBe(1);
  });
  test('positive * zero', () => {
    expect(calculatrice(1, '*', 0)).toBe(0);
  });
  test('zero * positive', () => {
    expect(calculatrice(0, '*', 1)).toBe(0);
  });
});

describe('/ operand', () => {
  test('positive / positive', () => {
    expect(calculatrice(1, '/', 1)).toBe(1);
  });
  test('negative / positive', () => {
    expect(calculatrice(-1, '/', 1)).toBe(-1);
  });
  test('negative / negative', () => {
    expect(calculatrice(-1, '/', -1)).toBe(1);
  });
  test('positive / zero', () => {
    expect(calculatrice(1, '/', 0)).toBe(Infinity);
  });
  test('zero / positive', () => {
    expect(calculatrice(0, '/', 1)).toBe(0);
  });
});
