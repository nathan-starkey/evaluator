import type { IConstant, IExpression, IProduct, ISummand } from "../types";

export class Summand implements ISummand {
  get coefficient(): IConstant {
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
