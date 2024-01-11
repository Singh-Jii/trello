const exp = require('express');

const mongo = require('mongoose');

const cr = require('cors');

const board_route = require('./route/board_route');

const configure = require('./configure');

const application = exp();

application.use(cr());

application.use(exp.json());

mongo.connect(configure.mongo_link, 
  
  { 
    
    useNewUrlParser: true, 
    
    useUnifiedTopology: true
  
  });

mongo.connection.on('err', console.error.bind(console, 'database error'));

application.use('/api', board_route);

application.use((er, request, response, next) => {

  console.log(er.stack);


  response.status(500).send('server problem');


});

const my_port = process.env.my_port || 8000;


application.listen(my_port, () => {


  console.log(`${my_port}`);


});