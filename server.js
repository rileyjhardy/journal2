const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
});

if (process.env.NODE_ENV === 'production'){

    app.use(express.static('frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', "build", 'index.html'))
});
}

\

const port = process.env.PORT || 5000;

const entryRouter = require('./routes/entry');
app.use('/entry', entryRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})