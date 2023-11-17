import React, {useState} from 'react';

function DayCard({forecast}) {
	return (
		<div className="day-card">
			<p>{forecast.date}</p>
			<img
				src={forecast.icon}
				alt={`Weather icon for ${forecast.iconPhrase}`}
			/>
			<p>{forecast.iconPhrase}</p>
			<p>
				<span className="max-temp">{forecast.maxTemperature}</span>/
				{forecast.minTemperature}
			</p>
		</div>
	);
}

export default DayCard;
