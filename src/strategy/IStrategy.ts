export interface IStrategy<TKey, TValue> {
  isKeyEqualTo(key1: TKey, key2: TKey): boolean;

  isValueEqualTo(value1: TValue, value2: TValue): boolean;

  isValueEmpty(value: TValue): boolean;

  getCombinedValue(value1: TValue, value2: TValue): TValue;
}
