const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    res.send('hello world welcome!');
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});