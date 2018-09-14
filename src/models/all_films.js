// Requirements

const PubsSub = require ('../helpers/pub_sub.js');
const Request = require ('../helpers/request.js');

// Constructor

const AllFilms = function (){
    this.data = null;
};

AllFilms.prototype.getData = function(){
    const request = new Request('https://ghibliapi.herokuapp.com/films');
    request.get((data)=>{
        this.data = data;
        PubsSub.publish('AllFilms:all-films', this.data)
        console.log(this.data);  
    });
};

module.exports = AllFilms;

 