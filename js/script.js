// JavaScript Document

/*** 
 * `quotes` array 
***/
let quotes = [
	{
		quote: '“The Best Way To Get Started Is To Quit Talking And Begin Doing.”',
		source: 'Walt Disney'
	},
	{
		quote: '“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”',
		source: 'Winston Churchill'
	},
	{
		quote: '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”',
		source: 'Unknown'
	},
	{
		quote: '“Don’t Let Yesterday Take Up Too Much Of Today.”',
		source: 'Will Rogers'
	},
	{
		quote: '“Life is 10% what happens to me and 90% of how I react to it.”',
		source: 'Charles Swindoll'
	},
	{
		quote: '“Don’t spend time beating on a wall, hoping to transform it into a door.”',
		source: 'Coco Chanel',
		AuthorProfession: 'Designer' //additional property
	},
	{
		quote: '“Creativity is intelligence having fun.”',
		source: 'Albert Einstein'
	},
	{
		quote: '“Optimism is the one quality more associated with success and happiness than any other.”',
		source: 'Brian Tracy'
	},
	{
		quote: '“Always keep your eyes open. Keep watching. Because whatever you see can inspire you.”',
		source: 'Grace Coddington'
	},
	{
		quote: '“Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.”',
		source: 'Patrick McKenzie',
		citation: 'Twitter',
		year: 2016
		
	}
]

/***
 * `colors` array 
***/
let colors = ['blue', 'green', 'black', 'tomato']

/***
 * `getRandomQuote` function
***/
function getRandomQuote (array) {
	let randomNumber = Math.floor(Math.random() * array.length);
	return array[randomNumber];
}

/***
 * `getRandomColor` function
***/
function getRandomColor (array) {
	let randomNumber = Math.floor(Math.random() * array.length);
	return array[randomNumber];
}

/***
 * `printQuote` function
***/
function printQuote () {
	let quote = getRandomQuote(quotes);
	let color = getRandomColor(colors);
	let citation = quote.citation;
	let year = quote.year;
	let AuthorProfession = quote.AuthorProfession;
	let quoteBox = document.getElementById('quote-box');
	let body = document.querySelector('body');
	let quotehtml = `
		<p class="quote">${quote.quote}</p>
		<p class="source">${quote.source}`;
	if (citation) { //add citation if present
	quotehtml = quotehtml.concat(`<span class="citation">${citation}</span>`);
	}
	if (year) { //add year if present
		quotehtml = quotehtml.concat(`<span class="year">${year}</span>`);
	}
	if (AuthorProfession) { //add author profession if present
		quotehtml = quotehtml.concat(`<span class="year">${AuthorProfession}</span>`);
	}
	quotehtml = quotehtml.concat('</p>');
	quoteBox.innerHTML = quotehtml;
	body.style.backgroundColor = color
}

/***
 * update quote every 5 seconds
***/
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);