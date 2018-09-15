// Requirements

const PubsSub = require ('../helpers/pub_sub.js');
const Request = require ('../helpers/request.js');

// Constructor

const AllFilms = function (){
    this.filmsData = [];
};

AllFilms.prototype.getData = function(){
    const request = new Request('https://ghibliapi.herokuapp.com/films')
    request.get((data)=>{
        PubsSub.publish('AllFilms:all-films-ready',data)
        console.log(data);  
    });
};

module.exports = AllFilms;

 