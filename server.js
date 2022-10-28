const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

const apirest = require('./routes/api.js')


app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apirest);


app.use(serveStatic(path.join(__dirname, '/dist')));


app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
})



app.listen( () => { console.log(`Server started on port ${PORT}`) })