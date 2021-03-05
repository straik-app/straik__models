import { v4 as uuid4 } from 'uuid';
import * as zod from 'zod';

import { SlugField } from '../fields/Slug';
import { TimestampField } from '../fields/Timestamp';
import { True } from '../types';

export const SpaceResponseOmit = {};
export const SpaceCreateOmit = { created: True, slug: True, user_uuid: True };
export const SpaceUpdateOmit = { ...SpaceCreateOmit, uuid: True };

export const SpaceModel = zod.object({
  /** Space UUID */
  uuid: zod.string().uuid().default(() => uuid4()),

  /** Related user UUID */
  user_uuid: zod.string().uuid().nonempty(),

  /** Title */
  title: zod.string().nonempty(),

  /** Slug */
  slug: SlugField.nonempty(),

  /** Space description */
  description: zod.string(),

  /** Creation timestamp */
  created: TimestampField.optional(),
});

export const SpaceCreateModel = SpaceModel.omit(SpaceCreateOmit);

export const SpaceUpdateModel = SpaceModel.omit(SpaceUpdateOmit).partial();

export const SpaceResponseModel = SpaceModel.omit(SpaceResponseOmit);

export type Space = zod.infer<typeof SpaceModel>;
export type SpaceCreate = zod.infer<typeof SpaceCreateModel>;
export type SpaceUpdate = zod.infer<typeof SpaceUpdateModel>;
export type SpaceResponse = zod.infer<typeof SpaceResponseModel>;
