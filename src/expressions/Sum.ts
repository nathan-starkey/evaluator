import type { IExpression, ISum, ISummand } from "../types";

export class Sum implements ISum {
  get summands(): readonly ISummand[] {
    throw new Error("Method not implemented.");
  }

  isEqualTo(other: IExpression): boolean {
    throw new Error("Method not implemented.");
  }

  normalise(): IExpression {
    throw new Error("Method not implemented.");
  }
}
