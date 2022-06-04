export const PATTERN_VOWELS = /[аоуеиіяюєї]/gi;

/**
 * Counts vowel sounds in the given word.
 * Returns a number of vowels.
 */
export function countVowels(word: string): number {
  const matches = word.match(PATTERN_VOWELS);
  if (matches == null) {
    return 0;
  }
  return matches.length;
}
