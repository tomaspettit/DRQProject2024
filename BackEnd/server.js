// server.js

// import express library
const express = require('express');

// Create an Express application called 'app'
const app = express();

// Set variable port 4000, the port of the server will listen
const port = 4000;

// Use CORS in the server
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Use Body-Parser in the server
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB in server.js
// My Link: mongodb+srv://tomaspettit:<db_password>@drqproject24.yvs4s.mongodb.net/
//<db_password> = adminProject
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tomaspettit:adminProject@drqproject24.yvs4s.mongodb.net/');

// Create a Gaming Data Model
const gamingSchema = new mongoose.Schema({
  title:String,
  oldPrice:String,
  newPrice:String,
  poster:String,
  website:String
});

const gamingModel = new mongoose.model('myGamings',gamingSchema);

// This route are added to support a new gaming data using CRUD
// Reading Data: Implement server-side code to fetch data from the database using GET method
app.get('/api/gamings', async (req, res) => {
    const gamings = await gamingModel.find({});
    res.status(200).json({gamings})
});

// Reading Data with an ID
app.get('/api/gaming/:id', async (req ,res)=>{
  const gaming = await gamingModel.findById(req.params.id);
  res.json(gaming);
})

// Updating: Ensure functionality for modifying using PUT method removing data.
app.put('/api/gaming/:id', async (req, res)=>{
  console.log("Updating gaming with ID complete:", req.params.id);
  const gaming = await gamingModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(gaming);
})

// Deleting Data: Ensure functionality for removing data using DELETE method .
app.delete('/api/gaming/:id', async (req, res) => {
  
  console.log('Deleting gaming with ID complete:', req.params.id);
  const gaming = await gamingModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Gaming deleted successfully", gaming });
  
});

// Writing Data: Implement server-side code to add data to the database using POST method
app.post('/api/gamings',async (req, res)=>{
    
    console.log(req.body.title +" has been added");
    const {title, oldPrice, newPrice, poster, website} = req.body;

    const newGaming = new gamingModel({title, oldPrice, newPrice, poster, website});
    await newGaming.save();

    
    res.status(201).json({"message":"Gaming Added!",Gaming:newGaming});
})

// Listens on localhost:4000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});