import type { ProductTable } from "./strategy/ProductStrategy.js";
import type { SumTable } from "./strategy/SumStrategy.js";
import { Table } from "./Table.js";

export function stringifySumTable(table: SumTable): string {
  let str = "";

  for (const [term, coef] of table.getItems()) {
    const signStr = Math.sign(coef) == -1 ? "-" : "+";
    const coefStr = Math.abs(coef).toString();
    const termStr = stringifyProductTable(term);

    // Append the sign
    if (str) {
      str += ` ${signStr} `;
    } else {
      str += signStr == "-" ? "-" : "";
    }

    // Append the coefficient and the term
    if (coefStr == "1") {
      str += termStr;
    } else {
      str += coefStr + (termStr != "1" ? termStr : "");
    }
  }

  return str || "0";
}

export function stringifyProductTable(table: ProductTable): string {
  let str = "";

  for (const [factor, exponent] of table.getItems()) {
    const exponentStr = stringifySumTable(exponent);

    // Stringify then append the factor
    let factorStr;

    if (factor instanceof Table) {
      factorStr = `(${stringifySumTable(factor)})`;
    } else {
      factorStr = factor.description;
    }

    str += factorStr;

    // Append the exponent
    if (exponentStr != "1") {
      str += `^{${exponentStr}}`;
    }
  }

  return str || "1";
}
