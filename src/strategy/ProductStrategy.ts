import type { IStrategy } from "./IStrategy.js";
import { SumStrategy, SumTable } from "./SumStrategy.js";
import { Table } from "../Table.js";

type Factor = Symbol | SumTable;

export type ProductTable = Table<Factor, SumTable>;

export const ProductStrategy: IStrategy<Factor, SumTable> = {
  isKeyEqualTo,
  isValueEqualTo,
  isValueEmpty,
  getCombinedValue,
};

function isKeyEqualTo(key1: Factor, key2: Factor): boolean {
  if (key1 instanceof Table && key2 instanceof Table) {
    return key1.isEqualTo(key2);
  }

  return key1 == key2;
}

function isValueEqualTo(value1: SumTable, value2: SumTable): boolean {
  return value1.isEqualTo(value2);
}

function isValueEmpty(value: SumTable): boolean {
  return value.getItems().size == 0;
}

function getCombinedValue(value1: SumTable, value2: SumTable): SumTable {
  const combinedValue = new Table(SumStrategy);

  for (const [key, value] of value1.getItems()) {
    combinedValue.insert(key, value);
  }

  for (const [key, value] of value2.getItems()) {
    combinedValue.insert(key, value);
  }

  return combinedValue;
}
