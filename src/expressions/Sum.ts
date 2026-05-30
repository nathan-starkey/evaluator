import type { IExpression, ISum, ISummand } from "../types";
import { otherIsContainedIn } from "./utils.js";

export class Sum implements ISum {
  get summands(): readonly ISummand[] {
    throw new Error("Method not implemented.");
  }

  isEqualTo(other: IExpression): boolean {
    return (
      other instanceof Sum &&
      this.summands.length == other.summands.length &&
      this.summands.every(otherIsContainedIn(other.summands))
    );
  }

  normalise(): IExpression {
    if (this.summands.length == 0) {
      // TODO: Return the 'zero' constant.
      throw new Error("Case not implemented.");
    }

    if (this.summands.length == 1) {
      return this.summands[0]!;
    }

    return this;
  }
}
