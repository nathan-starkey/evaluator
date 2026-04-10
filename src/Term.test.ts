import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { Factor } from "./Factor.js";
import { Term } from "./Term.js";

describe("Term", () => {
  describe("combineFactors()", () => {
    it("provides each factor exactly once", () => {
      const factorA = new Factor();
      const factorB = new Factor();
      const factorC = new Factor();

      const factors = Term.combineFactors([
        factorA,
        factorA,
        factorB,
        factorC,
        factorB,
      ]);

      assert.equal(factors.length, 3);
      assert(factors.includes(factorA));
      assert(factors.includes(factorB));
      assert(factors.includes(factorC));
    });
  });
});
