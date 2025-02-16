const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello, Jenkins!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
