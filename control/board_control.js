const board_model = require('../model/board_model');


exports.get_evry_notice = async (request, response) => {


  try {


    const my_board = await board_model.find();


    response.json(my_board);


  } 
  
  catch (er) {


    response.status(500).json({ er: 'server problem' });


  }


};


exports.generate_notice = async (request, response) => {


  const { author_name, notice_title, notice_description, date } = request.body;


  try {


    const new_board = new board_model({author_name,notice_title,notice_description,date});

    const remain_board = await new_board.save();


    response.status(201).json(remain_board);


  } 
  
  catch (er) {


    response.status(500).json({ er: 'server problem' });


  }


};


exports.chnge_notice = async (request, response) => {


  const { my_id } = request.params;


  const { author_name, notice_title, notice_description, date } = request.body;



  try {


    const chnge_board = await board_model.findByIdAndUpdate(my_id,


      { author_name, notice_title, notice_description, date },{ new: true }


    );
    

    if (!chnge_board) {


      return response.status(404).json({ er: 'notice not available' });


    }

    response.json(chnge_board);


  } 
  
  catch (er) {


    response.status(500).json({ er: 'server problem' });


  }


};


exports.del_notice = async (request, response) => {


  const { my_id } = request.params;


  try {


    const remove_notice = await board_model.findByIdAndDelete(my_id);


    if (!remove_notice) {


      return response.status(404).json({ er: 'notice not available' });


    }


    response.json({ msg: 'notice removed' });


  } 
  
  catch (er) {


    response.status(500).json({ er: 'server problem' });


  }


};