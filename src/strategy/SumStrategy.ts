import type { IStrategy } from "./IStrategy.js";
import type { ProductTable } from "./ProductStrategy.js";
import type { Table } from "../Table.js";

export type SumTable = Table<ProductTable, number>;

export const SumStrategy: IStrategy<ProductTable, number> = {
  isKeyEqualTo,
  isValueEqualTo,
  isValueEmpty,
  getCombinedValue,
};

function isKeyEqualTo(key1: ProductTable, key2: ProductTable): boolean {
  return key1.isEqualTo(key2);
}

function isValueEqualTo(value1: number, value2: number): boolean {
  return value1 == value2;
}

function isValueEmpty(value: number): boolean {
  return value == 0;
}

function getCombinedValue(value1: number, value2: number): number {
  return value1 + value2;
}
