var express = require('express');
var router = express.Router();
//import publication model
const publicationModel=require('../models/publication');

/* GET publication listing. */
router.get('/', function(req, res, next) {
    try {
        const publication= publicationModel.find({});
        return res.status(200).send({message:"Data has been added!",data:publication});
    } catch (error) {
        return res.status(400).send({message:"Error Occured!",error:error.message});
    }
});

//add publication
router.post('/', function(req, res, next) {
    try {
        const {Name,Author,YearPublished}=req.body;
        const newpublication=new publicationModel({Name,Author,YearPublished});
        newpublication.save();
    
        return res.status(200).send({message:"Data has been added!",data:newpublication});
    
    } catch (error) {
        return res.status(400).send({message:"Error Occured!",error:error.message});
    }
});
  
//delete publication
router.delete('/:publicationId', function(req, res, next) {
    try {
        const publicationId= req.params.publicationId;
        publicationModel.findByIdAndDelete(publicationId);
    
        return res.status(200).send({message:"publication has been updated!"});
    
    } catch (error) {
        return res.status(400).send({message:"Error Occured in update!",error:error.message});
}});
  
//update publication
router.put('/:publicationId', function(req, res, next) {
    try {
        const publicationId= req.params.publicationId;
        const {Name,Author,YearPublished}=req.body;
        publicationModel.findByIdAndUpdate(publicationId,{Name,Author,YearPublished});
    
        return res.status(200).send({message:"publication has been updated!"});
    
    } catch (error) {
        return res.status(400).send({message:"Error Occured in update!",error:error.message});
    }
});

module.exports = router;