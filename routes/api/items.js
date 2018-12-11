const express = require('express');
const router = express.Router();

//item model

const Item = require('../../models/Item');  

//route get api/items
//desc get all items
//@access public

router.get('/', (req, res ) =>{
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items));
})

//route POST api/items
//desc CREATE an item
//@access public

router.post('/', (req, res ) =>{
    const newitem = new Item({                    //this is in connection with the item created in model direcrory
       name: req.body.name                     //this is one of the object created in model, date is not included because it was set to default 
    });

    newitem.save().then(item => res.json(item));             //then give us back the item that is saving
})

//route DELETE api/items/:id       the delete will have an id that is the route has changed compare to post and get requset
//desc DELETE an item
//@access public

router.delete('/:id', (req, res ) =>{    //like a placeholder wi9th an id
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
    
   
});

    

module.exports = router;