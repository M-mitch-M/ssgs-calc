const { operations } = require('./mainplus_tests');

describe('Testing the calculate function', () => {
  it('should return the correct sum', () => {
    expect(operations('+', 2, 2)).toBe(4);
  });

  it('should return the correct difference', () => {
    expect(operations('-', 5, 3)).toBe(2);
  });

  it('should return the correct product', () => {
    expect(operations('*', 4, 3)).toBe(12);
  });

  it('should return the correct quotient', () => {
    expect(operations('/', 10, 2)).toBe(5);
  });

  it('should return an error for invalid operator', () => {
    expect(operations('%', 10, 2)).toBe('Operazione non valida!');
  });

  it('should return an error for non-numeric first input', () => {
    expect(operations('+', 'a', 2)).toBe('Ciò che hai inserito non è un numero!');
  });

  it('should return an error for non-numeric second input', () => {
    expect(operations('+', 2, 'b')).toBe('Ciò che hai inserito non è un numero!');
  });

  it('should return an error for division by zero', () => {
    expect(operations('/', 10, 0)).toBe('Errore: Divisione per zero!');
  });
});