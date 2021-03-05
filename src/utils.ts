
export type RequiredKeys<T> = {
  [K in keyof Required<T>]: unknown;
};

export type PartialKeys<T> = {
  [K in keyof T]?: unknown
};

/**
 * Overrides an instance with the given overrides
 *
 * @param instance
 * @param overrides
 */
export const override = <Instance, Overrides extends PartialKeys<Instance>>(instance: Instance, overrides: Overrides): Instance & Overrides => ({
  ...instance,
  ...overrides,
});

/**
 * Omits the keys from the given instance
 *
 * @param instance
 * @param keys
 */
export const omit = <Instance, Key extends keyof Instance>(instance: Instance, keys: Key[]) => {
  type OmittedKeys = typeof keys[number];
  const entries = Object.entries(instance).filter(([key]) => !keys.includes(key as Key));
  const result = Object.fromEntries(entries) as Omit<Instance, OmittedKeys>;

  return result;
};
