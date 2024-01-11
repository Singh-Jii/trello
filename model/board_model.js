const mongo = require('mongoose');


const my_schema = new mongo.Schema({


  author_name: {

    type : String,

    required: true,


  },

  notice_title: {


    type: String,


    required: true,

  },

  notice_description: {

    type: String,

    required: true,


  },


  date: { 
    
    type: Date, 
    
    default: Date.now 

  
  },


});


module.exports = mongo.model('Notice', my_schema);
