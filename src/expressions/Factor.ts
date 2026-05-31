import type {
  IConstant,
  IExpression,
  IFactor,
  IProduct,
  ISum,
  IVariable,
} from "../types";

export class Factor implements IFactor {
  get coefficient(): IConstant {
    throw new Error("Method not implemented.");
  }

  get base(): ISum | IVariable | IConstant {
    throw new Error("Method not implemented.");
  }

  get exponent(): IExpression {
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
      other instanceof Factor &&
      this.base.isEqualTo(other.base) &&
      this.exponent.isEqualTo(other.exponent)
    );
  }

  normalise(): IExpression {
    // TODO: Implement procedure as covered by the flow chart.

    return this;
  }
}
