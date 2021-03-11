import { v4 as uuid4 } from 'uuid';
import * as zod from 'zod';

import { TimestampField } from '../fields/Timestamp';

export const ActivityTagModel = zod.object({
  /** Activity UUID */
  uuid: zod.string().uuid().default(() => uuid4()),

  /** Related activity UUID */
  activity_uuid: zod.string().uuid().nonempty(),

  /** Related tag UUID */
  tag_uuid: zod.string().uuid().nonempty(),

  /** Activity description. Accepts markdown */
  description: zod.string(),

  /** Creation timestamp */
  created: TimestampField,
});

export type ActivityTag = zod.infer<typeof ActivityTagModel>;
