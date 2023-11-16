import React, {useState} from 'react';
import WeatherForecast from '../src/weather-forecast';
import DayCard from './DayCard.js';
const API_KEY = 'bm8PaWeGGjegMuvPw5xVL1PYPSjhooXf';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [fiveDaysForecast, setFiveDaysForecast] = useState(null);
	const [location, setLocation] = useState(null);

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

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Type something..."
			/>
			<button onClick={getFiveDaysForecast}>Search</button>
			<h1>How's the weather?</h1>
			<h3>{location && `${location.name}, ${location.country}`}</h3>
			{fiveDaysForecast &&
				fiveDaysForecast.length > 0 &&
				fiveDaysForecast.map((forecast, index) => (
					<DayCard forecast={forecast} key={index} />
				))}
		</div>
	);
}

export default App;
