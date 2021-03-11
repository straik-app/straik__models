import { v4 as uuid4 } from 'uuid';
import * as zod from 'zod';

import { TimestampField } from '../fields/Timestamp';
import { True } from '../types';

export const ActivityResponseOmit = {};
export const ActivityCreateOmit = { created: True, user_uuid: True };
export const ActivityUpdateOmit = { ...ActivityCreateOmit, uuid: True };


export const ActivityModel = zod.object({
  /** Activity UUID */
  uuid: zod.string().uuid().default(() => uuid4()),

  /** Related user UUID */
  user_uuid: zod.string().uuid().nonempty(),

  /** Related space UUID */
  space_uuid: zod.string().uuid().nonempty(),

  /** Title */
  title: zod.string().nonempty(),

  /** Activity description. Accepts markdown */
  description: zod.string(),

  /** When the activity begins */
  begins: TimestampField,

  /** When the activity ends */
  ends: TimestampField,

  /** Creation timestamp */
  created: TimestampField,
});

export const ActivityResponseModel = ActivityModel.omit(ActivityResponseOmit);

export const ActivityCreateModel = ActivityModel.omit(ActivityCreateOmit);

export const ActivitUpdateModel = ActivityCreateModel.omit(ActivityUpdateOmit).partial();

export type Activity = zod.infer<typeof ActivityModel>;
export type ActivityCreate = zod.infer<typeof ActivityCreateModel>;
export type ActivityUpdate = zod.infer<typeof ActivitUpdateModel>;
export type ActivityResponse = zod.infer<typeof ActivityResponseModel>;
