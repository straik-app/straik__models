import * as zod from 'zod';

/**
 * Slug type
 */
export type Slug = string;

/**
 * Slug type guard
 *
 * @param value
 */
export const isSlug = (value: unknown): value is Slug => {
  if (typeof value !== 'string') {
    return false;
  }

  const regex = /^[a-z0-9-]+$/;

  return Boolean(value.match(regex));
};

/**
 * Slug field
 */
export const SlugField = zod.string().refine(isSlug, 'Invalid slug');
