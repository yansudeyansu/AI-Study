const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/about', (req, res) => {
    res.send('About Us page');
});

app.get('/contact', (req, res) => {
    res.send('Contact page');
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});