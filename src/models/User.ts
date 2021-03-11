import { v4 as uuid4 } from 'uuid';
import * as zod from 'zod';

import { TimestampField } from '../fields/Timestamp';
import { True } from '../types';

/**
 * User subscriptions
 */
export enum UserSubscriptions {
  FREE = 'FREE',
  PRO = 'PRO',
}

export const UserCreateOmitFields = {
  admin: True,
  subscription: True,
  verified: True,
  created: True,
};
export const UserUpdateOmitFields = { ...UserCreateOmitFields, uuid: True };
export const UserResponseOmitFields = { password: True, verified: True };

/**
 * User DB model
 */
export const UserModel = zod.object({
  /** User UUID */
  uuid: zod.string().uuid().default(() => uuid4()),

  /** User full name */
  full_name: zod.string().nonempty(),

  /** User preferred or short name */
  pref_name: zod.string().nonempty(),

  /** User email */
  email: zod.string().email(),

  /**
   * User password
   *
   * This value will be a salted hash in the backend
   * and missing in the frontend.
   */
  password: zod.string().optional(),

  /** Whether the user is an admin */
  admin: zod.boolean().default(() => false),

  /** Type of subscription */
  subscription: zod.nativeEnum(UserSubscriptions).default(() => UserSubscriptions.FREE),

  /** Whether the user verified their account */
  verified: zod.boolean().default(() => false),

  /** Creation timestamp */
  created: TimestampField,
});

export const UserCreateModel = UserModel.omit(UserCreateOmitFields).strip();
export const UserUpdateModel = UserModel.omit(UserUpdateOmitFields).strip().partial();

/**
 * User API response
 */
export const UserResponseModel = UserModel.omit(UserResponseOmitFields).strip();

export type User = zod.infer<typeof UserModel>;
export type UserCreate = zod.infer<typeof UserCreateModel>;
export type UserUpdate = zod.infer<typeof UserUpdateModel>;
export type UserResponse = zod.infer<typeof UserResponseModel>;
