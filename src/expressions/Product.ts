import type { IConstant, IExpression, IFactor, IProduct } from "../types";

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
    throw new Error("Method not implemented.");
  }

  normalise(): IExpression {
    throw new Error("Method not implemented.");
  }
}
