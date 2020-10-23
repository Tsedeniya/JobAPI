const userModel = require('../models/user-model');

const Joi = require('joi');
const userModel = require('../models/user-model');


exports.create = async(req,res)=>{
  try {
    const schema = Joi.object({
        full_name:Joi.string().required(),
        username: Joi.string()
            .alphanum().required(),
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        email: Joi.string()
            .email().required()
    })
    if(schema.validate(req.body).error){
        throw new Error(schema.validate(req.body).error)
    }
      let user = await userModel.create(req.body);
     
          return res.json(user)
     

  } catch (error) {
      res.status(400).json({
           error : true,
           message:error.message

      })
  }

}

exports.getUserById = async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id);
        if (user) {
            return res.json(user)
        }
        
        else {
            throw new Error('user does\'t found')
        y}


    } catch (error) {
        res.status(400).json(
            {
                error: true,
                message: error.message
            });



    }



}

exports.getAllUsers = async (req, res) => {

    try {
        let users = await userModel.find();
        if (users) {
            return res.json(users)
        }
        throw new Error('no users found ')
    } catch (error) {
        res.status(400).json(
            {
                error: true,
                message: error.message
            }
        )

    }


}

exports.updateUser = async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id);

        if (user) {
            user = await userModel.updateOne({ _id: user._id }, req.body);

            return res.json(user)

        }
        throw new Error('user doesn\'t exits')
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })

    }


}

exports.deleteUser = async (req, res) => {
    console.log(req.params.id);
    try {
          let user = await userModel.findByIdAndDelete({ _id:req.params.id })
            return res.json(user);
        

    } catch (error) {

        return res.status(400).json({
            error: true,
            message: error.message
        })

    }

}