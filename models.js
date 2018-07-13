const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Ian:rebeca_123@cluster0-osr2e.gcp.mongodb.net/devf?retryWrites=true',
{ useNewUrlParser: true });

const Note = mongoose.model('Note', {
    text: String,
    color: String
});
module.exports = Note;
