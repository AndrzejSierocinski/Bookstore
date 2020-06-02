const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const path = require('path');

const bookRoutes = require('./routes/books'),
  userRoutes = require('./routes/users'),
  imageUploadRoutes = require('./routes/image-upload');

mongoose.connect(config.DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.log("Connected to database!");
}).catch(() => {
  console.log("Connection failed!");
});

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1', imageUploadRoutes);


if (process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(appPath));

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('App is running!');
});
