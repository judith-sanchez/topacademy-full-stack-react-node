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
	const {position, success, error} = useCurrentPosition();

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

	return (
		<div className="app">
			<div className="hourglass-animation">
				{!success && !error && <div className="time-5"></div>}
			</div>

			{!location && success === false && (
				<div className="search-location">
					{success === false && (
						<>
							<input
								type="text"
								value={inputValue}
								onChange={handleInputChange}
								placeholder="Type city and country name"
							/>
							<button onClick={getFiveDaysForecast}>Search</button>
						</>
					)}
				</div>
			)}

			{location && (
				<div className="forecast-screen">
					<h1 className="intro">How's the weather?</h1>
					<h3 className="location">
						{location && `${location?.name}, ${location?.country}`}
					</h3>
					<div className="forecast">
						{fiveDaysForecast &&
							fiveDaysForecast.length > 0 &&
							fiveDaysForecast.map((forecast, index) => (
								<DayCard forecast={forecast} key={index} />
							))}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
