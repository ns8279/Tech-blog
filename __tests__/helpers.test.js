const { format_date, format_plural } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() returns plural and singular according to the number', () => {
    const plural = format_plural('tiger', 2);
    const single = format_plural('lion', 1);

    expect(plural).toBe('tigers');
    expect(single).toBe('lion');
});

