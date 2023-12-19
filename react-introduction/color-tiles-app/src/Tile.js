import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const TileContainer = styled.div`
	width: 200px;
	height: 75px;
	margin: 10px;
	cursor: pointer;
	position: relative;
	border-radius: 10px;
`;

const ColorCode = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
`;

const Tile = () => {
	const [showColorCode, setShowColorCode] = useState(false);
	const [tileColor, setTileColor] = useState(generateRandomColor());

	useEffect(() => {
		setTileColor(generateRandomColor());
	}, []); // Run only on initial mount, if not the colors will change on every render

	const handleTileClick = () => {
		setShowColorCode(!showColorCode);
	};

	function generateRandomColor() {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	}

	return (
		<TileContainer
			// So the test can identify it
			data-testid="tile-container"
			onClick={handleTileClick}
			style={{backgroundColor: tileColor}}
		>
			{showColorCode && <ColorCode>{tileColor}</ColorCode>}
		</TileContainer>
	);
};

export default Tile;
