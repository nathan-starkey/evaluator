import type { IConstant, IExpression, IProduct } from "../types";

export class Constant implements IConstant {
  get numerator(): number {
    throw new Error("Method not implemented.");
  }

  get denominator(): number {
    throw new Error("Method not implemented.");
  }

  get product(): IProduct {
    throw new Error("Method not implemented.");
  }

  isEqualTo(other: IExpression): boolean {
    throw new Error("Method not implemented.");
  }

  normalise(): IExpression {
    throw new Error("Method not implemented.");
  }
}
