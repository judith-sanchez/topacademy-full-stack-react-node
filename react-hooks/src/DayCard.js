import React, {useState} from 'react';

function DayCard({forecast}) {
	const formatDateString = dateString => {
		const date = new Date(dateString);
		const day = date.getDate();
		const month = date.getMonth() + 1;
		return `${day}/${month}`;
	};

	return (
		<div className="day-card">
			<p className="date">{formatDateString(forecast.date)}</p>
			<img
				src={forecast.icon}
				alt={`Weather icon for ${forecast.iconPhrase}`}
			/>
			<p className="icon-phrase">{forecast.iconPhrase}</p>
			<p className="temperature">
				<span className="max-temp">{forecast.maxTemperature}</span>/
				{forecast.minTemperature}
			</p>
		</div>
	);
}

export default DayCard;
