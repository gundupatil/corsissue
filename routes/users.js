var express = require('express');
var router = express.Router();
var User = require('../models/users');
/* GET users listing. */
router.get('/users', (req, res, next)=>{
    //res.send('Retrieving the contact list');
    Contact.find(function(err, users){
        res.json(users);
    })
});
router.post('/user', (req, res, next)=>{
    //logic to add contacts
    let newUser = new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });
    newUser.save((err, user)=>{
        if(err){
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'Contact added successfully'} );
        }
    });

});

module.exports = router;
