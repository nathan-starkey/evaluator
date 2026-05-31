import type { IConstant, IExpression, IProduct, ISummand } from "../types";
import { Constant } from "./Constant";

export class Summand implements ISummand {
  readonly coefficient: IConstant;
  readonly product: IProduct;

  constructor(coefficient: IConstant, product: IProduct) {
    this.coefficient = coefficient;
    this.product = product;
  }

  isEqualTo(other: IExpression): boolean {
    return (
      other instanceof Summand &&
      this.coefficient.isEqualTo(other.coefficient) &&
      this.product.isEqualTo(other.product)
    );
  }

  normalise(): IExpression {
    if (this.coefficient == Constant.ZERO) {
      return Constant.ZERO;
    }

    if (this.coefficient == Constant.ONE) {
      return this.product;
    }

    return this;
  }
}
