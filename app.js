const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/searchHistory');

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Define your API for saving search history
const searchSchema = new mongoose.Schema({
    query: String,
    date: { type: Date, default: Date.now }
});

app.use(express.static(path.join(__dirname, 'public')));


const Search = mongoose.model('Search', searchSchema);

// API endpoint to save the search term
app.post('/api/save-search', (req, res) => {
    const searchQuery = new Search({ query: req.body.query });

    searchQuery.save((err) => {
        if (err) {
            return res.status(500).send('Error saving search');
        }
        res.json({ message: 'Search saved successfully' });
    });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
