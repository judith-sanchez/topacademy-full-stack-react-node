// true if today is a weekday, and false if today is a weekend.

import {useEffect, useState} from 'react';

const useCurrentDay = () => {
	const [isWorkDay, setIsWorkDay] = useState(null);

	useEffect(() => {
		const today = new Date();
		const todayNum = today.getDay();

		if (todayNum <= 5 && todayNum >= 1) {
			setIsWorkDay(true);
		}

		if (todayNum === 0 || todayNum === 6) {
			setIsWorkDay(false);
		}
	}, []);

	return isWorkDay;
};

export default useCurrentDay;
