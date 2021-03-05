import { v4 as uuid4 } from 'uuid';

import { ActivityTag } from '../models';
import { RequiredKeys } from '../utils';
import { Fixtures as ActivityFixtures } from './Activity.fixtures';
import { Fixtures as TagFixtures } from './Tag.fixtures';


export const ValuesValid: Required<ActivityTag> = {
  uuid: 'e141f390-b41e-43b3-82d0-280ea664a0a8',
  activity_uuid: ActivityFixtures.valid.DEFAULT.uuid,
  tag_uuid: TagFixtures.valid.DEFAULT.uuid,
  description: 'Tutti i miei piani & le mie azioni contro Firenze',
  created: '2021-03-05T21:14:59.057Z',
};

export const ValuesInvalid: RequiredKeys<ActivityTag> = {
  uuid: 'not-a-uuid',
  activity_uuid: 'not-a-uuid',
  tag_uuid: 'not-a-uuid',
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
 * Generates an ActivityTag
 *
 * @param overrides
 */
export const Generator = (overrides: Partial<ActivityTag> = {}): Required<ActivityTag> => ({
  uuid: uuid4(),
  activity_uuid: uuid4(),
  tag_uuid: uuid4(),
  description: uuid4(),
  created: (new Date()).toISOString(),
  ...overrides,
});
