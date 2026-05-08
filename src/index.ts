import { ProductStrategy } from "./strategy/ProductStrategy.js";
import { SumStrategy } from "./strategy/SumStrategy.js";
import { Table } from "./Table.js";
import { stringifySumTable } from "./utils.js";

// Numbers:
const one_term = new Table(ProductStrategy);
const one = new Table(SumStrategy);
const two = new Table(SumStrategy);
const minusOne = new Table(SumStrategy);

one.insert(one_term, 1);
two.insert(one_term, 2);
minusOne.insert(one_term, -1);

// Variables:
const x = Symbol("x");
const y = Symbol("y");

// Expression:
const radicand = new Table(ProductStrategy);
const expr = new Table(SumStrategy);

radicand.insert(x, two);
radicand.insert(y, one);
radicand.insert(y, minusOne);
radicand.insert(y, minusOne);

expr.insert(radicand, 3);

console.log(stringifySumTable(expr));
