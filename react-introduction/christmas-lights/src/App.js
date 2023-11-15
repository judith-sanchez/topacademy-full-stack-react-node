import React, {useState} from 'react';
import Light from './Light';
import './styles.css';

const lightColors = [
	'red',
	'yellow',
	'blue',
	'green',
	'red',
	'yellow',
	'blue',
	'green',
];

export default function App() {
	const [lightsOn, setLightsOn] = useState(true);

	const toggleLights = () => {
		setLightsOn(!lightsOn);
	};

	return (
		<main>
			<section className="lights">
				{lightColors.map((color, index) => (
					<Light key={index} color={lightsOn ? color : 'off'} />
				))}
			</section>
			<section className="buttons">
				<button onClick={toggleLights}>
					{lightsOn ? 'Turn off' : 'Turn on'}
				</button>
			</section>
		</main>
	);
}
