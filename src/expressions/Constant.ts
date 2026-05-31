import type { IConstant, IExpression } from "../types";

export class Constant implements IConstant {
  static readonly ZERO = new Constant(0, 1);
  static readonly ONE = new Constant(1, 1);

  readonly numerator: number;
  readonly denominator: number;

  readonly coefficient = this;
  readonly product = Constant.ONE;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  isEqualTo(other: IExpression): boolean {
    return (
      other instanceof Constant &&
      this.numerator == other.numerator &&
      this.denominator == other.denominator
    );
  }

  normalise(): IExpression {
    if (this.numerator == 0) {
      return Constant.ZERO;
    }

    if (this.numerator == 1 && this.denominator == 1) {
      return Constant.ONE;
    }

    return this;
  }
}
