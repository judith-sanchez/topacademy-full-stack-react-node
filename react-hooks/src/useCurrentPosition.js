import {useState, useEffect} from 'react';

const useCurrentPosition = () => {
	const [position, setPosition] = useState(undefined);
	const [success, setSuccess] = useState(undefined);
	const [error, setError] = useState(undefined);

	useEffect(() => {
		// pos = position
		const successCallback = pos => {
			setPosition(pos);
			setSuccess(true);
		};

		const errorCallback = err => {
			setError(err);
			setSuccess(false);
		};

		const options = {
			enableHighAccuracy: true,
			maximumAge: 0,
		};

		// Call the geolocation browser's API to get the current position

		// 		{
		//   coords: {
		//     latitude: 37.7749,
		//     longitude: -122.4194,
		//     altitude: null,
		//     accuracy: 20,
		//     altitudeAccuracy: null,
		//     heading: null,
		//     speed: null
		//   },
		//   timestamp: 1637537484000
		// }

		navigator.geolocation.getCurrentPosition(
			successCallback,
			errorCallback,
			options,
		);
	}, []); // The empty dependency array ensures this effect runs once after the initial render

	return {position, success, error};
};

export default useCurrentPosition;
