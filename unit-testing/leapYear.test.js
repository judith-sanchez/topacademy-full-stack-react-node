const isLeapYear = require('./leapYear');

test('Should identify 1600 as a leap year', () => {
	expect(isLeapYear(1600)).toBe(true);
});

test('Should identify 2000 as a leap year', () => {
	expect(isLeapYear(2000)).toBe(true);
});

test('Should identify 2400 as a leap year', () => {
	expect(isLeapYear(2400)).toBe(true);
});

test('Should identify 1700 as NOT a leap year', () => {
	expect(isLeapYear(1700)).toBe(false);
});

test('Should throw an error for non-numeric input', () => {
	expect(() => isLeapYear('not_a_year')).toThrow('Input must be a number');
});

test('Should identify 2020 as a leap year', () => {
	expect(isLeapYear(2020)).toBe(true);
});

test('Should identify 2100 as NOT a leap year', () => {
	expect(isLeapYear(2100)).toBe(false);
});

test('Should identify 2200 as NOT a leap year', () => {
	expect(isLeapYear(2200)).toBe(false);
});

test('Should identify 2300 as NOT a leap year', () => {
	expect(isLeapYear(2300)).toBe(false);
});

test('Should identify 2500 as NOT a leap year', () => {
	expect(isLeapYear(2500)).toBe(false);
});
