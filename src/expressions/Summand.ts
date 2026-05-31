import type { IConstant, IExpression, IProduct, ISummand } from "../types";

export class Summand implements ISummand {
  get coefficient(): IConstant {
    throw new Error("Method not implemented.");
  }

  get product(): IProduct {
    throw new Error("Method not implemented.");
  }

  isEqualTo(other: IExpression): boolean {
    return (
      other instanceof Summand &&
      this.numerator == other.numerator &&
      this.denominator == other.denominator &&
      this.product.isEqualTo(other.product)
    );
  }

  normalise(): IExpression {
    if (this.numerator == 0) {
      // TODO: Return the 'zero' constant.
      throw new Error("Case not implemented.");
    }

    if (this.numerator == 1 && this.denominator == 1) {
      return this.product;
    }

    return this;
  }
}
