'use strict';

const express = require('express');


const app = express();
const port = 3030;

app.get('/', (req, res) => {
    res.send('Hello, 👌');
});

app.listen(port, () => console.log(` Start on http://127.0.0.1:${port}/`) );