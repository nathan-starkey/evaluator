import { Factor } from "./Factor";

export enum Sign {
  Positive = 1,
  Negative = -1,
}

export class Term {
  public readonly sign: Sign;
  public readonly factors: readonly Factor[];

  constructor(sign: Sign, factors: readonly Factor[]) {
    this.sign = sign;
    this.factors = Term.combineFactors(factors);
  }

  public canCombineWith(other: Term): boolean {
    return this == other; // TODO: implement
  }

  public combineWith(other: Term): Term {
    return this; // TODO: implement
  }

  public static combineFactors(factors: readonly Factor[]): readonly Factor[] {
    const unique: Factor[] = [];

    for (let factor of factors) {
      for (let i = 0; i < unique.length; i++) {
        const other = unique[i]!;

        if (factor.canCombineWith(other)) {
          unique.splice(i, 1);

          i = -1;
          factor = factor.combineWith(other);
        }
      }

      unique.push(factor);
    }

    return unique;
  }
}
