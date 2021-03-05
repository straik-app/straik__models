import { v4 as uuid4 } from 'uuid';

import { Activity } from '../models';
import { RequiredKeys } from '../utils';
import { Fixtures as SpaceFixtures } from './Space.fixtures';
import { Fixtures as UserFixtures } from './User.fixtures';


export const ValuesValid: Required<Activity> = {
  uuid: 'e141f390-b41e-43b3-82d0-280ea664a0a8',
  user_uuid: UserFixtures.valid.DEFAULT.uuid,
  space_uuid: SpaceFixtures.valid.DEFAULT.uuid,
  title: 'Vendetta contro Firenze',
  description: 'Tutti i miei piani & le mie azioni contro Firenze',
  begins: '2021-03-05T21:14:59.057Z',
  ends: '2021-03-05T21:14:59.057Z',
  created: '2021-03-05T21:14:59.057Z',
};

export const ValuesInvalid: RequiredKeys<Activity> = {
  uuid: 'not-a-uuid',
  user_uuid: 'not-a-uuid',
  space_uuid: 'not-a-uuid',
  title: 11,
  description: 22,
  begins: 'not-a-timestamp',
  ends: 'not-a-timestamp',
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
 * Generates an activity
 *
 * @param overrides
 */
export const Generator = (overrides: Partial<Activity> = {}): Required<Activity> => ({
  uuid: uuid4(),
  user_uuid: uuid4(),
  space_uuid: uuid4(),
  title: uuid4(),
  description: uuid4(),
  begins: (new Date()).toISOString(),
  ends: (new Date()).toISOString(),
  created: (new Date()).toISOString(),
  ...overrides,
});
