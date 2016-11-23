import { ensureOxfordCommas, isMissingOxfordCommas } from '../src/lib/';

//
// Test data
//

const noCommaSentence = 'This is a sentence.';
const singleCommaSentence = 'This is, a test.';

const oxfordCommaSimpleSentenceAnd = 'Please choose between red, green, and blue.';
const noOxfordCommaSimpleSentenceAnd = 'Please choose between red, green and blue.';

const noOxfordCommaSimpleSentenceOr = 'Please choose one of red, green or blue.';

const noOxfordCommaParagraph = `${noCommaSentence} ${noOxfordCommaSimpleSentenceAnd} ${noCommaSentence} ${noOxfordCommaSimpleSentenceOr} ${noCommaSentence}`;

//
// ensureOxfordCommas
//

test('ensureOxfordCommas does not throw when no Oxford comma needed', () => {
  expect(() => ensureOxfordCommas(singleCommaSentence)).not.toThrow();
});

test('ensureOxfordCommas does not throw when not missing Oxford comma', () => {
  expect(() => ensureOxfordCommas(oxfordCommaSimpleSentenceAnd)).not.toThrow();
});

test('ensureOxfordCommas throws when missing single Oxford comma', () => {
  expect(() => ensureOxfordCommas(noOxfordCommaSimpleSentenceAnd)).toThrowError('Missing one or more Oxford commas!');
});

test('ensureOxfordCommas throws when missing multiple Oxford commas', () => {
  expect(() => ensureOxfordCommas(noOxfordCommaParagraph)).toThrowError('Missing one or more Oxford commas!');
});

//
// isMissingOxfordCommas
//

test('isMissingOxfordCommas returns false when no Oxford commas needed', () => {
  expect(isMissingOxfordCommas(singleCommaSentence)).toBe(false);
});

test('isMissingOxfordCommas returns false when not missing Oxford comma', () => {
  expect(isMissingOxfordCommas(oxfordCommaSimpleSentenceAnd)).toBe(false);
});

test('isMissingOxfordCommas returns true when missing Oxford comma', () => {
  expect(isMissingOxfordCommas(noOxfordCommaSimpleSentenceAnd)).toBe(true);
});

test('isMissingOxfordCommas returns true when missing multiple Oxford commas', () => {
  expect(isMissingOxfordCommas(noOxfordCommaParagraph)).toBe(true);
});
