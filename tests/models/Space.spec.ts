import { SpaceFixtures, SpaceGenerator } from '../../src/fixtures';
import { SpaceModel } from '../../src/models';
import { ModelTest } from '../mixins';

describe('models.Space', () => {
  ModelTest(SpaceModel, SpaceFixtures, SpaceGenerator);
});
