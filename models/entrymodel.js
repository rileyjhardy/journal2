const mongoose = require('mongoose');

const Schema = mongoose.Schema;


var entrySchema = new Schema({
    date: String,
    entryid: Number,
    expanded: Boolean,
    font: String,
    text: String,
    backgroundcolor: String,
    color: String,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;