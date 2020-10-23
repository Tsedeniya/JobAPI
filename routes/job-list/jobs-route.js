const router = require('express-promise-router')();
const job = require('../../controllers/job-controller');
  

  //drug crud
  //add drugs
  router.post('/create',job.create);
  //get one drug
  router.get('/:id',job.getjobById);
  //get all drugs
  router.get('/',job.getAlljobs);
  //search drugs by name 
  

  //delete a drug
  router.delete('/delete/:id',job.deletejob);
  //update a drug
  router.patch('/update/:id', job.updatejob)
 

  
  
module.exports = router;