export interface IExpression {
  isEqualTo(other: IExpression): boolean;

  normalise(): IExpression;
}

export interface ISum extends IExpression {
  get summands(): readonly ISummand[];
}

export interface ISummand extends IExpression {
  get coefficient(): IConstant;
  get product(): IExpression;
}

export interface IProduct extends ISummand {
  get factors(): readonly IFactor[];
}

export interface IFactor extends IProduct {
  get base(): ISum | IVariable | IConstant;
  get exponent(): IExpression;
}

export interface IVariable extends IFactor {
  get name(): string;
}

export interface IConstant extends ISummand {
  get numerator(): number;
  get denominator(): number;
}
