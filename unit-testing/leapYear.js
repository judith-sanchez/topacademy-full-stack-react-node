function isLeapYear(year) {
	if (typeof year !== 'number') {
		throw new Error('Input must be a number');
	}

	if (year % 4 === 0) {
		if (year % 100 === 0) {
			return year % 400 === 0;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

module.exports = isLeapYear;
