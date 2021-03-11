import { ActivityFixtures, ActivityGenerator } from '../../src/fixtures';
import { ActivityModel } from '../../src/models';
import { ModelTest } from '../mixins';

describe('models.Activity', () => {
  ModelTest(ActivityModel, ActivityFixtures, ActivityGenerator);
});
