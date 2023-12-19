// App.test.js
import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders App component with tile count restrictions and consistent tiles', () => {
	// Render the App component
	render(<App />);

	// Find the "+" and "-" buttons
	const addButton = screen.getByText('+');
	const minusButton = screen.getByText('-');

	// Find the tile count element
	const tileCount = screen.getByText(/color tiles app/i).nextElementSibling;

	// Find the tiles container
	const tilesContainer =
		screen.getByText(/color tiles app/i).nextElementSibling.nextElementSibling;

	// Helper function to add tiles
	const addTiles = count => {
		for (let i = 0; i < count; i++) {
			// Fakes the click event
			userEvent.click(addButton);
		}
	};

	// Helper function to remove tiles
	const removeTiles = count => {
		for (let i = 0; i < count; i++) {
			userEvent.click(minusButton);
		}
	};

	// Helper function to get the count of visible tiles
	const getVisibleTileCount = () => {
		return tilesContainer.querySelectorAll('[data-testid="tile-container"]')
			.length;
	};

	// Check initial state
	expect(tileCount.textContent).toBe('+0-');
	expect(getVisibleTileCount()).toBe(0);
	expect(minusButton.disabled).toBe(true);

	// Add tiles and check restrictions
	addTiles(9);
	expect(tileCount.textContent).toBe('+9-');
	expect(getVisibleTileCount()).toBe(9);
	expect(addButton.disabled).toBe(true);

	// Remove tiles and check restrictions
	removeTiles(5);
	expect(tileCount.textContent).toBe('+4-');
	expect(getVisibleTileCount()).toBe(4);
	expect(addButton.disabled).toBe(false);
	expect(minusButton.disabled).toBe(false);

	// Add more tiles to reach the maximum count
	addTiles(5);
	expect(tileCount.textContent).toBe('+9-');
	expect(getVisibleTileCount()).toBe(9);
	expect(addButton.disabled).toBe(true);

	// Try to add one more tile (should not change)
	userEvent.click(addButton);
	expect(tileCount.textContent).toBe('+9-');
	expect(getVisibleTileCount()).toBe(9);
	expect(addButton.disabled).toBe(true);

	// Remove tiles and check restrictions
	removeTiles(9);
	expect(tileCount.textContent).toBe('+0-');
	expect(getVisibleTileCount()).toBe(0);
	expect(minusButton.disabled).toBe(true);
});
