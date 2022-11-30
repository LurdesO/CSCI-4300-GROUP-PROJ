const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');
//const { default: PlaceItem } = require('../src/places/components/PlaceItem');
const Place = require('./models/place');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.post('u1/places', (req, res) => {
  const place = new Place(req.body);
  
  place.save()
  .then((result) => {
    res.redirect('u1/places');
  })
  .catch((err) => {
    console.log(err);
  })

})

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});
const uri = 'mongodb+srv://Lalo1946:test1234@projcluster.kpw8iqv.mongodb.net/?retryWrites=true&w=majority'
mongoose
  .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });
