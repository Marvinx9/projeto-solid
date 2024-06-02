import { SaveProtocol } from '../classes/interfaces/save-protocol';

export class Save implements SaveProtocol {
  saveOrder(): void {
    console.log('pedido salvo com sucesso...');
  }
}
