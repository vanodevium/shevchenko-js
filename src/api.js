import InflectionCase, {INFLECTION_CASES} from './valueObjects/InflectionCase';
import Anthroponym from './valueObjects/Anthroponym';
import {GENDERS} from './valueObjects/Gender';
import {anthroponymInflector} from './bootstrap';

/**
 * Inflect the anthroponym.
 *
 * @param {object} anthroponym
 * @param {string} anthroponym.firstName
 * @param {string} anthroponym.lastName
 * @param {string} anthroponym.middleName
 * @param {string} anthroponym.gender
 * @param {string} inflectionCase
 */
function shevchenko(anthroponym, inflectionCase) {
  return anthroponymInflector.inflect(new Anthroponym(anthroponym), new InflectionCase(inflectionCase)).toObject();
}

/**
 * Inflect the anthroponym in nominative case.
 *
 * @param {object} anthroponym
 * @param {string} anthroponym.firstName
 * @param {string} anthroponym.lastName
 * @param {string} anthroponym.middleName
 * @param {string} anthroponym.gender
 */
export function inNominative(anthroponym) {
  return shevchenko(anthroponym, INFLECTION_CASES.NOMINATIVE);
}

/**
 * Inflect the anthroponym in genitive case.
 *
 * @param {object} anthroponym
 * @param {string} anthroponym.firstName
 * @param {string} anthroponym.lastName
 * @param {string} anthroponym.middleName
 * @param {string} anthroponym.gender
 */
export function inGenitive(anthroponym) {
  return shevchenko(anthroponym, INFLECTION_CASES.GENITIVE);
}

/**
 * Inflect the anthroponym in dative case.
 *
 * @param {object} anthroponym
 * @param {string} anthroponym.firstName
 * @param {string} anthroponym.lastName
 * @param {string} anthroponym.middleName
 * @param {string} anthroponym.gender
 */
export function inDative(anthroponym) {
  return shevchenko(anthroponym, INFLECTION_CASES.DATIVE);
}

/**
 * Inflect the anthroponym in accusative case.
 *
 * @param {object} anthroponym
 * @param {string} anthroponym.firstName
 * @param {string} anthroponym.lastName
 * @param {string} anthroponym.middleName
 * @param {string} anthroponym.gender
 */
export function inAccusative(anthroponym) {
  return shevchenko(anthroponym, INFLECTION_CASES.ACCUSATIVE);
}

/**
 * Inflect the anthroponym in ablative case.
 *
 * @param {object} anthroponym
 * @param {string} anthroponym.firstName
 * @param {string} anthroponym.lastName
 * @param {string} anthroponym.middleName
 * @param {string} anthroponym.gender
 */
export function inAblative(anthroponym) {
  return shevchenko(anthroponym, INFLECTION_CASES.ABLATIVE);
}

/**
 * Inflect the anthroponym in locative case.
 *
 * @param {object} anthroponym
 * @param {string} anthroponym.firstName
 * @param {string} anthroponym.lastName
 * @param {string} anthroponym.middleName
 * @param {string} anthroponym.gender
 */
export function inLocative(anthroponym) {
  return shevchenko(anthroponym, INFLECTION_CASES.LOCATIVE);
}

/**
 * Inflect the anthroponym in vocative case.
 *
 * @param {object} anthroponym
 * @param {string} anthroponym.firstName
 * @param {string} anthroponym.lastName
 * @param {string} anthroponym.middleName
 * @param {string} anthroponym.gender
 */
export function inVocative(anthroponym) {
  return shevchenko(anthroponym, INFLECTION_CASES.VOCATIVE);
}

/**
 * Inflect the anthroponym in all cases.
 *
 * @param {object} anthroponym
 * @param {string} anthroponym.firstName
 * @param {string} anthroponym.lastName
 * @param {string} anthroponym.middleName
 * @param {string} anthroponym.gender
 */
export function inAll(anthroponym) {
  return Object.values(INFLECTION_CASES).reduce((results, inflectionCase) => {
    results[inflectionCase] = shevchenko(anthroponym, inflectionCase);
    return results;
  }, {});
}

export {GENDERS, INFLECTION_CASES};

shevchenko.inNominative = inNominative;
shevchenko.inGenitive = inGenitive;
shevchenko.inDative = inDative;
shevchenko.inAccusative = inAccusative;
shevchenko.inAblative = inAblative;
shevchenko.inLocative = inLocative;
shevchenko.inVocative = inVocative;
shevchenko.inAll = inAll;
shevchenko.GENDERS = GENDERS;
shevchenko.INFLECTION_CASES = INFLECTION_CASES;

export default shevchenko;
