import test from 'ava';
import 'babel-core/register';

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

test('ensureOxfordCommas does not throw when no Oxford comma needed', t => {
  t.notThrows(() => ensureOxfordCommas(singleCommaSentence));
});

test('ensureOxfordCommas does not throw when not missing Oxford comma', t => {
  t.notThrows(() => ensureOxfordCommas(oxfordCommaSimpleSentenceAnd));
});

test('ensureOxfordCommas throws when missing single Oxford comma', t => {
  t.throws(() => ensureOxfordCommas(noOxfordCommaSimpleSentenceAnd), 'Missing one or more Oxford commas!');
});

test('ensureOxfordCommas throws when missing multiple Oxford commas', t => {
  t.throws(() => ensureOxfordCommas(noOxfordCommaParagraph), 'Missing one or more Oxford commas!');
});

//
// isMissingOxfordCommas
//

test('isMissingOxfordCommas returns false when no Oxford commas needed', t => {
  t.false(isMissingOxfordCommas(singleCommaSentence));
});

test('isMissingOxfordCommas returns false when not missing Oxford comma', t => {
  t.false(isMissingOxfordCommas(oxfordCommaSimpleSentenceAnd));
});

test('isMissingOxfordCommas returns true when missing Oxford comma', t => {
  t.true(isMissingOxfordCommas(noOxfordCommaSimpleSentenceAnd));
});

test('isMissingOxfordCommas returns true when missing multiple Oxford commas', t => {
  t.true(isMissingOxfordCommas(noOxfordCommaParagraph));
});
