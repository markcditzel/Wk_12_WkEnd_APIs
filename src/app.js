// Requirements

const AllFilms = require('./models/all_films.js');
const AllApoptosis = require('./models/all_apoptosis.js');


// DOM Loaded Listener

document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM is loaded and JS in now running');


  const allApoptosis = new AllApoptosis();
  allApoptosis.getData();
  
  const allFilms = new AllFilms();
  allFilms.getData();



});