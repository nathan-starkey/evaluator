import type { IConstant, IExpression } from "../types";

export enum Sign {
  NEGATIVE = -1,
  ZERO = 0,
  POSITIVE = 1,
}

export class Constant implements IConstant {
  static readonly ZERO = Constant.integer(0);
  static readonly ONE = Constant.integer(1);

  static fraction(numerator: number, denominator: number) {
    const sign = Math.sign(numerator * denominator) as Sign;
    const absNum = Math.abs(numerator);
    const absDenom = Math.abs(denominator);

    return new Constant(sign, absNum, absDenom);
  }

  static integer(value: number) {
    return this.fraction(value, 1);
  }

  readonly sign: Sign;
  readonly numerator: number;
  readonly denominator: number;

  readonly coefficient = this;
  readonly product = Constant.ONE;

  private constructor(sign: Sign, numerator: number, denominator: number) {
    this.sign = sign;
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
