import { v4 as uuid4 } from 'uuid';

import { User, UserSubscriptions } from '../models';
import { RequiredKeys, override } from '../utils';


export const ValuesValid: Required<User> = {
  uuid: 'e141f390-b41e-43b3-82d0-280ea664a0a8',
  full_name: 'Dante Alighieri',
  pref_name: 'Dante',
  email: 'dante.alighieri@dipasqualew.com',
  password: 'Be4trice',
  admin: false,
  subscription: UserSubscriptions.PRO, // Dante deserves a gratis PRO account!
  verified: true,
  created: '2021-03-05T21:12:59.057Z',
};

export const ValuesInvalid: RequiredKeys<User> = {
  uuid: 'not-a-uuid',
  full_name: 33,
  pref_name: 44,
  email: 'not-an-email',
  password: 55,
  admin: NaN,
  subscription: 'not-a-subscription',
  verified: NaN,
  created: 'not-a-timestamp',
};

export const Values = {
  valid: ValuesValid,
  invalid: ValuesInvalid,
};

export const FixturesValid = {
  DEFAULT: Values.valid,
  ADMIN: override(Values.valid, { uuid: '74268570-5b67-4bc8-8385-46f6e02a8fe7', admin: true }),
  PRO_USER: override(Values.valid, { uuid: '4597d7c7-1d39-4a5e-9d6a-3ea2def0bf4c', subscription: UserSubscriptions.PRO }),
  FREE_USER: override(Values.valid, { uuid: '916d8792-8968-4cd6-ba5f-e3c4a6694c02', subscription: UserSubscriptions.FREE }),
};

export const FixturesInvalid = {
  DEFAULT: Values.invalid,
};

export const Fixtures = {
  valid: FixturesValid,
  invalid: FixturesInvalid,
};

/**
 * Generates a user
 *
 * @param overrides
 */
export const Generator = (overrides: Partial<User> = {}): Required<User> => ({
  uuid: uuid4(),
  full_name: uuid4(),
  pref_name: uuid4(),
  email: `${uuid4()}@dipasqualew.com`,
  password: uuid4(),
  admin: false,
  subscription: UserSubscriptions.FREE,
  verified: true,
  created: (new Date()).toISOString(),
  ...overrides,
});
