
export * from './Activity';
export * from './ActivityTag';
export * from './Space';
export * from './Tag';
export * from './User';

export interface Validator<T> {
  parse: (values: unknown) => T
}
