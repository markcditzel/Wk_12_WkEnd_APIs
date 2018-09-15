// Requirements

const AllFilms = require('./models/all_films.js');
const AllFilmsView = require('./views/all_films_view.js');


// DOM Loaded Listener

document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM is loaded and JS in now running');
  
  // Ensure that any Listeners are defined before subscribers (i.e. the model)
  const htmlDomElementToAppendOnTo = document.querySelector('#film-list');
  const allFilmsView = new AllFilmsView(htmlDomElementToAppendOnTo);
  allFilmsView.bindEvents();

  //new up an AllFilms object and get data
  const allFilms = new AllFilms();
  allFilms.getData();



});