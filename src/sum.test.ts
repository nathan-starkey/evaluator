import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { IEquatable, Sum } from "./sum.js";
import { Integer } from "./types/integer.js";

// TODO: temporary
const createUniqueExpr = (): IEquatable => ({
  isEqualTo(other) {
    return this == other;
  },
});

describe("Sum", () => {
  it("combines like terms", () => {
    const expr = createUniqueExpr();

    const sum = new Sum([
      { coef: -2 as Integer, expr: expr },
      { coef: 5 as Integer, expr: expr },
    ]);

    assert.equal(sum.terms.length, 1);
  });

  it("does not combine unlike terms", () => {
    const exprA = createUniqueExpr();
    const exprB = createUniqueExpr();

    const sum = new Sum([
      { coef: -2 as Integer, expr: exprA },
      { coef: 5 as Integer, expr: exprB },
    ]);

    assert.equal(sum.terms.length, 2);
  });
});
