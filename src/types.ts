
export type ReadOnlyFields<T> = {
  [Key in keyof T]: true | undefined;
};

export const True = true as const;
