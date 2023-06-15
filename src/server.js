// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/foodRescue', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for food items
const foodItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
});

// Create a model based on the schema
const FoodItem = mongoose.model('FoodItem', foodItemSchema);

// API route to retrieve food items
app.get('/api/foodItems', (req, res) => {
  FoodItem.find({}, (err, foodItems) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(foodItems);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
