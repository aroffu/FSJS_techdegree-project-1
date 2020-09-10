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
		source: 'Salvador Dalì'
	},
	{
		quote: 'Computers are useless.They can only give you answers.',
		source: 'Pablo Picasso'
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
			"We made a solemn vow not to take any job outside of show business. We borrowed money from parents and friends, rather than take that lethal job waiting tables. This forced us to take any job offered to us. Anything. We once did a show in the middle of the Benjamin Franklin Parkway in Philadelphia as part of a fashion show on a hot July night while all around our stage, a race-riot was fully underway. That's how serious we were about our vow.",
		source: 'Raymond Joseph Teller',
		citation: 'Fury Letter written to Brian Brushwood',
		year: 1993
	},
	{
		quote: 'A man cannot be too careful in the choice of his enemies.',
		source: 'Oscar Wilde',
		citation: 'The Picture of Dorian Gray',
		year: 1891
	},
	{
		quote: 'Violence is the last refuge of the incompetent.',
		source: 'Isaac Asimov',
		citation: 'Salvor Hardin in "Foundation"'
	}
];

/***
 * `getRandomQuote` function
***/

//returns a integer between 0 (inclusive) and max (exclusive) suitable for array indexes
function getRandomIndex(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

/***
 * given an array and a function like 'getRandomIndex' 
 * returns a random object from the array
***/
function getRandomQuote(array, randomIndexFunction) {
	let randomIndex = randomIndexFunction(array.lenght);
	return array[randomIndex];
}

/***
 * `printQuote` function
***/

//object.hasOwnProperty(key)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener('click', printQuote, false);
