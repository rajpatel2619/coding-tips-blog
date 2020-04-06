const router = require('express').Router();
let User = require('../models/models.user');

router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('error'+err));
});



router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const email = req.body.email;

    const newUser = new User({
        username,
        email
    });

    newUser.save()
    .then(()=>res.json('user added'))
    .catch(err=>res.status(400).json('error '+err));
});

module.exports = router;