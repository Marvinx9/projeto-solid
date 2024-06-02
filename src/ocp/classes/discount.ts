export class Discount {
  protected discount = 0;

  calculate(valor: number): number {
    return valor - valor * this.discount;
  }
}

export class TenPercentDisc extends Discount {
  protected readonly discount = 0.1;
}

export class FiftyPercentDisc extends Discount {
  protected readonly discount = 0.5;
}
export class NotPercentDisc extends Discount {}
