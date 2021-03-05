import { UserFixtures, UserGenerator } from '../../src/fixtures';
import { UserModel } from '../../src/models';
import { ModelTest } from '../mixins';

describe('models.User', () => {
  ModelTest(UserModel, UserFixtures, UserGenerator);
});
