import { Save } from './saveOrder';

describe('SaveOrder', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be return undefined', () => {
    const sut = new Save();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Save();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "pedido salvo com sucesso..."', () => {
    const sut = new Save();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('pedido salvo com sucesso...');
  });
});
