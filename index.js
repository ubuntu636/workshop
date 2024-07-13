const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');
const { hitApiRoute } = require('./controllers/formController');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


app.use('/api', formRoutes);
const URI=process.env.URI
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});




app.listen(port, () => {
  
  console.log(`Server running on port ${port}`);
});
