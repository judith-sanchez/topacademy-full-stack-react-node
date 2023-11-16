// const API_KEY = 'bm8PaWeGGjegMuvPw5xVL1PYPSjhooXf';

class WeatherForecast {
	baseUrl = 'http://dataservice.accuweather.com/';
	citySearchUrl = 'locations/v1/cities/search';
	fiveDaysForecastUrl = 'forecasts/v1/daily/5day/';

	constructor(query, apiKey) {
		this.cityInfo = null;
		this.cityId = null;
		this.fiveDaysForecast = null;
		this.initialQuery = query;
	}

	async fetch(url) {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		return response.json();
	}

	async getCityInfo(city, apiKey) {
		try {
			const url = `${this.baseUrl}${this.citySearchUrl}?apikey=${apiKey}&q=${city}`;
			const jsonData = await this.fetch(url);

			const info = jsonData[0];
			this.cityInfo = {
				id: info.Key,
				name: info.LocalizedName,
				administrativeArea: info.AdministrativeArea.LocalizedName,
				country: info.Country.LocalizedName,
			};

			this.cityId = this.cityInfo.id;
			return this.cityInfo;
		} catch (error) {
			console.error('Error fetching city info:', error);
		}
	}

	async getFiveDaysForecast(apiKey) {
		try {
			if (!this.cityInfo) {
				await this.getCityInfo(this.initialQuery, apiKey);
			}

			const url = `${this.baseUrl}${this.fiveDaysForecastUrl}${this.cityId}?apikey=${apiKey}&metric=true`;
			const jsonData = await this.fetch(url);

			this.fiveDaysForecast = jsonData.DailyForecasts.map(day => {
				const icon = day.Day.Icon.toString().padStart(2, '0');

				return {
					date: day.Date,
					icon: `https://developer.accuweather.com/sites/default/files/${icon}-s.png`,
					iconPhrase: day.Day.IconPhrase,
					temperatureUnit: day.Temperature.Maximum.Unit,
					maxTemperature: day.Temperature.Maximum.Value,
					minTemperature: day.Temperature.Minimum.Value,
				};
			});

			return this.fiveDaysForecast;
		} catch (error) {
			console.error('Error fetching forecast:', error);
		}
	}
}

// const caracasWeatherForecast = new WeatherForecast(
// 	'caracas venezuela',
// 	API_KEY,
// );

export default WeatherForecast;
