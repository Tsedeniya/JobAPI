
const { pick } = require('lodash')
const Joi = require('joi');
const jobModel = require('../models/job-model');


exports.create = async(req,res)=>{
  try {
    const schema = Joi.object({
        job_postion:Joi.string().required(),
        salary: Joi.string()
            .required(),

       experience:Joi.string().required(),
       education_level:Joi.string().required(),
       working_place:Joi.string().required()
    })
    if(schema.validate(req.body).error){
        throw new Error(schema.validate(req.body).error)
    }
      let job = await jobModel.create(req.body);
     
          return res.json(job)
     

  } catch (error) {
      res.status(400).json({
           error : true,
           message:error.message

      })
  }

}

exports.getjobById = async (req, res) => {
    try {
        let jobprojecion = {
            __v:false,
           _id:false,
           created_at:false
       }
        let job = await jobModel.findById({_id:req.params.id},jobprojecion);
        if (job) {
            return res.json(job)
        }
        
        else {
            throw new Error('user does\'t found')
        }


    } catch (error) {
        res.status(400).json(
            {
                error: true,
                message: error.message
            });



    }



}

exports.getAlljobs = async (req, res) => {

    try {
        let jobprojecion = {
            __v:false,
           _id:false,
           created_at:false
       }
        let sort = {}
        if(req.query.sort) {
            sort[req.query.sort] = req.query.asc ? 1 :-1 
        }

        let query = {}

        if(req.query.filter) {
            let filter = JSON.parse(req.query.filter);
            query = pick(filter, ['job_postion']) }
            const options = {
                sort: Object.values(sort).length > 0 ? sort: {
                    'created_at': -1
                },
                page: req.query.page || 1,
                limit: req.query.limit || 10,
               
            }
         
        let jobs = await jobModel.paginate(query,options);
       
            return res.json(jobs)
        
      
    } catch (error) {
        res.status(400).json(
            {
                error: true,
                message: error.message
            }
        )

    }


}

exports.updatejob = async (req, res) => {
    try {
        let job = await jobModel.findById(req.params.id);

        if (job) {
            job = await jobModel.updateOne({ _id: job._id }, req.body);

            return res.json(job)

        }
        throw new Error('user doesn\'t exits')
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })

    }


}

exports.deletejob = async (req, res) => {
    
    try {
          let job = await jobModel.findByIdAndDelete({ _id:req.params.id })
            return res.json(job);
        

    } catch (error) {

        return res.status(400).json({
            error: true,
            message: error.message
        })

    }



}
exports.searchjob = async(req,res)=>{


}