/* Task 2
🗓️ Due by Thursday

This should be the last exercise. Make sure you know async javascript and REST APIs :grinning: 

Query this API https://restcountries.com/v3.1 to build a countries list.

Find out how to use the API

Create a page where you fetch all the countries

Create a list displaying every country

The countries should be displayed as cards containing at least the name, the flag, and the languages spoken in that country. You can customize adding more data if you want.

Create a text input to filter the countries by name

When the user types something in this text input, you should dynamically update the countries list, filtering the countries that include that string in its English name
 */

async function fetchData() {
	try {
		const response = await fetch('https://restcountries.com/v3.1/all');
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		return response.json();
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

function createCountryCard(country) {
	const card = document.createElement('div');
	card.classList.add('country-card');
	const flagImage = document.createElement('img');
	flagImage.src = country.flags.png;
	card.appendChild(flagImage);

	let isFlipped = false;

	card.addEventListener('click', () => {
		isFlipped = !isFlipped;

		if (isFlipped) {
			card.style.transform = 'rotateY(180deg)';
			card.innerHTML = `
        <div class="country-info">
          <p><strong>${country.name.common}</strong></p>
          <p>Capital: ${country.capital[0]}</p>
          <p>Languages: ${Object.values(country.languages).join(', ')}</p>
        </div>
      `;
		} else {
			card.style.transform = 'rotateY(0deg)';
			card.innerHTML = `<img src="${country.flags.png}" />`;
		}
	});

	card.addEventListener('mouseenter', () => {
		card.style.transform = 'scale(1.1)';
	});

	card.addEventListener('mouseleave', () => {
		card.style.transform = 'scale(1)';
	});

	return card;
}

function filterCountries(data, filter) {
	return data.filter(country =>
		country.name.common.toLowerCase().includes(filter.toLowerCase()),
	);
}

async function main() {
	const data = await fetchData();
	const countryCards = document.getElementById('countryCards');
	const countryFilter = document.getElementById('countryFilter');

	countryFilter.addEventListener('input', () => {
		const filterValue = countryFilter.value;
		const filteredData = filterCountries(data, filterValue);
		countryCards.innerHTML = '';

		filteredData.forEach(country => {
			const card = createCountryCard(country);
			countryCards.appendChild(card);
		});
	});

	data.forEach(country => {
		const card = createCountryCard(country);
		countryCards.appendChild(card);
	});
}

main();
