import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tile from './Tile';

test('renders Tile component with a random color that remains unchanged on every render', () => {
	// Render the Tile component
	render(<Tile />);

	// Find the TileContainer element
	const tileContainer = screen.getByTestId('tile-container');

	// Get the initial color of the tile
	const initialColor = tileContainer.style.backgroundColor;

	// Trigger a re-render
	userEvent.click(tileContainer);

	// Get the color after the re-render
	const updatedColor = tileContainer.style.backgroundColor;

	// Assert that the colors remain the same
	expect(updatedColor).toBe(initialColor);
});
