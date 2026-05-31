import type { IConstant, IExpression, IFactor, IProduct } from "../types";
import { otherIsContainedIn } from "./utils";

export class Product implements IProduct {
  get coefficient(): IConstant {
    throw new Error("Method not implemented.");
  }

  get factors(): readonly IFactor[] {
    throw new Error("Method not implemented.");
  }

  get product(): IProduct {
    throw new Error("Method not implemented.");
  }

  isEqualTo(other: IExpression): boolean {
    return (
      other instanceof Product &&
      this.factors.length == other.factors.length &&
      this.factors.every(otherIsContainedIn(other.factors))
    );
  }

  normalise(): IExpression {
    if (this.factors.length == 0) {
      // TODO: Return the 'one' constant.
      throw new Error("Case not implemented.");
    }

    if (this.factors.length == 1) {
      return this.factors[0]!;
    }

    return this;
  }
}
