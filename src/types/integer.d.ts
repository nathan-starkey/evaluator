declare const __brand: unique symbol;

type SetOf<TSetName extends PropertyKey> = number & {
  [__brand]: { [x in TSetName]: 1 };
};

type SubsetOf<
  TSuperset extends SetOf<any>,
  TSetName extends PropertyKey,
> = SetOf<keyof TSuperset[typeof __brand] | TSetName>;

export type Integer = SetOf<"Integer">;

export type PositiveInteger = SubsetOf<Integer, "Positive">;

export type NegativeInteger = SubsetOf<Integer, "Negative">;

export type NonZeroInteger = SubsetOf<Integer, "NonZero">;

export type PositiveNonZeroInteger = SubsetOf<NonZeroInteger, "Positive">;

export type NegativeNonZeroInteger = SubsetOf<NonZeroInteger, "Negative">;

export type PrimeNumber = SubsetOf<PositiveNonZeroInteger, "Prime">;
