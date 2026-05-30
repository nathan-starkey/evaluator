import type { IExpression } from "../types";

const otherIsEqualTo = (expression: IExpression) => (other: IExpression) =>
  other.isEqualTo(expression);

export const otherIsContainedIn =
  (superset: readonly IExpression[]) => (expression: IExpression) =>
    superset.findIndex(otherIsEqualTo(expression)) != -1;
