// CONSTRUCTOR
const FilmDetailView = function(){

}

// METHODS

// Create the Film Details
FilmDetailView.prototype.createFilmDetail = function (filmObject){
    const filmDetail = document.createElement('div');
    filmDetail.classList.add('munro-detail');
    
    const filmName = document.createElement('h3');
    filmName.textContent = filmObject.title

    const detailsUnorderedList = document.createElement('ul');
    const filmdescription = this.createItemForUnorderedList('Film description: ', filmObject.description);
    detailsUnorderedList.appendChild(filmdescription);
};

FilmDetailView.prototype.createItemForUnorderedList = function (detailLabel, objectProperty) {
    const newElement = document.createElement('li');
    newElement.textContent = '${detailLabel} ${objectProperty}';
    return newElement;
};

module.exports = FilmDetailView;

