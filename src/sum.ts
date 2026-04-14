import { Integer } from "./types/integer.js";

// For addition, a term should look like this:

export interface IEquatable {
  isEqualTo(other: unknown): boolean;
}

export interface ITerm<TExpr extends IEquatable> {
  readonly coef: Integer;
  readonly expr: TExpr;
}

export class Sum {
  readonly terms: readonly ITerm<IEquatable>[];

  constructor(terms: readonly ITerm<IEquatable>[]) {
    const unique: ITerm<IEquatable>[] = [];

    outer: for (const term of terms) {
      for (let i = 0; i < unique.length; i++) {
        const other = unique[i]!;

        if (term.expr.isEqualTo(other.expr)) {
          unique[i] = {
            coef: (other.coef + term.coef) as Integer,
            expr: other.expr,
          };

          continue outer;
        }
      }

      unique.push(term);
    }

    this.terms = unique;
  }
}
