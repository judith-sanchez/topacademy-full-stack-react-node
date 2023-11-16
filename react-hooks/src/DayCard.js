import React, {useState} from 'react';

function DayCard({forecast}) {
	return (
		<div>
			<p>{forecast.date}</p>
			<p>{forecast.iconPhrase}</p>
			<img
				src={forecast.icon}
				alt={`Weather icon for ${forecast.iconPhrase}`}
			/>
			<p>
				{forecast.maxTemperature}/{forecast.minTemperature}
			</p>
		</div>
	);
}

export default DayCard;
