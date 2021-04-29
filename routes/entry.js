const router = require('express').Router();
let Entry = require('../models/entrymodel');

router.route('/').get((req,res) => {
    Entry.find()
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const date = req.body.date;
    const expanded = req.body.expanded;
    const font = req.body.font;
    const text = req.body.text;
    const backgroundcolor = req.body.backgroundcolor;
    const color = req.body.color;

    const newEntry = new Entry({
        date,
        expanded,
        font,
        text,
        backgroundcolor,
        color,

    });

    newEntry.save()
    
    
        .then(() => res.json("Entry Saved!"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").delete((req,res) => {
    Entry.findByIdAndRemove(req.params.id)
        .then(() => res.json("Entry Deleted!"))
        .catch((err) => res.status(400).json("Error " + err))
})


module.exports = router;