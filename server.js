const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();

//bodyParser middleware

app.use(bodyParser.json())

//DB configuration
const db = require('./config/keys').mongoURI;

//connect to mongodb

mongoose
     .connect(db)
     .then(() =>  console.log('mongodb connected successfully...'))
     .catch(err => console.log(err));

    //use routes
    app.use('/api/items', items);

     const port = process.env.PORT || 5000;
    //  app.listen(port, () => console.log('server started on port ${port}'));
     app.listen(port, () => console.log(`Server started on port ${port}`));
