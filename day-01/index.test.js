const { reverseSentence, titleCase, oddishOrEvenish } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });

    it('should capitalize first letter of each word, lowercase the rest', () => {
      expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });

    it('returns oddish or evenish based on all nums added together', () => {
      expect(oddishOrEvenish('121')).toEqual('Evenish');
      expect(oddishOrEvenish('41')).toEqual('Oddish');
    });
  });

});
