// Requirements

const AllFilms = require('./models/all_films.js');


// DOM Loaded Listener

document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM is loaded and JS in now running');

  const allFilms = new AllFilms();
  allFilms.getData();

});