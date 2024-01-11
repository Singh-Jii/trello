const exp = require('express');

const route = exp.Router();


const board_control = require('../control/board_control');


route.get('/notices', board_control.get_evry_notice);


route.post('/notices', board_control.generate_notice);

route.put('/notices/:id', board_control.chnge_notice);

route.delete('/notices/:id', board_control.del_notice);


module.exports = route;
