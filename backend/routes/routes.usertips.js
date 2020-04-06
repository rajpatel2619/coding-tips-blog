const router = require('express').Router();
let Usertips = require('../models/models.usertips');

router.route('/').get((req,res)=>{
    Usertips.find()
    .then(usertips=>res.json(usertips))
    .catch(err=>res.status(400).json('error'+err));
});


router.route('/add').post((req,res)=>{

    const message = req.body.message;
    const username = req.body.username;
    const email = req.body.email;
    

    const newUsertips = new Usertips({
        message,
        username,
        email
       
    });


    newUsertips.save()
    .then(()=>res.json("usertips added"))
    .catch(err=>res.status(400).json('Error '+err));
});

router.route('/update/:id').post((req,res)=>{
    Usertips.findById(req.params.id)
    .then(usertips=>{
        usertips.message = req.body.message;
        usertips.username = req.body.username;
        usertips.email = req.body.email;

        usertips.save()
        .then(()=>res.json('usertips updated'))
        .catch(err=>res.status(400).json("error "+err));
    })
    .catch(err=>res.status(400).json("error "+err));
       
    });


router.route('/:id').delete((req,res)=>{
    Usertips.findByIdAndDelete(req.params.id)
    .then(()=>res.json('usertips deleted'))
    .catch(err=>res.status(400).json('error'+err));
});


module.exports = router;