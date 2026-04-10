import { Term } from "./Term.js";

export class Expression {
  public readonly terms: readonly Term[];

  constructor(terms: readonly Term[]) {
    this.terms = Expression.combineTerms(terms);
  }

  public static combineTerms(terms: readonly Term[]): readonly Term[] {
    const unique: Term[] = [];

    for (let term of terms) {
      for (let i = 0; i < unique.length; i++) {
        const other = unique[i]!;

        if (term.canCombineWith(other)) {
          unique.splice(i, 1);

          i = -1;
          term = term.combineWith(other);
        }
      }

      unique.push(term);
    }

    return unique;
  }
}
