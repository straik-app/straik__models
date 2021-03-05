import { v4 as uuid4 } from 'uuid';
import * as zod from 'zod';

import { SlugField } from '../fields/Slug';
import { TimestampField } from '../fields/Timestamp';
import { True } from '../types';

export const TagResponseOmitFields = {};
export const TagCreateOmitFields = { user_uuid: True, slug: True, created: True };
export const TagUpdateOmitFields = { ...TagCreateOmitFields, uuid: True };

export const TagModel = zod.object({
  /** Tag UUID */
  uuid: zod.string().uuid().default(() => uuid4()),

  /** Related user UUID */
  user_uuid: zod.string().uuid().nonempty(),

  /** Title */
  title: zod.string().nonempty(),

  /** Slug */
  slug: SlugField.nonempty(),

  /** Tag description */
  description: zod.string(),

  /** Creation timestamp */
  created: TimestampField,
});

export const TagCreateModel = TagModel.omit(TagCreateOmitFields);
export const TagUpdateModel = TagModel.omit(TagUpdateOmitFields).partial();
export const TagResponseModel = TagModel.omit(TagResponseOmitFields);

export type Tag = zod.infer<typeof TagModel>;
export type TagCreate = zod.infer<typeof TagCreateModel>;
export type TagUpdate = zod.infer<typeof TagUpdateModel>;
export type TagResponse = zod.infer<typeof TagResponseModel>;
