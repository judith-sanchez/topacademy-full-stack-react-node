import React, {useState} from 'react';
import styled from 'styled-components';
import Tile from './Tile';

const AppContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const ButtonContainer = styled.div`
	display: flex;
	margin: 10px;
`;

const Button = styled.button`
	margin: 0 5px;
`;

const App = () => {
	const [count, setCount] = useState(0);
	const [tiles, setTiles] = useState([]);

	const handleAddTile = () => {
		if (count < 9) {
			setCount(prevCount => prevCount + 1);
			setTiles(prevTiles => [...prevTiles, count]);
		}
	};

	const handleRemoveTile = () => {
		if (count > 0) {
			setCount(count - 1);
			setTiles(tiles.slice(0, -1));
		}
	};

	return (
		<AppContainer>
			<h2>Color Tiles App</h2>
			<ButtonContainer>
				<Button onClick={handleAddTile} disabled={count === 9}>
					+
				</Button>
				<span>{count}</span>
				<Button onClick={handleRemoveTile} disabled={count === 0}>
					-
				</Button>
			</ButtonContainer>
			<div>
				{tiles.map((tile, index) => (
					<Tile key={index} />
				))}
			</div>
		</AppContainer>
	);
};

export default App;
