const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 3000;

const sneak = require('./routes/sneak.js')
const login = require('./routes/login.js')


app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/sneak', sneak);
app.use('/login', login);



app.use(serveStatic(path.join(__dirname, '/dist')));


app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
})



app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })