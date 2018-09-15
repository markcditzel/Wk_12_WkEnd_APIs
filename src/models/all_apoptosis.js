// Requirements

const PubsSub = require ('../helpers/pub_sub.js');
const Request = require ('../helpers/request.js');

// Constructor

const AllApoptosis = function (){
    this.data2 = null;
};


AllApoptosis.prototype.getData = function(){
    const request = new Request('https://www.ebi.ac.uk/QuickGO/services/ontology/go/search?query=apoptosis&limit=100');
    request.get((data2)=>{
        this.data2 = data2;
        PubsSub.publish('AllApoptosis:all-apoptosis', this.data2)
        console.log(this.data2);  
    });
};

module.exports = AllApoptosis;