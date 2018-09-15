// REQUIRES
// What does this class require to function
// Which other classes are required (think imported)
const PubSub = require('../helpers/pub_sub.js');
const FilmDetailView = require('./film_detail_view.js');

// CONSTRUCTOR
// It will take an argument - which is an object that has been created by querySelector
// The object represents an existing html element onto which new material will be injected into (appended on to)
const AllFilmsView = function (htmlDomElementToAppendOnTo){
    this.htmlDomElementToAppendOnTo = htmlDomElementToAppendOnTo;
};

// METHODS - attempt single responsibility

// Need to subscribe to a channel carrying a event
// It needs an PubSub subscribe for a specific event which encompasses a 'channel' (i.e., AllFilms:all-films-ready) and 'event' (i.e., event.detail)
// we need the 'array of all films' which is the event linked to AllFilms:all-films-ready
// the array contains a objects
// each object is a film 
// each object has a key for: id, title, description, etc
// some of the values associated with the keys are: Strings (e.g., description: "The film is...")
// some of the values are associated with objects - such as an array with only one object within it 
// (e.g., vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"]) - contains a single hyperlink

// (1) bindEvents()
// In context, the method is called on an object created in appJS
// The allFilmsView object will have the 'htmlDomElementToAppendTo' as a property
// The channel to listen for is coded
// When the event is received the following functions / actions will occure
// The property 'htmlDomElementToAppendOnTo' is cleared and defiend as a String
// The event (event) associated with the channel is then passed on to a render function
// => retrieveAndRenderElementfromArray

AllFilmsView.prototype.bindEvents = function (){
    PubSub.subscribe('AllFilms:all-films-ready', (event) => {
        // this.clearHtmlDomElementToAppendOnTo() // go to 1.1
        this.retriveElementFromArrayAndRender(event.detail); // go to 1.2
       
        
    });
};

// (1.1) clear htmlDomElementToAppendOnTo and assign as String


AllFilmsView.prototype.clearHtmlDomElementToAppendOnTo = function() {
this.htmlDomElementToAppendOnTo.innerHTML = '';
}// then return to (1) - next line after line calling the method

// (1.2) Take event and create single objects from the array
// Loop through the array of objects/elements
// Call createFilmListItem()
// Create a new view (filmDetailView) - call to another a Class
// Then create a new film element - call to another Classes method
// Append each element onto the 'htmlDomElementToAppendOnTo'

AllFilmsView.prototype.retriveElementFromArrayAndRender = function (films) {
    films.forEach ((film) => {        
        const filmItem = this.createFilmListItem(film);
        this.htmlDomElementToAppendOnTo.appendChild(filmItem);
    });
}; 

AllFilmsView.prototype.createFilmListItem = function (film){
    const filmDetailView = new FilmDetailView(); // this is a new class
    const filmDetail = filmDetailView.createFilmElement(film);
    return filmDetail;
};

module.exports = AllFilmsView;





