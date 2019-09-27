const express = require('express');
const router = express.Router();
const lottery = require('../../model/lottery')

// GET /lottery
router.get('/', (req, res, next) => {
    
    arrNumber = lottery(6);
    for(var i=0; i<arrNumber.length; i++) {
        console.log(arrNumber[i]);
    }
    
    res.status(200).json({
        message: 'Handling GET requests to /lottery',
        nums: arrNumber.toString()
    });
});

module.exports = router;