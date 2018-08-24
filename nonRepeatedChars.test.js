import noRepeat from './nonRepeatedChars';

test('Reports the first non-duplicated char', () => {
    expect(noRepeat('hejheja')).toBe('a');
});
