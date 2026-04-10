export class Term {
  constructor() {}

  public canCombineWith(other: Term): boolean {
    return this == other; // TODO: implement
  }

  public combineWith(other: Term): Term {
    return this; // TODO: implement
  }
}
