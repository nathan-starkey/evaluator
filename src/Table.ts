import { IStrategy } from "./strategy/IStrategy.js";

export class Table<TKey, TValue> {
  private strategy: IStrategy<TKey, TValue>;
  private items: Map<TKey, TValue>;

  constructor(strategy: IStrategy<TKey, TValue>) {
    this.strategy = strategy;
    this.items = new Map();
  }

  public getItems(): ReadonlyMap<TKey, TValue> {
    return this.items;
  }

  public match(key: TKey): TKey | null {
    for (const existingKey of this.items.keys()) {
      if (this.strategy.isKeyEqualTo(key, existingKey)) {
        return existingKey;
      }
    }

    return null;
  }

  public insert(key: TKey, value: TValue): void {
    if (this.strategy.isValueEmpty(value)) {
      return;
    }

    const existingKey = this.match(key);

    if (existingKey === null) {
      this.items.set(key, value);
      return;
    }

    const existingValue = this.items.get(existingKey)!;
    const combinedValue = this.strategy.getCombinedValue(value, existingValue);

    if (this.strategy.isValueEmpty(combinedValue)) {
      this.items.delete(existingKey);
      return;
    }

    this.items.set(existingKey, combinedValue);
  }

  public isEqualTo(other: Table<TKey, TValue>): boolean {
    if (this.items.size != other.items.size) {
      return false;
    }

    // TODO: Use an optimised algorithm for this check.
    outer: for (const [key, value] of this.items) {
      for (const [otherKey, otherValue] of other.items) {
        if (
          this.strategy.isKeyEqualTo(key, otherKey) &&
          this.strategy.isValueEqualTo(value, otherValue)
        ) {
          continue outer;
        }
      }

      return false;
    }

    return true;
  }
}
