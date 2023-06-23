export interface RequiredRule {
  value?: true;
  message?: string;
}

export interface MinLengthRule {
  value?: number;
  message?: string;
}

export interface EmailPatternRule {
  message?: string;
  value?: RegExp;
}
