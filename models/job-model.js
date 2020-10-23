const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const jobSchema =  mongoose.Schema({

    job_postion:{type:String },
    salary:{type:String},
    experience:{type:String},
    education_level:{type:String},
    working_place:{type:String},
    created_at:{type:Date},
});
jobSchema.plugin(mongoosePaginate);
module.exports =  mongoose.model('job',jobSchema);