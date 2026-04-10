export class Factor {
  public canCombineWith(other: Factor): boolean {
    return this == other; // TODO: implement
  }

  public combineWith(other: Factor): Factor {
    return this; // TODO: implement
  }
}
