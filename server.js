require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// GitHub API headers
const headers = {
    headers:{
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
};


// Route to fetch GitHub repo information
app.get('/api/repo', async (req, res) => {
    async function getData() {
    try {
        const { data } = await axios.get('https://api.github.com/repos/timebuffer/smartbroad', { headers });
        res.json(data); //apiClient.
    } catch (error) {
        res.status(500).send('Error retrieving repository information');
    }
    } getData();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

