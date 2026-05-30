import type {
  IConstant,
  IExpression,
  IFactor,
  IProduct,
  ISum,
  IVariable,
} from "../types";

export class Variable implements IVariable {
  get name(): string {
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
