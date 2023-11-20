import React, {useState, useEffect} from 'react';
import WeatherForecast from '../src/weather-forecast';
import DayCard from './DayCard.js';
import useCurrentPosition from './useCurrentPosition';
import './App.css';

const API_KEY = 'uVVIZGF8tdCcLqegcfsyNfpv4xMdT7Qp';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [fiveDaysForecast, setFiveDaysForecast] = useState(null);
	const [location, setLocation] = useState(null);
	const {position, success, error} = useCurrentPosition(); // Use the custom hook

	useEffect(() => {
		if (success) {
			getFiveDaysForecastByLocation();
		}
	}, [success]);

	const handleInputChange = event => {
		setInputValue(event.target.value);
	};

	const getFiveDaysForecast = async () => {
		const newForecast = new WeatherForecast(inputValue, API_KEY);
		await newForecast.getCityInfo(inputValue, API_KEY);
		setLocation(newForecast.cityInfo);
		await newForecast.getFiveDaysForecast(API_KEY);
		setFiveDaysForecast(newForecast.fiveDaysForecast);
	};

	const getFiveDaysForecastByLocation = async () => {
		const {coords} = position;
		const newForecast = new WeatherForecast(
			`${coords.latitude},${coords.longitude}`,
			API_KEY,
		);
		await newForecast.getCityInfo(
			`${coords.latitude},${coords.longitude}`,
			API_KEY,
		);
		setLocation(newForecast.cityInfo);
		await newForecast.getFiveDaysForecast(API_KEY);
		setFiveDaysForecast(newForecast.fiveDaysForecast);
	};

	const handleLocationClick = () => {
		if (!success && !error) {
			// Request location only if not already requested or rejected
			navigator.geolocation.getCurrentPosition(
				position => {
					console.log('Location:', position);
				},
				err => {
					console.error('Error getting location:', err);
				},
			);
		}
	};

	const isButtonDisabled = inputValue.trim() === '';

	return (
		<div className="app">
			<div className="hourglass-animation">
				{/* {!success && !error && <div className="time-5"></div>} */}
			</div>
			{/* <input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					placeholder="Type something..."
				/>
				<button onClick={getFiveDaysForecast} disabled={isButtonDisabled}>
					Search
				</button>
				<button onClick={handleLocationClick} disabled={success}>
					Get Location
				</button> */}
			<h1 className="intro">How's the weather?</h1>
			{success && (
				<h3 className="location">
					{location && `${location.name}, ${location.country}`}
				</h3>
			)}
			<div className="forecast">
				{fiveDaysForecast &&
					fiveDaysForecast.length > 0 &&
					fiveDaysForecast.map((forecast, index) => (
						<DayCard forecast={forecast} key={index} />
					))}
			</div>
			{error && <div>Error: {error.message}</div>}
		</div>
	);
}

export default App;

// import React, {useState} from 'react';
// import WeatherForecast from '../src/weather-forecast';
// import DayCard from './DayCard.js';
// // const API_KEY = 'bm8PaWeGGjegMuvPw5xVL1PYPSjhooXf';
// const API_KEY = 'uVVIZGF8tdCcLqegcfsyNfpv4xMdT7Qp';
// // import MockData from './mock-data.json';

// function App() {
// 	const [inputValue, setInputValue] = useState('');
// 	const [fiveDaysForecast, setFiveDaysForecast] = useState(null);
// 	const [location, setLocation] = useState(null);

// 	const handleInputChange = event => {
// 		setInputValue(event.target.value);
// 	};

// 	const getFiveDaysForecast = async () => {
// 		const newForecast = new WeatherForecast(inputValue, API_KEY);
// 		await newForecast.getCityInfo(inputValue, API_KEY);
// 		setLocation(newForecast.cityInfo);
// 		await newForecast.getFiveDaysForecast(API_KEY);
// 		setFiveDaysForecast(newForecast.fiveDaysForecast);
// 	};

// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				value={inputValue}
// 				onChange={handleInputChange}
// 				placeholder="Type something..."
// 			/>
// 			<button onClick={getFiveDaysForecast}>Search</button>
// 			<h1>How's the weather?</h1>
// 			<h3>{location && `${location.name}, ${location.country}`}</h3>
// 			{fiveDaysForecast &&
// 				fiveDaysForecast.length > 0 &&
// 				fiveDaysForecast.map((forecast, index) => (
// 					<DayCard forecast={forecast} key={index} />
// 				))}
// 		</div>
// 	);
// }

// export default App;
