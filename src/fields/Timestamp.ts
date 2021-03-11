import * as zod from 'zod';

/**
 * A Timestamp
 */
export type Timestamp = string;

/**
 * Timestamp guard
 *
 * @param value
 */
export const isTimestamp = (value: unknown): value is Timestamp => {
  if (typeof value !== 'string') {
    return false;
  }

  const parsed = new Date(value);
  const unix = parsed.getTime();

  return !Number.isNaN(unix);
};

/**
 * Timestamp Field
 */
export const TimestampField = zod.any()
  .transform((value: unknown): string => {
    if (value instanceof Date) {
      return value.toISOString();
    }

    return String(value);
  })
  .refine(isTimestamp, 'Invalid timestamp') as unknown as zod.ZodTransformer<zod.ZodString, zod.ZodString>;
