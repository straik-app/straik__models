import { v4 as uuid4 } from 'uuid';

import { Tag } from '../models';
import { RequiredKeys } from '../utils';
import { Fixtures as UserFixtures } from './User.fixtures';


export const ValuesValid: Required<Tag> = {
  uuid: 'e141f390-b41e-43b3-82d0-280ea664a0a8',
  user_uuid: UserFixtures.valid.DEFAULT.uuid,
  title: 'Task',
  slug: 'task',
  description: 'A task',
  created: '2021-03-05T21:13:59.057Z',
};

export const ValuesInvalid: RequiredKeys<Tag> = {
  uuid: 'not-a-uuid',
  user_uuid: 'not-a-uuid',
  title: 11,
  slug: 'Not a slug',
  description: 22,
  created: 'not-a-timestamp',
};

export const Values = {
  valid: ValuesValid,
  invalid: ValuesInvalid,
};

export const FixturesValid = {
  DEFAULT: Values.valid,
};

export const FixturesInvalid = {
  DEFAULT: Values.invalid,
};

export const Fixtures = {
  valid: FixturesValid,
  invalid: FixturesInvalid,
};

/**
 * Generates a tag
 *
 * @param overrides
 */
export const Generator = (overrides: Partial<Tag> = {}): Required<Tag> => ({
  uuid: uuid4(),
  user_uuid: uuid4(),
  title: uuid4(),
  slug: uuid4(),
  description: uuid4(),
  created: (new Date()).toISOString(),
  ...overrides,
});
