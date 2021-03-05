import zod from 'zod';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Shape = Record<string, any>;
export type Model<T extends Shape> = zod.ZodObject<T, 'passthrough', zod.ZodTypeAny>;
export type FixtureSection = Record<string, unknown>;
export type Fixtures = {
  valid: FixtureSection,
  invalid: FixtureSection,
};
export type Generator<T = Record<string, unknown>> = (overrides?: Partial<T>) => T;

/**
 * Performs validation tests against valid fixtures
 *
 * @param model
 * @param validFixtures
 */
export const IsValidTest = <T extends Shape>(model: Model<T>, validFixtures: FixtureSection) => {
  describe('validates', () => {
    Object.entries(validFixtures).forEach(([key, fixture]) => {
      it(key, () => {
        expect(model.parse(fixture)).toMatchSnapshot();
      });
    });
  });
};

/**
 * Performs validation tests against invalid fixtures
 *
 * @param model
 * @param invalidFixtures
 */
export const IsInvalidTest = <T extends Shape>(model: Model<T>, invalidFixtures: FixtureSection) => {
  describe('invalidates', () => {
    Object.entries(invalidFixtures).forEach(([key, fixture]) => {
      it(key, () => {
        expect(() => model.parse(fixture)).toThrowErrorMatchingSnapshot();
      });
    });
  });
};

/**
 * Performs validation tests against a generator
 *
 * @param model
 * @param generator
 */
export const GeneratorTest = <T extends Shape>(model: Model<T>, generator: Generator) => {
  describe('generator', () => {
    it('validates', () => {
      const generated = generator();

      // It will throw an exception if it doesn't validate
      model.parse(generated);
    });
  });
};

/**
 * Performs model associated tests
 *
 * @param model
 * @param fixtures
 * @param generator
 */
export const ModelTest = <T extends Shape>(model: Model<T>, fixtures: Fixtures, generator: Generator) => {
  IsValidTest(model, fixtures.valid);
  IsInvalidTest(model, fixtures.invalid);
  GeneratorTest(model, generator);
};
