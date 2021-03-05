import { TagFixtures, TagGenerator } from '../../src/fixtures';
import { TagModel } from '../../src/models';
import { ModelTest } from '../mixins';

describe('models.Tag', () => {
  ModelTest(TagModel, TagFixtures, TagGenerator);
});
