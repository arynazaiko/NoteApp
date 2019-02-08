import renderNotes from './renderNotes.js'; 

const RANDOM_JOKES_URL = 'https://api.chucknorris.io/jokes/random';
let addButton = document.getElementById('add_note');
let removeAllButton = document.getElementById('remove_notes');
let searchField = document.getElementsByClassName('search-field')[0];
let jokes = [];

addButton.addEventListener('click', () => getJoke() );

removeAllButton.addEventListener('click', () => {
  jokes = [];
  renderNotes(jokes);
});

searchField.addEventListener('keyup', event => {
  let searchText = event.target.value;

  let filtered = jokes.filter(joke => {
    return (
      joke.value.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  renderNotes(filtered);
});

function getJoke() {
  fetch(RANDOM_JOKES_URL)
    .then(response => response.json() )
    .then(pushJoke);
}

function pushJoke(joke) {
  const randomColor = getRandomColor().backgroundColor;
  joke.backgroundColor = randomColor;
  jokes.push(joke);
  renderNotes(jokes);
}

function getRandomColor() {
  return NOTE_COLORS[Math.floor(Math.random()*NOTE_COLORS.length)];
}

const NOTE_COLORS = [
  {backgroundColor: '#FF9640'}, 
  {backgroundColor: '#992667'}, 
  {backgroundColor:'#46A229'}
];

