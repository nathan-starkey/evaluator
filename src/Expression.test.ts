import { describe, it } from "node:test";
import { Sign, Term } from "./Term.js";
import { Expression } from "./Expression.js";
import assert from "node:assert/strict";

describe("Expression", () => {
  describe("combineTerms()", () => {
    it("provides each term exactly once", () => {
      const termA = new Term(Sign.Positive, []);
      const termB = new Term(Sign.Positive, []);
      const termC = new Term(Sign.Positive, []);

      const terms = Expression.combineTerms([
        termA,
        termA,
        termB,
        termC,
        termB,
      ]);

      assert.equal(terms.length, 3);
      assert(terms.includes(termA));
      assert(terms.includes(termB));
      assert(terms.includes(termC));
    });
  });
});
