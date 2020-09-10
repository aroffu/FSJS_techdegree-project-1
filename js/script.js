/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
	{
		quote: "Have no fear of perfection - you'll never reach it.",
		source: 'Salvador Dalì',
		tag: 'art'
	},
	{
		quote: 'Computers are useless.They can only give you answers.',
		source: 'Pablo Picasso',
		tag: 'art'
	},
	{
		quote:
			'The right things to do are those that keep our violence in abeyance; the wrong things are those that bring it to the fore.',
		source: 'Robert J. Sawyer',
		citation: 'Calculating God',
		year: 2000
	},
	{
		quote:
			"Everyone should think he's good enough to write a quote",
		source: 'Matteo Aroffu',
		citation: 'Techdegree FSJS - Project 1 ',
		year: 2020,
		tag: 'fancy'
	},
	{
		quote: 'A man cannot be too careful in the choice of his enemies.',
		source: 'Oscar Wilde',
		citation: 'The Picture of Dorian Gray',
		year: 1891,
		tag: 'literature'
	},
	{
		quote: 'Violence is the last refuge of the incompetent.',
		source: 'Isaac Asimov',
		citation: 'Salvor Hardin in "Foundation"',
		tag: 'literature'
	}
];

/***
 * `getRandomQuote` function
***/

//returns a integer between 0 (inclusive) and max (exclusive) suitable for array indexes
let getRandomIndex = (max) => Math.floor(Math.random() * Math.floor(max));

//returns a given array element
function getRandomQuote(array) {
	let randomIndex = getRandomIndex(array.length);
	//hint: index 3 gives you my favourite and possibly the best quote, you're welcome
	return array[randomIndex];
}

/***
 * `printQuote` function
***/

function printQuote() {
	const quote_box = document.querySelector('.quote-box');
	//holds HTML code to be printed
	let printedQuote = '';
	let quoteObject = getRandomQuote(quotes);

	/** The following code builds the message to be printed
	 * quote and source are always present
	 * 'if' statements check the presence of other properties and eventually add the relative code to 'printedQuote'
	 * closing p tag is found after 
	**/
	printedQuote = `
    <p class="quote">${quoteObject.quote}</p>
	<p class="source">${quoteObject.source}`;//missing </p> is found after if statements

	if (quoteObject.hasOwnProperty('citation')) {
		printedQuote += `<span class="citation">${quoteObject.citation}</span>`;
	}
	if (quoteObject.hasOwnProperty('year')) {
		printedQuote += `<span class="year">${quoteObject.year}</span>`;
	}
	if (quoteObject.hasOwnProperty('tag')) {
		printedQuote += `<span class="tag">${quoteObject.tag}</span>`;
	}

	//closing tag missing from the line above if statements
	printedQuote += `</p>`;

	//prints actual message
	quote_box.innerHTML = printedQuote;

	//changes background-color on every call 
	document.querySelector('body').style.backgroundColor = `rgb(${getRandomIndex(255)}, ${getRandomIndex(255)}, ${getRandomIndex(255)})`;
}

//prints a first quote right after the page loads otherwise it will be empty
printQuote();

//prints a quote every 5 seconds
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener('click', printQuote, false);

