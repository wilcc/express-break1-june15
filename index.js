const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRouter = require('./controllers/userControllers');

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(`Mongo Error: ${err}`));

app.use(morgan('dev'));

app.use('/api/v1/users', userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
