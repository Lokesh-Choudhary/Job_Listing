const express = require('express');
const router = express.router();
const User = require('../models/jobs');
const verifyAuth = require('../middlewares/verifyAuth')
router.post('/job-post',verifyAuth ,async (req, res)=> {
    try {
        
    const jobPost = new jobPost({
        companyName,
        logoUrl,
        position,
        salary,
        jobType,
        remote,
        location,
        description,
        about,
        slillsRequired : skillsArray,
        recruiterName,

    })
    await jobPost.save();
    return res.json({message : 'Job post Created successfully',
     name :recruiterName
    })
        
    } catch (error) {
        console.log(error);
        res.json({success : false,errorMessage :"Something Went Wrong!"});
        
    }
    
})